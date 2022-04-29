import TYPES from "../types/types";

/*
{
    saving:[
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
const initState = {
    savings:[],
    active:null
}



const savingsReducer = (state = initState, action)=>{

    switch (action.type) {
        case TYPES.SAVINGSNEW:{
            return{
                ...state,
                active:[],
                savings:[...state.savings]
            }
        }

        case TYPES.SAVINGLOAD:{
            return{
                ...state,
                active:[],
                savings: action.payload
            }
        }

        case TYPES.SAVINGDELETE:{
            return{
                ...state,
                active:[],
                savings:state.savings.filter((saving)=> saving.id !== action.payload)
            }
        }

        case TYPES.SAVINGACTIVE:{
            return{
                ...state,
                active:action.payload
            }
        }

        case TYPES.SAVINGUPDATE:{
            return{
                ...state,
                savings:state.savings.map((saving)=> saving.id === action.payload.id
                ? action.payload.saving
                : saving
                )
            }
        }

        case TYPES.SAVINGLOGOUT:{
            return{
                ...state,
                active:null,
                savings:[]
            }
        }

        default:
            return state;
    }

}

export default savingsReducer;