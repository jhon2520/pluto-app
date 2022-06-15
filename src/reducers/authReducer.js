import TYPES from "../types/types";

const initState = {
    uid:"",
    name: "",

}




const authReducer = (state = initState,action)=>{

    switch (action.type) {
        case TYPES.AUTHLOGIN:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case TYPES.AUTHLOGOUT:
            return{}
    
        default:
            return state;
    }

}

export default authReducer