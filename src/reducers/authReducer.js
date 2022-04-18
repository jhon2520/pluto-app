/**
{
    uid:"1234564",
    displayName: "Jhon Romero"
}

 */

import TYPES from "../types/types";

const authReducer = (state = {},action)=>{

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