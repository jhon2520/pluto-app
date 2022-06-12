import React from 'react'
import CardDashBoard from '../components/CardDashBoard'
import Navbar from '../components/Navbar'
import {useSelector} from "react-redux"
import styles from "../css/DashBoard.module.css"
import PieChart from '../components/PieChart'
import PlotChart from '../components/PlotChart'
import TaskDashBoard from '../components/TaskDashBoard'




const DashBoardPage = () => {
    
    const {saving,spending,taks} = useSelector((state)=> state.data)
    console.log(taks);


    const data = [{
            id:1,
            title: "Total ahorrado",
            value: saving.totalSaved,
            description:"Acumulado ahorrado hasta el momento"
        },
        {
            id:2,
            title: "Mayor ahorro",
            value: saving.mostValueSaved,
            description:"Representa el mayor monto ahorrado hasta el momento"
        },
        {
            id:3,
            title: "Mes de mayor ahorro",
            value: saving.greatestMothValue,
            description:"Mes en el que se presenta el mayor ahorro"
        },
        {
            id:4,
            title: "Total gastado",
            value: spending.totalSpent,
            description:"Acumulado gastado hasta el momento"
        },
        {
            id:5,
            title: "Mayor gasto",
            value: spending.mostValueSpent,
            description:"Representa el mayor monto gastado hasta el momento"
        },
        {
            id:6,
            title: "Mes de mayor gasto",
            value: spending.greatestMothValue,
            description:"Mes en el que se presenta el mayor gasto"
        },

    ]


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
                <PieChart/>
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