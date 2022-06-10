import React,{useState,useEffect,useRef} from 'react'
import styles from "../css/TodoPage.module.css"
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import NavPagination from './NavPagination';
import useTable from '../hooks/useTable';
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {startDeletingTodo,startDoneTodo} from "../actions/todo.action";
import questionMessage from '../helpers/questionMessage';
import successMessage from '../helpers/successMessage';
import { startSettingUndoneTaks } from '../actions/data.action';
import { TiInputChecked,TiDelete } from "react-icons/ti";





const ToDoItemsList = () => {
    
    console.log("tabla reenderizada");
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
     const state = useSelector(state=> state)
    const {todos:tasks} = state.todo

    const [todos, setTodos] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const refButton = useRef();

    const [paginated,pages,pagination,currentPage] = useTable(todos);
    
    const handleNewTodo = () =>{
        navigate("/todo/new")
    }
    
    const handleDelete = (id)=>{

        questionMessage().then((result)=>{
            if(result.isConfirmed){
                successMessage("Eliminado","registo eliminado con éxito");
                dispatch(startDeletingTodo(id));
                dispatch(startSettingUndoneTaks())
            }
        })
    }
    
    const changeStatusTask =(id)=>{

        const task = tasks.find((task)=>task.id === id)
        dispatch(startDoneTodo(id,task))
        dispatch(startSettingUndoneTaks())
        //toggle class
        //refButton.current.classList.toggle("PRUEBA");
    }

    const handleEdit =(idTodo)=>{
        navigate(`/todo/${idTodo}`)
    }
    
    useEffect(() => {
        
        setTodos(tasks)
        // console.log(refButton.current);
        setIsLoading(false)

    }, [tasks]);


    //TODO:COrregir el código  de abajo que cuadno no hay datos no muestra el boton de agregar un todo

    // if(isLoading || !todos.length){
    //     return (
    //         <h1>YA CARGUEEEEEEEEEE</h1>
    //     )
    // }

    
    return (
        <div> 
            <div className={styles.table_container}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Descripción</th>
                            <th>Fecha creación</th>
                            <th>Fecha limite</th>
                            <th>Genera alerta</th>
                            <th>Estado</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paginated?.map((todo)=>{
                                return(
                                    <tr className={ todo.done ?  `${styles.body_row} ${styles.body_row_complete}`: styles.body_row } key={todo.id}>
                                        <td>{todo.title}</td>
                                        <td><p className={styles.description}>{todo.description}</p></td>
                                        <td className={styles.fecha}>{todo.date}</td>
                                        <td className={styles.fecha}>{todo.dateLimit}</td>
                                        <td className={styles.select}>{(todo.hasAlert === "1") ? "Si": "No"}</td>
                                        {/* <td><button onClick={()=>changeStatusTask(todo.id)} className={todo.done ? styles.btn_terminado : `${styles.btn_terminado} ${styles.btn_terminado_done}`}>{ todo.done ? <TiInputChecked />:<TiDelete />}</button></td> */}
                                        <td ref={refButton}>{todo.done ? <TiInputChecked onClick={()=>changeStatusTask(todo.id)} className={styles.btn_terminado}/> : <TiDelete onClick={()=>changeStatusTask(todo.id)}className={styles.btn_terminado_done}/>}</td>
                                        <td><button><FaRegEdit onClick={()=>handleEdit(todo.id)} className={todo.done ? `${styles.icono_editar} ${styles.icono_editar_block}`: styles.icono_editar}/></button></td>
                                        <td><button><MdDelete className={styles.icono_eliminar} onClick={()=>handleDelete(todo.id)}/></button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            
            <NavPagination
                pages={pages}
                pagination={pagination}
                currentPage={currentPage}
                dark ={true}
            />
            
            <div className={styles.btn_container}>
                <FaPlus onClick={handleNewTodo} className={styles.add_new_todo_btn}/>
            </div>
        </div>
    )
}

export default ToDoItemsList