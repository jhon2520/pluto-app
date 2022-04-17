import React from 'react'
import appImages from '../helpers/appImages'
import RegisterForm from './RegisterForm'

import styles from "../css/Register.module.css"

const RegisterContainer = () => {
    return (

        <div className={styles.main_container}>

            <div className={styles.welcome_container} >
                <h2>¡Crea una nueva Cuenta!</h2>
                <p>Crea una nueva cuenta para acceder a todas las funcionalidades; puedes hacer seguimient a tus ahorros y gastos.</p>
                <img src={appImages("./LogoBlanco.png")} alt="imagen" />
            </div>

            <div className={styles.register}>
                <RegisterForm/>
            </div>

        </div>
    )
}

export default RegisterContainer