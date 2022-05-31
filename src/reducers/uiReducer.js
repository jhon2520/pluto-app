import TYPES from "../types/types";

const initState = {
    alertTodoOpen : false,
    modalAlreadyOpen : false,
    isDarkMode:false,
}

const uiReducer =(state = initState,action)=>{

    //console.log(action);

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
            };

        case TYPES.UISETALREADYOPENMODAL:
            return{
                ...state,
                modalAlreadyOpen:true
            }

        case TYPES.UISETDARKMODE:
            // console.log("llego al dispatch dark");
            return{
                ...state,
                isDarkMode:true
            }
        case TYPES.UISETLIGHTMODE:
            // console.log("llego al dispatch ligyh");
            return{
                ...state,
                isDarkMode:false
            }
            
        default:
            return state;
    }

}

export default uiReducer;