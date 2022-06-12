import React from 'react'
import styles from "../css/DashBoard.module.css"

const TaskDashBoard = ({doneTaks,undoneTaks,taskWithAlerts}) => {
    return (
        <div  className={styles.tasks_section}>
            <section>
                <h2>Tareas completas</h2>
                <span>{doneTaks}</span>
            </section>
            <section>
                <h2>Tareas incompletas</h2>
                <span>{undoneTaks}</span>
            </section>
            <section>
                <h2>Tareas con alertas</h2>
                <span>{taskWithAlerts}</span>
            </section>
        </div>
    )
}

export default TaskDashBoard