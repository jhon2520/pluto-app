import React from 'react'
import { Link } from 'react-router-dom'

import styles from "../css/Register.module.css"

const RegisterForm = () => {
    return (
        <div  className={styles.form_container}>
            <form className={styles.form_register}>
                <h3>Nombre</h3>
                <input 
                    type="text" 
                    placeholder='ingrese su nomber'
                    name="name"
                    autoComplete='off'
                />
                <h3>Correo</h3>
                <input 
                    type="text" 
                    placeholder='ingrese su correo'
                    name="email"
                    autoComplete='off'
                />
                <h3>Contraseña</h3>
                <input 
                    type="password" 
                    placeholder='ingrese su contraseña'
                    name="password"
                    autoComplete='off'
                    />
                <h3>Confirma contraseña</h3>
                <input 
                    type="password" 
                    placeholder='confirme su contraseña'
                    name="password2"
                    autoComplete='off'
                />
                <button
                    type='submit'

                >
                    Crear cuenta
                </button>
                <Link className={styles.link} to="/login">¿Ya tienes cuenta?</Link>
            </form>
        </div>
    )
}

export default RegisterForm