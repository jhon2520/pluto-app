/*
{
    spends:[
        {
            id:"",
            date:"",
            value:"",
            description:"",
        }
    ],
    active:null,
    active:{
            id:"",
            date:"",
            value:"",
            description:"",
    }
}




*/

import TYPES from "../types/types";

const initState = {
    spends:[],
    active:null,
}


const spendReducer = (state = initState,action)=>{

    
    switch (action.type) {

        case TYPES.SPENDADDNEW:
            return{
                ...state,
                spends:[...state.spends,/*action.payload */]
            }

        case TYPES.SPENDLOAD:
            return{
                ...state,
                active:[],
                spends:action.payload
            }

        case TYPES.SPENDDELETE:
            return{
                ...state,
                active:null,
                spends: state.spends.filter((spend)=> spend.id !== action.payload )
            }
        case TYPES.SPENDACTIVE:
            return{
                ...state,
                active:{
                    ...action.payload
                }
            }

        case TYPES.SPENDUPDATE:
            return{
                ...state,
                spends: state.spends.map((spend)=> spend.id === action.payload.id
                ? action.payload.spend
                : spend
                )
            }

        case TYPES.SPENDLOGOUT:
            return{
                ...state,
                active:null,
                spends:[]
            }

        default:
            return state;
    }

}

export default spendReducer