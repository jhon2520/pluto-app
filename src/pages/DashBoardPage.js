import React from 'react'
import CardDashBoard from '../components/CardDashBoard'
import Navbar from '../components/Navbar'
import {useSelector} from "react-redux"
import styles from "../css/DashBoard.module.css"
import PieChart from '../components/PieChart'
import PlotChart from '../components/PlotChart'
import TaskDashBoard from '../components/TaskDashBoard'


const labels = ["Ahorros","Gastos"];


const DashBoardPage = () => {
    
    const {saving,spending,taks} = useSelector((state)=> state.data)


    const data = [{
            id:1,
            title: "Total ahorrado",
            value: "$ " + saving.totalSaved.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
            description:"Acumulado ahorrado hasta el momento"
        },
        {
            id:2,
            title: "Mayor ahorro en una operación",
            value: "$ " + saving.mostValueSaved.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
            description:"Representa el mayor monto ahorrado hasta el momento"
        },
        {
            id:3,
            title: "Mes de mayor ahorro",
            value: "Mes: " + saving.monthMostSaved.month + " Valor: $ " + saving.monthMostSaved.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
            description:"Mes en el que se presenta el mayor ahorro"
        },
        {
            id:4,
            title: "Total gastado",
            value: "$ " + spending.totalSpent.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
            description:"Acumulado gastado hasta el momento"
        },
        {
            id:5,
            title: "Mayor gasto en una operación",
            value: "$ " +spending.mostValueSpent.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
            description:"Representa el mayor monto gastado hasta el momento"
        },
        {
            id:6,
            title: "Mes de mayor gasto",
            value:  "Mes: " + spending.monthMostSpendt.month + " Valor: $ " + spending.monthMostSpendt.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
            description:"Mes en el que se presenta el mayor gasto"
        },

    ]

    const dataPie = [saving.totalSaved,spending.totalSpent]


    return (
        <>
        <Navbar/>
        <div className={styles.dashBoard_container}>
            <div className={styles.name_container}>
                <h2>Usuario: <span> Jhon Romero </span></h2>
            </div>
            <div className={styles.cards_container}>
                {
                    data.map((el)=>{
                        return(
                            <CardDashBoard
                                key={el.id}
                                {...el}
                            />
                        )
                    })
                }
            </div>
            <section className={styles.charts_container}>
                <PieChart
                    labels={labels}
                    dataPie={dataPie}
                />
                <PlotChart/>
            </section>
            <TaskDashBoard
                doneTaks={taks.doneTaks}
                undoneTaks={taks.undoneTaks}
                taskWithAlerts={taks.taskWithAlerts.length}
            />
        </div>
        </>
    )
}

export default DashBoardPage