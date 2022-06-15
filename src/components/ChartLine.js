import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import styles from "../css/DashBoard.module.css"


ChartJS.register(...registerables);

const ChartLine = ({labels,dataAhorro,dataGasto}) => {


    const data = {
    // labels: ["Ene", "Feb", "Mar", "Apr", "May", "Jun","Jul","Ago","Sep","Oct"],
    labels: labels,
    datasets: [
        {
        label: "Ahorro",
        // data: [33, 53, 0, 0, 44, 65],
        data: dataAhorro,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        },
        {
        label: "Gastos",
        // data: [33, 25, 35, 51, 54, 76],
        data:dataGasto,
        fill: true,
        borderColor: "#742774"
        }
    ]
    };



    return (
        <div className={styles.line_container}>
        <Line className={styles.line_chart} data={data} />
        </div>
    );
}

export default ChartLine