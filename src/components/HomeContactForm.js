import React from 'react'
import styles from "../css/HomeContact.module.css"

const HomeContactForm = () => {
    return (
        <div className={styles.form_container} >
            <form className={styles.form}>
                <input 
                    type="text" 
                    placeholder='nombre'
                    name="name"
                    autoComplete='off'
                />
                <input 
                    type="text" 
                    placeholder='Asunto'
                    name="asunto"
                    autoComplete='off'
                />
                <input 
                    type="text" 
                    placeholder='Correo contacto'
                    name="email"
                    autoComplete='off'
                />
                <textarea 
                    name="textarea" 
                    id="" 
                    cols="30" 
                    rows="10"
                    style={{resize:"none"}}
                    placeholder="Escribe tu mensaje aquí"
                >
                </textarea>
                <button
                    type='submit'

                >
                    Enviar correo
                </button>
            </form>
        </div>
    )
}

export default HomeContactForm