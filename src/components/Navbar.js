import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import appImages from '../helpers/appImages'
import styles from "../css/Navbar.module.css"
import {useDispatch,useSelector} from "react-redux"
import { startLogout } from '../actions/auth.action'
import { spendCleaningLogout } from '../actions/spend.action'
import { savingCleaningLogout } from '../actions/savings.actions'
import DarkMode from './DarkMode'


const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isDarkMode} = useSelector((state)=> state.ui)

    const handleLogout = () =>{
        dispatch(startLogout())
        dispatch(spendCleaningLogout())
        dispatch(savingCleaningLogout());
    }

    console.log(isDarkMode)

    return (
        <>
            <div className={styles.nabvar_contianer}>
            <DarkMode/>
                <img onClick={()=>navigate("/home")} src={ isDarkMode ? appImages("./LogoBlanco.png") : appImages("./LogoMorado.png")} alt="" />
                <nav className={styles.navbar}>
                    <ul>
                        <li><NavLink className={(data)=> data.isActive ? styles.active: styles.no_active} to="/home">Inicio</NavLink></li>
                        <li><NavLink className={(data)=> data.isActive ? styles.active: styles.no_active} to="/spend">Gastos</NavLink></li>
                        <li><NavLink className={(data)=> data.isActive ? styles.active: styles.no_active} to="/saving">Ahorro</NavLink></li>
                        <li><NavLink className={(data)=> data.isActive ? styles.active: styles.no_active} to="/todo">Pendientes</NavLink></li>
                        <li><NavLink className={(data)=> data.isActive ? styles.active: styles.no_active} to="/user">Usuario</NavLink></li>
                        <li><NavLink className={(data)=> data.isActive ? styles.active: styles.no_active} to="/dashboard">DashBoard</NavLink></li>
                        <button onClick={handleLogout} className={styles.btn_salir}>Salir</button>
                    </ul>
                </nav>
            </div>
            <hr className={styles.horizontal}/>
        </>
    )
}

export default Navbar