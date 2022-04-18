import React from 'react'
import styles from "../css/NewSpendForm.module.css"
import { useNavigate } from 'react-router-dom'

const NewSpendForm = () => {

    const navigate = useNavigate()

    const handleCancel = () =>{
        navigate("/spend")
    }

    return (
        <div className={styles.form_container}>
            <form className={styles.form}>
                <h3>Fecha del gasto</h3>
                <input 
                    type="date" 
                    name='date'
                />
                <h3>Valor</h3>
                <input 
                    type="input" 
                    name='value'
                    placeholder='valor'
                    autoComplete='off'
                />
                <h3>Describa el gasto</h3>
                <textarea 
                    name="description" 
                    id="" 
                    cols="30" 
                    rows="10"
                    style={{resize:"none"}}
                    >
                </textarea>
                <div className={styles.botones}>
                    <button type='submit'>Guardar gasto</button>
                    <button onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default NewSpendForm