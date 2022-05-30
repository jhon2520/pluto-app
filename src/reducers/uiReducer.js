import TYPES from "../types/types";

const initState = {
    alertTodoOpen : false,
    modalAlreadyOpen : false
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
        case TYPES.UISETALREADYOPENMODAL:
            return{
                ...state,
                modalAlreadyOpen:true
            }
        default:
            return state;
    }

}

export default uiReducer;