import React from 'react'
import NewSpendForm from '../components/NewSpendForm'
import styles from "../css/NewSpendForm.module.css"


const NewSpendPage = () => {
    return (
        <div className={`${styles.main_page_container} ${styles.main_page_container_saving}`}>
            <h2>REGISTRA UN NUEVO GASTO</h2>
            <NewSpendForm className={styles.new_spend}/>
        </div>
    )
}

export default NewSpendPage