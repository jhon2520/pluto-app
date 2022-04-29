import React from 'react'
import todoList from '../assets/data/todos'
import styles from "../css/TodoPage.module.css"
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";



const ToDoItemsList = ({title,description}) => {

    
    const data = todoList;
    console.log(data);


    return (
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
                        data.map((todo)=>{
                            return(

                                <tr className={styles.body_row} key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td><p className={styles.description}>{todo.description}</p></td>
                                    <td>{todo.creationDate}</td>
                                    <td>{todo.limitDate}</td>
                                    <td>{todo.generateAlert ? "Si": "No"}</td>
                                    <td><button className={styles.btn_terminado}>Terminada</button></td>
                                    <td><button><FaRegEdit className={styles.icono_editar}/></button></td>
                                    <td><button><MdDelete className={styles.icono_eliminar}/></button></td>
                                </tr>

                            );
                        })
                    }
                </tbody>
            </table>
            
            <div className={styles.btn_container}>
                <button><FaPlus className={styles.add_new_todo_btn}/></button>
            </div>
        </div>
    )
}

export default ToDoItemsList