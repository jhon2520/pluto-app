import React from 'react'
import NewTodoForm from '../components/NewTodoForm'
import styles from "../css/NewTodoForm.module.css"


const NewTodoPage = () => {
    return (
        <div className={styles.new_todo_page}>
            <h2>Crea una nueva tarea</h2>
            <NewTodoForm/>
        </div>
    )
}

export default NewTodoPage