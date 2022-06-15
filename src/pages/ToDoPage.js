import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import styles from "../css/TodoPage.module.css"
import ToDoItemsList from '../components/ToDoItemsList'
import MainSavingSpend from '../components/SpendMain'
import appImages from '../helpers/appImages'
import { useDispatch } from 'react-redux'
import { startLoadingTodos } from '../actions/todo.action'
import { startSettingUndoneTaks } from '../actions/data.action'


let valor = 0;


const ToDoPage = () => {

    const titulo = "MANTÉN TUS TAREAS PENDIENTES SIEMPRE PRESENTE"
    const parrafo = "Aquí puedes llevar el registro de tus tareas pendientes además de crear alertas para cuando están por cumplirse, marcar como completadas y almacenarlas"
    const dispath = useDispatch();

    useEffect(() => {
        
        if(valor === 0){
            valor++
            return
        }

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