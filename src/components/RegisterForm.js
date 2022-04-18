import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux"

import styles from "../css/Register.module.css";
import formLoginValidation from '../helpers/validateLogin';
import { startRegisterWithNameEmailPassword } from '../actions/auth.action';




const RegisterForm = () => {

    const dispatch = useDispatch();

    const [formValues,setFormValues] = useState({
        name:"jhon romero",
        email:"jhon@gmail.com",
        password:"123456M",
        password2:"123456M"
    })

    const {name,email,password,password2} = formValues;

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(formLoginValidation(formValues)){
            dispatch(startRegisterWithNameEmailPassword(name,email,password))
            
        }
    }

    const handleChange = (e)=>{
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }



    return (
        <div  className={styles.form_container}>
            <form onSubmit={handleSubmit} className={styles.form_register}>
                <h3>Nombre</h3>
                <input 
                    type="text" 
                    placeholder='ingrese su nomber'
                    name="name"
                    autoComplete='off'
                    value={name}
                    onChange={handleChange}
                />
                <h3>Correo</h3>
                <input 
                    type="text" 
                    placeholder='ingrese su correo'
                    name="email"
                    autoComplete='off'
                    value={email}
                    onChange={handleChange}

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