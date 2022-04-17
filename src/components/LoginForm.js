import React from 'react'
import styles from "../css/Login.module.css"
import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <div className={styles.form_container}>
            <form className={styles.form_login}>
                <h3>Correo</h3>
                <input 
                    type="text" 
                    placeholder='ingrese su correo'
                    name="email"
                    autoComplete='off'
                />
                <h3>Contraseña</h3>
                <input 
                    type="text" 
                    placeholder='ingrese su contraseña'
                    name="password"
                    autoComplete='off'
                />
                <button
                    type='submit'

                >
                    Ingresar
                </button>
                <div className={styles.google_btn_container}>
                    <div className={styles.google_btn_container_logo} >
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        Ingresar con google
                    </p>
                </div>
                <Link className={styles.link_router} to="/register">Crear una nueva cuenta</Link>

            </form>
        </div>
    )
}

export default LoginForm