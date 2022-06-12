/*

{
    id:"asdsaasdas",
    title:"adasd",
    description:"asdasdasd"
    creation_todo: "01/01/1900",
    limit_todo:    "01/03/1900",
    create_alert:false,
    complete:false,
}
*/

import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import styles from "../css/TodoPage.module.css"
import ToDoItemsList from '../components/ToDoItemsList'
import MainSavingSpend from '../components/SpendMain'
import appImages from '../helpers/appImages'
import { useDispatch } from 'react-redux'
import { startLoadingTodos } from '../actions/todo.action'
import { startSettingUndoneTaks } from '../actions/data.action'


const ToDoPage = () => {

    const titulo = "MANTÉN TUS TAREAS PENDIENTES SIEMPRE PRESENTE"
    const parrafo = "Aquí puedes llevar el registro de tus tareas pendientes además de crear alertas para cuando están por cumplirse, marcar como completadas y almacenarlas"
    const dispath = useDispatch();

    useEffect(() => {
        
        dispath(startLoadingTodos())
        dispath(startSettingUndoneTaks())

    }, [dispath]);


    return (
        <div>
            <Navbar/>
            <MainSavingSpend
                img={appImages("./main4-img.png")}
                titulo = {titulo}
                parrafo = {parrafo}
            
            />
            <h2 className={styles.titulo_listas}>Lista de pendientes</h2>
            <div className={styles.main_container}>
                <section className={styles.todo_container}>
                    <ToDoItemsList/>
                </section>
            </div>
        </div>
    )
}

export default ToDoPage