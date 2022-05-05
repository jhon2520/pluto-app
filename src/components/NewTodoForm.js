import React, { useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import useForm from '../hooks/useForm';
import styles from "../css/NewTodoForm.module.css"
import formNewToDoValidation from '../helpers/validateNewTodo';
import { startAddingNewToodo, startUpdatingTodo, todoActive } from '../actions/todo.action';
import { useDispatch,useSelector } from 'react-redux';
import successMessage from '../helpers/successMessage';


const NewTodoForm = () => {

    const dispatch = useDispatch();
    const state = useSelector(state=>state);
    const params = useParams();
    const {todos} = state.todo;
    const {todoId} = params;


    const [formValues,handleSubmit,handleChange,handleOnKeyPress,setFormValues] = useForm({
        title: "",
        description:"",
        date:"",
        dateLimit:"",
        select:"",
    })

    const {title,description,date,dateLimit,select} = formValues;

    const navigate = useNavigate();

    const handleCancel = () =>{
        navigate(-1)
    }

    const handleNewTodo = ()=>{
        if(formNewToDoValidation(formValues)){
            console.log(select);
            dispatch(startAddingNewToodo(formValues))
            navigate(-1);
        }
    }

    const onChange = (e)=>{
        handleChange(e)
    }

    const handleEdit = ()=>{
        if(formNewToDoValidation(formValues)){
            dispatch(todoActive(todoId,{title,description,date,dateLimit,select}))
            dispatch(startUpdatingTodo())
            .then(successMessage(`Editar`,"Tarea editada correctamente"));
            navigate(-1)
        }
    }


    useEffect(()=>{

        if(todoId){
            const todo = todos.find((todo)=> todo.id === todoId)
            setFormValues({
                title: todo.title,
                description:todo.description,
                date:todo.date,
                dateLimit:todo.dateLimit,
                select:todo.select,
            })
            dispatch(todoActive(todoId,todo))
        }

    },[dispatch,setFormValues,todoId,todos])


    return (
        <div className={styles.form_container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h3>Titulo</h3>
                <input 
                    type="text" 
                    placeholder='Inserte un titulo para su tarea'
                    autoComplete='off'
                    name="title"
                    onChange={handleChange}
                    onKeyPress={handleOnKeyPress}
                    value={title}
                    />
                <h3>Descripción</h3>
                <textarea 
                    cols="30" 
                    rows="5"
                    name='description'
                    onChange={handleChange}
                    onKeyPress={handleOnKeyPress}
                    value={description}
                    style={{resize:"none"}}
                    >
                </textarea>
                <h3>Fecha de registro</h3>
                <input 
                    type="date" 
                    name='date'
                    onChange={handleChange}
                    onKeyPress={handleOnKeyPress}
                    value={date}
                    />
                <h3>Fehca limite para realizar tarea</h3>
                <input 
                    type="date" 
                    name='dateLimit'
                    onChange={handleChange}
                    onKeyPress={handleOnKeyPress}
                    value={dateLimit}
                />
                <h3>La tarea genera alerta por vencimiento</h3>
                <select 
                    name="select" 
                    id=""
                    onChange={onChange}
                    value={select}
                >
                    <option value="1">no</option>
                    <option value="2">si</option>
                </select>
                <div className={styles.botones}>
                    <button onClick={todoId ? handleEdit: handleNewTodo} type='submit'>Guardar tarea</button>
                    <button onClick={handleCancel} >Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default NewTodoForm