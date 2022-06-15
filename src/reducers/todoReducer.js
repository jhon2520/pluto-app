/*

{
    id:"asdsaasdas",
    title:"adasd",
    description:"asdasdasd"
    creation_todo: "01/01/1900",
    limit_todo:    "01/03/1900",
    create_alert:false,
    complete:false,
}
*/

import TYPES from "../types/types";

const initState = {
    todos:[],
    active:null
}


const todoReducer = (state = initState, action)=>{

    switch (action.type) {
        
        case TYPES.TODONEW:
            return{
                ...state,
                active:[],
                todos:[...state.todos/*,action.payload*/]
            }
        case TYPES.TODOLOAD:
            return{
                ...state,
                active:[],
                todos:action.payload
            }
        case TYPES.TODODELETE:
            return{
                ...state,
                active:[],
                todos:state.todos.filter((todo)=>todo.id !== action.payload)
            }
        case TYPES.TODODONE:
            return{
                ...state,
                active:[],
                todos:state.todos.map((todo)=> todo.id === action.payload.id
                ? {...todo, done : !todo.done}
                : todo
                )
                
            }
        case TYPES.TODOACTIVE:
            return{
                ...state,
                active:{
                    ...action.payload
                }
            }
        case TYPES.TODOUPDATE:
            return{
                ...state,
                todos:state.todos.map((todo)=>todo.id === action.payload.id
                ?  action.payload.todo
                : todo
                )
                
            }
        case TYPES.TODOLOGOUT:
            return{
                ...state,
                todos:[],
                active:null
            }
        
        default:
            return state;
    }

}

export default todoReducer