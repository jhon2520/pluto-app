import React from 'react'
import appImages from '../helpers/appImages'
import styles from "../css/HomeSkills.module.css"


const HomeSkills = () => {
    return (
        <>
        <div className={styles.main_container}>

            <section className={styles.seccion}>
                <img src={appImages("./spend-img.png")} alt="" />
                <div>
                    <p><span>Gastos:</span>Registra tus gastos para generar trazabilidad y saber los picos egresos que generas según tu salario básico</p>
                    <button>Ir a mis gastos</button>
                </div>
            </section>

            <section className={styles.seccion}>
                <div>
                    <p><span>Ahoros:</span>Registra tus gastos para generar trazabilidad y saber los picos egresos que generas según tu salario básico</p>
                    <button>Ir a mis ahorros</button>
                </div>
                <img src={appImages("./save-money-img.png")} alt="" />
            </section>

            <section className={styles.seccion}>
                <img src={appImages("./pie-img.png")} alt="" />
                <div>
                    <p><span>DashBoard:</span>Registra tus gastos para generar trazabilidad y saber los picos egresos que generas según tu salario básico</p>
                    <button>Ir al DashBoard</button>
                </div>
            </section>

        </div>
        <hr className={styles.horizontal}/>
        </>
    )
}

export default HomeSkills