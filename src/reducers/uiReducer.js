import TYPES from "../types/types";

const initState = {
    alertTodoOpen : false,
    modalAlreadyOpen : false,
    isDarkMode:false,
    appFirstOpen:0
    
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
            return{
                ...state,
                isDarkMode:true
            }
        case TYPES.UISETLIGHTMODE:
            return{
                ...state,
                isDarkMode:false
            }
        case TYPES.UIAPPFIRSTIMEOPEN: 
            return{
                ...state,
                appFirstOpen:state.appFirstOpen + 1
            }
        
        case TYPES.UILOGOUT: 
            return{
                ...state,
                alertTodoOpen : false,
                modalAlreadyOpen : false,
                isDarkMode:false,
                appFirstOpen:0
            }


        default:
            return state;
    }

}

export default uiReducer;