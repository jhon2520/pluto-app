import React from 'react'
import styles from "../css/DashBoard.module.css"

const CardDashBoard = ({title,value,description}) => {
    return (
        <div className={styles.card_container}>
            <h2>{title}</h2>
            <h2>{value}</h2>
            <h3>{description}</h3>
        </div>
    )
}

export default CardDashBoard