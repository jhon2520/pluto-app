import React from 'react'

import styles from "../css/AlertModal.module.css"
import validateDateToAlert from '../helpers/validateDateToAlert'






const TodoCardAlert = ({title,description,dateLimit}) => {


    const days = validateDateToAlert(dateLimit)
    //console.log(days);


    return (
        <div className={styles.alert_card}>
            <h2>{title}</h2>
            <p>{description}</p>
            <h2>Fecha Limite <br /> {dateLimit}</h2>
            
                { 
                    (days >=0 ) 
                    ?   <><h2>Tiempo restante <br /> 
                        <span className={styles.span}>{days} {(days > 1) ?"días": "día"}</span></h2></>
                    : <span className={styles.taks_undone}>Tarea vencida</span> 
                }
                
        </div>
    )
}

export default TodoCardAlert