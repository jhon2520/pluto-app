import React from 'react'
import LoginContainer from '../components/LoginContainer'
import styles from "../css/Login.module.css"

const loginPage = () => {
    return (
        <div className={styles.page_container}>
            <h1>INGRESAR</h1>
            <LoginContainer/>
        </div>
    )
}

export default loginPage