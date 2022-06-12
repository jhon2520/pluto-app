import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux"

import styles from "../css/Register.module.css";
import formLoginValidation from '../helpers/validateLogin';
import { startRegisterWithNameEmailPassword } from '../actions/auth.action';
import useForm from '../hooks/useForm';




const RegisterForm = () => {

    const dispatch = useDispatch();
    const [formvalues,handleSubmit,handleChange,handleOnKeyPress] = useForm({
        name:"jhon romero",
        email:"jhon@gmail.com",
        password:"123456M",
        password2:"123456M"
    })

    const {name,email,password,password2} = formvalues;

    const Submit = (e)=>{
        
        handleSubmit(e);

        if(formLoginValidation(formvalues)){
            dispatch(startRegisterWithNameEmailPassword(name,email,password))
            
        }
    }



    return (
        <div  className={styles.form_container}>
            <form onSubmit={Submit} className={styles.form_register}>
                <h3>Nombre</h3>
                <input 
                    type="text" 
                    placeholder='ingrese su nomber'
                    name="name"
                    autoComplete='off'
                    value={name}
                    onChange={handleChange}
                    onKeyPress={handleOnKeyPress}
                    />
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
                    onPaste={(e)=>e.preventDefault()}
                    onKeyPress={handleOnKeyPress}
                    
                    />
                <h3>Confirma contraseña</h3>
                <input 
                    type="password" 
                    placeholder='confirme su contraseña'
                    name="password2"
                    autoComplete='off'
                    value={password2}
                    onChange={handleChange}
                    onPaste={(e)=>e.preventDefault()}
                    onKeyPress={handleOnKeyPress}
                    
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