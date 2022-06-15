import React from 'react'
import styles from "../css/Login.module.css"
import { Link } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { startLogignWithGoogle, startLoginWithEmailPassword } from '../actions/auth.action'
import useForm from '../hooks/useForm'


const LoginForm = () => {

    const dispath = useDispatch();
    const [formvalues,handleSubmit,handleChange,handleOnKeyPress] = useForm({
        email:"jhon@gmail.com",
        password:"123456M",
    })
    
    const {email,password} = formvalues;

    const handleLoginWithGoogle = () =>{
        dispath(startLogignWithGoogle())
        
    }

    const handleLoginWithEmailPassword = () =>{
        dispath(startLoginWithEmailPassword(email,password))
    }
    

    return (
        <div className={styles.form_container}>
            <form onSubmit={handleSubmit} className={styles.form_login}>
                <h3>Correo</h3>
                <input 
                    type="text" 
                    placeholder='ingrese su correo'
                    name="email"
                    autoComplete='off'
                    value={email}
                    onChange={handleChange}
                    onKeyPress={handleOnKeyPress}
                    />
                <h3>Contraseña</h3>
                <input 
                    type="password" 
                    placeholder='ingrese su contraseña'
                    name="password"
                    autoComplete='off'
                    value={password}
                    onChange={handleChange}
                    onKeyPress={handleOnKeyPress}
                    />
                <button
                    type='submit'
                    onClick={handleLoginWithEmailPassword}

                >
                    Ingresar
                </button>
                <div onClick={handleLoginWithGoogle} className={styles.google_btn_container}>
                    <div className={styles.google_btn_container_logo} >
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        Ingresar con google
                    </p>
                </div>
                <button className={`${styles.loginBtn}  ${styles.loginBtn_facebook}`}>
                    Ingresar con Facebook
                </button>
                <Link className={styles.link_router} to="/login/register">Crear una nueva cuenta</Link>

            </form>
        </div>
    )
}

export default LoginForm