import { collection, deleteDoc, doc, getDocs, getFirestore, query, setDoc, updateDoc } from "firebase/firestore"
import firebaseApp from "../firebase/firebaseConfig"
import TYPES from "../types/types"

const firestore = getFirestore(firebaseApp)

const addNewSaving =(id,saving)=>{
    return{
        type:TYPES.SAVINGSNEW,
        payload:{
            id,
            ...saving
        }
    }
}

export const startAddingNewSaving =(date,value,description)=>{

    return async(dispatch,getState)=>{

        const state = getState();
        const {uid} = state.auth;

        const newSaving = {

            date:date,
            value:value,
            description:description
        }

        const docuRef = doc(collection(firestore,`${uid}/app/savings/`))
        await setDoc(docuRef,newSaving);
        dispatch(addNewSaving(docuRef.id,newSaving))

    }

}

const setSavings = (savings)=>{

    return{
        type:TYPES.SAVINGLOAD,
        payload:savings
    }

}

const loadSavings = async(uid)=>{

    const docuRef = query(collection(firestore,`${uid}/app/savings/`))
    const querySnap = await getDocs(docuRef);
    const savings = [];

    querySnap.forEach((snap)=>{
        savings.push({
            id:snap.id,
            ...snap.data()
        })
    })

    return savings;
}

export const startLoadingSavings = (uid)=>{

    return async(dispatch)=>{

        const savings = await loadSavings(uid);
        dispatch(setSavings(savings));

    }
}

const deleteSaving = (id)=>{
    return{
        type:TYPES.SAVINGDELETE,
        payload:id
    }
}

export const startDeletingSaving = (id)=>{

    return async(dispatch,getState)=>{

        const {uid} = getState().auth;
        const savingRef = doc(firestore,`${uid}/app/savings/${id}`);
        await deleteDoc(savingRef);

        dispatch(deleteSaving(id))
    }

}

export const setActiveSaving = (saving)=>{
    return{
        type:TYPES.SAVINGACTIVE,
        payload:saving
    }
}


const editSaving = (id,saving) =>{
    return{
        type:TYPES.SAVINGUPDATE,
        payload:{
            id,
            saving:{
                id,
                ...saving
            }
        }
    }
}

export const startEditingSaving = ()=>{

    return async(dispatch,getState)=>{

        const state = getState();
        const {uid} = state.auth;
        const {active} = state.saving;
        const savingToEdit = {...active};

        console.log("usuario id", uid );
        console.log("active saving", active );

        delete savingToEdit.id;
        const savingRef = doc(firestore, `${uid}/app/savings/${active.id}`)
        await updateDoc(savingRef,savingToEdit)
        dispatch(editSaving(active.id,savingToEdit))
    }

}

export const savingCleaningLogout = () =>{
    return{
        type:TYPES.SAVINGLOGOUT
    }
}