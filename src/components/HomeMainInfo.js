import React from 'react'
import appImages from '../helpers/appImages'
import styles from "../css/HomePage.css"

const HomeMainInfo = () => {
    return (
        <div className={styles.main_container}>
            <div>
                <h2>MANTÉN TUS FINANZAS ALMACENADAS</h2>
                <p>Con esta aplicación podrás llevar un registro de todos los gastos y ahorros que realices. También puedes ver en un <span>Dashboard</span> todas tus operaciones de forma cómoda</p>

                <p>También puedes exportar tu información en un archivo excel</p>
            </div>
            <div>
                <img src={appImages("./main-img.png")} alt="" />
            </div>
        </div>
    )
}

export default HomeMainInfo