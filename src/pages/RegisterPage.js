import React from 'react'

import RegisterContainer from "../components/RegisterContainer"
import styles from "../css/Register.module.css"

const RegisterPage = () => {
  return (
    <div className={styles.page_container}>
      <h1>REGÍSTRATE</h1>
      <RegisterContainer/>
    </div>
  )
}

export default RegisterPage