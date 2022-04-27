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
                savings:[...state.savings,action.payload]
            }
        }
        default:
            return state;
    }

}

export default savingsReducer;