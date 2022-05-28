import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import Navbar from '../components/Navbar'
import HomeMainInfo from '../components/HomeMainInfo'
import HomeSkills from '../components/HomeSkills'
import HomeContact from '../components/HomeContact'
import AlertTodoModal from '../components/AlertTodoModal'
import { startSettingUndoneTaks } from '../actions/data.action'
import { SetModalAlertOpend } from '../actions/ui.action'





const HomePage = () => {
    
    const {taks} = useSelector((state)=> state.data)
    const {taskWithAlerts} = taks
    const cantidadAlertas = taskWithAlerts.length
    const dispatch = useDispatch();


    useEffect(() => {
        
        //TODO: Colocar que se carguen todos los gastos, ahorros y tareas con sus dispatch
        dispatch(startSettingUndoneTaks());
        
        (cantidadAlertas > 0) && dispatch(SetModalAlertOpend())
        

    }, [dispatch,cantidadAlertas]);


    return (
        <div>
            {/* navbar */}
            <Navbar/>
            {/* Modal de alertas */}
            <AlertTodoModal/>
            {/* main info */}
            <HomeMainInfo/>
            {/* funcionalidades */}
            <HomeSkills/>
            {/* contacto */}
            <HomeContact/>
        </div>
    )
}

export default HomePage