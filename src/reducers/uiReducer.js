import TYPES from "../types/types";

const initState = {
    alertTodoOpen : false
}

const uiReducer =(state = initState,action)=>{

    switch (action.type) {
        case TYPES.UIOPENALERTTODOMODAL:
            return{
                ...state,
                alertTodoOpen:true
            }
        case TYPES.UICLOSEALERTTODOMODAL:
            return{
                ...state,
                alertTodoOpen:false
            }
        default:
            return state;
    }

}

export default uiReducer;