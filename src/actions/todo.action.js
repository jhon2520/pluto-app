import { collection, deleteDoc, doc, getDocs, getFirestore, query, setDoc, updateDoc } from "firebase/firestore"
import firebaseApp from "../firebase/firebaseConfig"
import TYPES from "../types/types"

const firestore = getFirestore(firebaseApp)


const _todoAddNew = (id,todo)=>{
    return{
        type:TYPES.TODONEW,
        payload:{
            id,
            ...todo
        }
    }
}

export const startAddingNewToodo = ({title,description,date,dateLimit,hasAlert,done = false})=>{

    return async(dispatch,getState)=>{
    
        const state = getState();
        const {uid} = state.auth

        const newTodo = {
            title,
            description,
            date,
            dateLimit,
            hasAlert,
            done
        }

        const docuRef = doc(collection(firestore,`${uid}/app/todos/`))
        await setDoc(docuRef,newTodo);
        dispatch(_todoAddNew(uid,newTodo))

    }   
}

const _setTodos = (todos) =>{

    return{
        type:TYPES.TODOLOAD,
        payload:todos
    }

}

const _loadingTodos= async(uid)=>{

    const todos = []
    const queryDoc = query(collection(firestore,`${uid}/app/todos/`))
    const querySnap = await getDocs(queryDoc);
    querySnap.forEach((snap)=>{
        todos.push({

            id:snap.id,
            ...snap.data()
        })
    });
    return todos;

}


export const startLoadingTodos = ()=>{
    return async(dispatch,getState)=>{

        const state = getState();
        const {uid} = state.auth

        const todos = await _loadingTodos(uid);
        dispatch(_setTodos(todos));

    }
}


const _deleteTodo = (id)=>{

    return{
        type:TYPES.TODODELETE,
        payload:id
    }

}

export const startDeletingTodo = (id)=>{

    return async(dispatch,getState)=>{

        const state = getState();
        const {uid} = state.auth

        const docRef = doc(firestore,`${uid}/app/todos/${id}`)
        await deleteDoc(docRef);

        dispatch(_deleteTodo(id))

    }

}

const _doneTodo = (id,todo)=>{
    return{
        type:TYPES.TODODONE,
        payload:{
            id,
            todo:{
                id,
                ...todo
            }
        }
    }
}

export const startDoneTodo = (id,todo)=>{

    return async(dispatch,getState)=>{
    
        const state = getState();
        const {uid} = state.auth
                
        const todoToEdit = {...todo,done:!todo.done};
        delete todoToEdit.id;
        
        const todoRef = doc(firestore,`${uid}/app/todos/${id}`)
    
        // console.log("tarea editada", todoToEdit);
        await updateDoc(todoRef,todoToEdit)
        dispatch(_doneTodo(id,todo))

    }

}

export const todoActive = (id,todo)=>{
    return{
        type:TYPES.TODOACTIVE,
        payload:{
            id,
            ...todo
        }
    }
}

const _editSpend = (id,todo)=>{
    return{
        type:TYPES.TODOUPDATE,
        payload:{
            id,
            todo:{
                id,
                ...todo
            }
        }
    }
}

export const startUpdatingTodo = ()=>{

    return async(dispatch,getState)=>{

        const state = getState();
        const {uid} = state.auth
        const {active} = state.todo
        const todoToEdit = {...active}
        
        delete todoToEdit.id
        const todoRef = doc(firestore, `${uid}/app/todos/${active.id}`)

        await updateDoc(todoRef,todoToEdit)
        dispatch(_editSpend(active.id,todoToEdit));
        
    }

}