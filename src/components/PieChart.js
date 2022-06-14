import React from 'react'
import styles from "../css/DashBoard.module.css"
import ChartPie from './ChartPie'



const PieChart = ({labels,dataPie}) => {
    return (
        <div className={styles.pie_chart}>
            <ChartPie
                labels={labels}
                dataPie={dataPie}    
            />
        </div>
    )
}

export default PieChart