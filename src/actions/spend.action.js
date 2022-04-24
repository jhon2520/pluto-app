import TYPES from "../types/types"
import {collection, doc,getFirestore, setDoc,getDocs,query, deleteDoc, Firestore, updateDoc} from "firebase/firestore"
import firebaseApp from "../firebase/firebaseConfig"


const firestore = getFirestore(firebaseApp)

export const addNewSpend = (id,spend)=>{

    return{
        type:TYPES.SPENDADDNEW,
        payload:{
            id,
            ...spend
        }
    }
}


export const startAddingNewSpend = (value,description,date)=>{

    return async(dispath,getState)=>{

        const state = getState();
        const {uid} = state.auth;
        console.log(state);

        const newSpend = {

            date: date,
            value : value,
            description: description

        }

        const docuref = doc(collection(firestore,`${uid}/app/spends/`))
        await setDoc(docuref,newSpend);
        console.log("docu ");
        dispath(addNewSpend(docuref.id,newSpend))
    }

}



export const setSpends = (spends)=>{

    return {
        type:TYPES.SPENDLOAD,
        payload:spends
    }

}


const loadSpends =  async(uid) =>{

    const spendsSnap = await getDocs(query(collection(firestore,`${uid}/app/spends`)))
    const spends = [];

    spendsSnap.forEach(snap=>{
        spends.push({
            id:snap.id,
            ...snap.data()
        })
    })

    return  spends;

}

export const startLoadingSpends = (uid)=>{

    return async(dispatch)=>{

        const spends = await loadSpends(uid);
        // console.log(spends);
        dispatch(setSpends(spends));

    }

}

export const deleteSpend = (id)=>{
    return{
        type:TYPES.SPENDDELETE,
        payload:id
    }
}

export const startDeletingSpend = (id)=>{

    return async(dispatch,getState)=>{

        const {uid} = getState().auth;
        const spendRef = doc(firestore,`${uid}/app/spends/${id}`)
        await deleteDoc(spendRef);

        dispatch(deleteSpend(id));

    }

}

export const activeSpend = (id,spend) =>{
    return{
        type:TYPES.SPENDACTIVE,
        payload:{
            id,
            ...spend
        }
    }

}

export const editSpend = (id,spend)=>{

    return{
        type:TYPES.SPENDUPDATE,
        payload:{
            id,
            spend:{
                id,
                ...spend
            }
        }
    }
}

export const startEditingSpend = (spend)=>{

    return async(dispatch,getState)=>{

        const state = getState();
        const {uid} = state.auth
        console.log("uid",uid);

        const spendToEdit = {...spend}
        console.log("spendtoEdit",spendToEdit)

        delete spendToEdit.id
        console.log("spendtoEdit sin id",spendToEdit)

        const spendRef = doc(firestore, `${uid}/app/spends/${spend.id}`)
        console.log("spend.id", spend.id);
        console.log("spenRef",spendRef)

        await updateDoc(spendRef,spendToEdit)
        dispatch(editSpend(spend.id,spendToEdit));
        
    }

}