import React from 'react'
import appImages from '../helpers/appImages'
import LoginForm from './LoginForm'
import styles from "../css/Login.module.css"

const LoginContainer = () => {
        return (
            <div className={styles.main_container}>

                <div className={styles.welcome_container}>
                    <h2>¡Bienvenido de nuevo!</h2>
                    <p>Ingresa con tu <span>correo</span> y <span>contraseña</span> para continuar con el registro de tus ahorros, gastos tareas pendientes y demás funcionalidades
                    </p>
                    <img src={appImages("./LogoBlanco.png")} alt="imagen" />
                </div>

                <div className={styles.login}>
                    <LoginForm/>
                </div>

            </div>
        )
    }

export default LoginContainer