import React from 'react'
import appImages from '../helpers/appImages'
import styles from "../css/HomeSkills.module.css"
import {useNavigate} from "react-router-dom"


const HomeSkills = () => {

    const navigate = useNavigate();




    return (
        <>
        <div className={styles.main_container}>

            <section className={styles.seccion}>
                <img src={appImages("./spend-img.png")} alt="" />
                <div>
                    <p><span>Gastos: </span>Registra y controla tus gastos diarios y genera información importante acerca de tus egresos </p>
                    <button
                        onClick={()=>navigate("/spend")}
                    >Ir a mis gastos</button>
                </div>
            </section>

            <section className={styles.seccion}>
                <div>
                    <p><span>Ahorros: </span>Registra y genera metas de ahorros; visualiza información importante de tus ingresos</p>
                    <button
                        onClick={()=>navigate("/saving")}
                    >Ir a mis ahorros</button>
                </div>
                <img src={appImages("./save-money-img.png")} alt="" />
            </section>

            <section className={styles.seccion}>
                <img src={appImages("./taks-img.png")} alt="" />
                <div>
                    <p><span>Pendientes: </span>Genera un registro de tareas pendientes con alertamiento según la fecha limite de estas</p>
                    <button
                        onClick={()=>navigate("/todo")}
                    >Ir a mis pendientes</button>
                </div>
            </section>

            <section className={styles.seccion}>
                <div>
                    <p><span>DashBoard: </span>Visualiza de forma cómoda la información de tus ingresos, egresos y tareas pendientes</p>
                    <button
                        onClick={()=>navigate("/dashboard")}
                    >Ir al DashBoard</button>
                </div>
                <img src={appImages("./pie-chart-img.png")} alt="" />
            </section>

        </div>
        <hr className={styles.horizontal}/>
        </>
    )
}

export default HomeSkills