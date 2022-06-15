import {getAuth,createUserWithEmailAndPassword,updateProfile,signOut,signInWithPopup,GoogleAuthProvider, signInWithEmailAndPassword} from "firebase/auth"
import firebaseApp from "../firebase/firebaseConfig"
import errorMessage from "../helpers/errorMessage"
import successMessage from "../helpers/successMessage"


import TYPES from "../types/types"
import { dataCleaningLogout } from "./data.action"
import { savingCleaningLogout } from "./savings.actions"
import { spendCleaningLogout } from "./spend.action"
import { todoCleningLogout } from "./todo.action"
import { uiCleaningLogout } from "./ui.action"

export const login = (uid,displayName) =>{
    return{
        type:TYPES.AUTHLOGIN,
        payload:{
            uid,
            displayName
        }
    }
}

export const startRegisterWithNameEmailPassword =(name,email,password)=>{

    return(dispath)=>{

        const auth = getAuth(firebaseApp);

        createUserWithEmailAndPassword(auth,email,password)
        .then(async(data)=>{

            const {user} = data
            await updateProfile(user,{displayName:name})
            dispath(login(user.uid,user.displayName));
            successMessage(`usuario ${user.displayName}`,"Usuario creado correctamente")
            
        }).catch((err)=>{
            errorMessage("Error",err.message)
        })

    }

}

export const startLogignWithGoogle = ()=>{

    return(dispath)=>{

        const auth = getAuth(firebaseApp);
        const googleAuthProvider = new GoogleAuthProvider();

        signInWithPopup(auth,googleAuthProvider)
        .then((data)=>{
            const {user} = data
            dispath(login(user.uid,user.displayName))
        })
    }
}


export const startLoginWithEmailPassword = (email,password)=>{

    return(dispath)=>{

        const auth = getAuth(firebaseApp);
        signInWithEmailAndPassword(auth,email,password)
        .then((data)=>{
            const {user} = data;
            dispath(login(user.uid,user.displayName))
        })
        .catch((err)=>{
            errorMessage("Error",err.message);
        })

    }

}



export const logout = ()=>{
    return {
        type:TYPES.AUTHLOGOUT
    }
}

export const startLogout = ()=>{

    return async(dispath)=>{

        const auth = getAuth(firebaseApp);
        await signOut(auth);
        dispath(spendCleaningLogout())
        dispath(savingCleaningLogout())
        dispath(todoCleningLogout())
        dispath(dataCleaningLogout())
        dispath(uiCleaningLogout())
        dispath(logout())
    }

}