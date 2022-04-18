import {getAuth,createUserWithEmailAndPassword,updateProfile,signOut,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import firebaseApp from "../firebase/firebaseConfig"
import errorMessage from "../helpers/errorMessage"
import successMessage from "../helpers/successMessage"


import TYPES from "../types/types"

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




export const logout = ()=>{
    return {
        type:TYPES.AUTHLOGOUT
    }
}

export const startLogout = ()=>{

    return async(dispath)=>{

        const auth = getAuth(firebaseApp);
        await signOut(auth);
        dispath(logout())
    }

}