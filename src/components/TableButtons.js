import React from 'react'
import styles from "../css/TableButtons.module.css"
import { FaPlus } from "react-icons/fa";


const TableButtons = ({nombre,handleNew}) => {
    return (
    <div className={styles.btn_container}>
        <button onClick={handleNew}><FaPlus/> Agregar {nombre}</button>
        
        <button>Exportar {nombre}</button>
        <button>Ir a mi Dashboard</button>
    </div>
    )
}

export default TableButtons