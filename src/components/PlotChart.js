import React from 'react'
import styles from "../css/DashBoard.module.css"
import ChartLine from './ChartLine'

const PlotChart = () => {
    return (
        <div  className={styles.plot_chart}>
            <ChartLine/>
        </div>
    )
}

export default PlotChart