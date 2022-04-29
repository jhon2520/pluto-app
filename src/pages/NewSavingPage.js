import React from 'react'
import NewSavingForm from '../components/NewSavingForm'
import styles from "../css/NewSpendForm.module.css"

const NewSavingPage = () => {
    return (
        <div className={`${styles.main_page_container} ${styles.main_page_container_saving}`}>
            <h2>REGISTRA UN NUEVO AHORRO</h2>
            <NewSavingForm className={styles.new_spend}/>
        </div>

    )
}

export default NewSavingPage