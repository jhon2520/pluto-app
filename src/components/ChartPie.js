import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "../css/DashBoard.module.css"


ChartJS.register(ArcElement, Tooltip, Legend)


const ChartPie = ({labels,dataPie}) => {
    
    const opciones = {
        resposive: true,
        maintainAspectRatio: false,
    };

    const data = {
    labels: labels,
    datasets: [
        {
        data: dataPie,
        backgroundColor: [
            "#21325E",
            "#8A39E1",
            "#00B4D8",
            "#495371",
            "#219F94",
        ],
        borderWidth: 3,
        datalabels: {
            color: "black",
            font: {
            size: 18,
            weight: "bold",
            },
            },
        },
        ],
    };

    return (
        <div className={styles.pie_container}>
        <Pie className={styles.pie_chart} data={data} options={opciones} />
        </div>
    );
};

export default ChartPie;
