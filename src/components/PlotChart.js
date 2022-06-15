import React from 'react'
import styles from "../css/DashBoard.module.css"
import ChartLine from './ChartLine'

const PlotChart = ({labels,dataAhorro,dataGasto}) => {
    return (
        <div  className={styles.plot_chart}>
            <ChartLine
                labels={labels}
                dataAhorro={dataAhorro}
                dataGasto={dataGasto}
            />
        </div>
    )
}

export default PlotChart