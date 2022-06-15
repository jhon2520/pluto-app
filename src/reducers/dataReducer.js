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
        savingPerMoth:[],
        monthMostSaved:null
    },
    spending:{
        totalSpent: 0,
        mostValueSpent:0,
        spentPerMoth:[],
        monthMostSpendt:null
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
        case TYPES.DATASAVINGPERMONTH:
            return{
                ...state,
                saving:{...state.saving,savingPerMoth:action.payload}
            }
        case TYPES.DATAMONTHMOSTSAVING:
            return{
                ...state,
                saving:{...state.saving,monthMostSaved:action.payload}
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
        case TYPES.DATASPENDTPERMONTH:
            return{
                ...state,
                spending:{...state.spending,spentPerMoth:action.payload}
            }
        case TYPES.DATAMONTHMOSTSPENT:
            return{
                ...state,
                spending:{...state.spending,monthMostSpendt:action.payload}
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
        case TYPES.DATALOGOUT:
            return{
                ...state,
                saving:{
                    totalSaved: 0,
                    mostValueSaved:0,
                    savingPerMoth:[],
                    monthMostSaved:null
                },
                spending:{
                    totalSpent: 0,
                    mostValueSpent:0,
                    spentPerMoth:[],
                    monthMostSpendt:null
                },
                taks:{
                    undoneTaks:0,
                    doneTaks:0,
                    taskWithAlerts:[]
                }
            }
        
    
        default:
            return state;
    }
}

export default dataReducer;