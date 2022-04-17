import React from 'react'
import { NavLink } from 'react-router-dom'
import appImages from '../helpers/appImages'
import styles from "../css/Navbar.module.css"

const Navbar = () => {
    return (
        <>
            <div className={styles.nabvar_contianer}>
                <img src={appImages("./LogoMorado.png")} alt="" />
                <nav className={styles.navbar}>
                    <ul>
                        <li><NavLink className={(data)=> data.isActive ? styles.active: styles.no_active} to="/home">Inicio</NavLink></li>
                        <li><NavLink className={(data)=> data.isActive ? styles.active: styles.no_active} to="/spend">Gastos</NavLink></li>
                        <li><NavLink className={(data)=> data.isActive ? styles.active: styles.no_active} to="/saving">Ahorro</NavLink></li>
                        <li><NavLink className={(data)=> data.isActive ? styles.active: styles.no_active} to="/dashboard">DashBoard</NavLink></li>
                        <button className={styles.btn_salir}>Salir</button>
                    </ul>
                </nav>
            </div>
            <hr className={styles.horizontal}/>
        </>
    )
}

export default Navbar