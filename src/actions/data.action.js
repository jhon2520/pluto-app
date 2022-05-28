import { collection, getDocs, getFirestore, query } from "firebase/firestore"
import { parseInt } from "lodash"
import firebaseApp from "../firebase/firebaseConfig"
import TYPES from "../types/types"


const firestore = getFirestore(firebaseApp)


//SAVINGS

export const setTotalSave = (value)=>{
    return{
        type:TYPES.DATATOTALSAVED,
        payload:value
    }
}

const setMostValueSave = (value)=>{
    return{
        type:TYPES.DATAMOSTVALUESAVED,
        payload:value
    }
}


//TODO: REvisar si esto lo hago mejor con los savings guardados ya en el state en vez de llamar la base
export const startSettingTotalSave = ()=>{

    return async(dispatch,getState)=>{

        const state = getState();
        const {uid} = state.auth;

        //obtener parámetros iniciales
        let snaps = []
        let totalSavings = 0
        let values = []
        
        //obtener la referencia de todos los savinds
        const queryDoc = query(collection(firestore,`${uid}/app/savings/`))
        const querySnap = await getDocs(queryDoc);
        querySnap.forEach((snap)=>{
            totalSavings += parseInt(snap.data().value) 
            values.push(snap.data().value)
            snaps.push(snap.data())
        })
        
        //console.log(snaps)

        const maxSaving = Math.max(...values)

        dispatch(setMostValueSave(maxSaving))
        dispatch(setTotalSave(totalSavings))
    }

}


//SPENDS

const setTotalSpent = (value)=>{
    return{
        type:TYPES.DATATOTALSPENT,
        payload:value
    }
}

const setMostSpent = (value)=>{
    return{
        type:TYPES.DATAMOSTVALUESPENT,
        payload:value
    }
}

export const startSettingDataSpent = ()=>{

    return async(dispatch,getState)=>{

        
        const state = getState();
        const {uid} = state.auth;
        let totalSpent = 0
        let values = []

        const queryDoc = query(collection(firestore,`${uid}/app/spends/`))
        const querySnap = await getDocs(queryDoc);

        querySnap.forEach((snap)=>{
            totalSpent += parseInt(snap.data().value)
            values.push(snap.data().value)
        })

        const maxSpent = Math.max(...values)
        dispatch(setMostSpent(maxSpent))
        dispatch(setTotalSpent(totalSpent))

    }

}

//TASKS
//las tareas las llamaré desde el state en vez de la base de datos para mirar si hay alguna diferencia perceptible
const setUndoneTaks = (value) =>{

    return{
        type:TYPES.DATAUNDONETAKS,
        payload: value
    }
}
const setDoneTaks = (value) =>{

    return{
        type:TYPES.DATADONETAKS,
        payload: value
    }
}

const setTaskWithAlert = (todos)=>{
    return{
        type:TYPES.DATATAKSWITHALERT,
        payload:todos
    }
}


export const startSettingUndoneTaks = ()=>{

    return async(dispatch, getState)=>{

        const  state = getState();
        const {uid} = state.auth;
        
        
        let contadorUndoneTaks = 0;
        let contadorDoneTaks = 0;
        let todosWithAlert = [];

        const queryDoc = query(collection(firestore,`${uid}/app/todos`))
        const querySnap = await getDocs(queryDoc);


        //console.clear()
        querySnap.forEach((el)=>{

            (el.data().done)?contadorDoneTaks++:contadorUndoneTaks++
            (el.data().hasAlert === "1" && !el.data().done) && todosWithAlert.push(el.data())
            
        })
        // console.log({contadorDoneTaks});
        // console.log({contadorUndoneTaks});
        //console.log(todosWithAlert);
        dispatch(setDoneTaks(contadorDoneTaks))
        dispatch(setUndoneTaks(contadorUndoneTaks))
        dispatch(setTaskWithAlert(todosWithAlert))
    }

}





















