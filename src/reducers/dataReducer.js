/*

de la información ya almacenada:

total ahorrado
mayor valor ahorrado
mes de más ahorro
mes de menos ahorro
cantidad de ahorro por mes



mayor valor gastado
total gastado
mes de más gasto
mes de menos gasto
cantidad de gasto por mes


tareas pendientes
tareas realizadas
tareas con alertas

*/

import TYPES from "../types/types";



const initState =  {

    saving:{
        totalSaved: 0,
        mostValueSaved:0,
        greatestMothValue:0,
        lowerMonthValue:0,
        savingPerMoth:{}
    },
    spending:{
        totalSpent: 0,
        mostValueSpent:0,
        greatestMothValue:0,
        lowerMonthValue:0,
        spentPerMoth:{}
    },
    taks:{
        undoneTaks:0,
        doneTaks:0,
        taskWithAlerts:[]
    }
}


const dataReducer = (state = initState,action)=>{
    switch (action.type) {
        
        //savings
        case TYPES.DATATOTALSAVED:
            return{
                ...state,
                saving:{...state.saving,totalSaved:action.payload}
            }
        case TYPES.DATAMOSTVALUESAVED:
            return{
                ...state,
                saving:{...state.saving,mostValueSaved:action.payload}
            }
        //spendings
        case TYPES.DATATOTALSPENT:
            return{
                ...state,
                spending:{...state.spending,totalSpent:action.payload}
            }
        case TYPES.DATAMOSTVALUESPENT:
            return{
                ...state,
                spending:{...state.spending,mostValueSpent:action.payload}
            }
        //Tasks
        case TYPES.DATAUNDONETAKS:
            return{
                ...state,
                taks:{...state.taks,undoneTaks:action.payload}
            }
        case TYPES.DATADONETAKS:
            return{
                ...state,
                taks:{...state.taks,doneTaks:action.payload}
            }
        case TYPES.DATATAKSWITHALERT:
            return{
                ...state,
                taks:{...state.taks,taskWithAlerts:action.payload}
            }
        
    
        default:
            return state;
    }
}

export default dataReducer;