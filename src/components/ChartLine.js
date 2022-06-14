import React from "react";
// import "./styles.css";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const ChartLine = () => {

    const data = {
    labels: ["Ene", "Feb", "Mar", "Apr", "May", "Jun","Jul","Ago","Sep","Oct"],
    datasets: [
        {
        label: "Ahorro",
        data: [33, 53, 0, 0, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
        },
        {
        label: "Gastos",
        data: [33, 25, 35, 51, 54, 76],
        fill: true,
        borderColor: "#742774"
        }
    ]
    };



    return (
        <div >
        <Line data={data} />
        </div>
    );
}

export default ChartLine