import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import Navbar from '../components/Navbar'
import HomeMainInfo from '../components/HomeMainInfo'
import HomeSkills from '../components/HomeSkills'
import HomeContact from '../components/HomeContact'
import AlertTodoModal from '../components/AlertTodoModal'
import { startSettingUndoneTaks } from '../actions/data.action'
import { SetModalAlertOpend, setModalAlreadyOpen } from '../actions/ui.action'
import validateDateToAlert from '../helpers/validateDateToAlert'





const HomePage = () => {
    
    const dispatch = useDispatch();
    const {modalAlreadyOpen} = useSelector((state)=>state.ui)
    const {taks} = useSelector((state)=> state.data)
    const {taskWithAlerts} = taks
    let taskToShow = []

    taskWithAlerts.forEach((task)=> {
        const days = validateDateToAlert(task.dateLimit);
        (days <= 5) && taskToShow.push(task);
    })

    const cantidadAlertas = taskToShow.length;

    useEffect(() => {
        
        //TODO: Colocar que se carguen todos los gastos, ahorros y tareas con sus dispatch
        dispatch(startSettingUndoneTaks());
        
        // (cantidadAlertas > 0) && dispatch(SetModalAlertOpend())
        
        if(cantidadAlertas>0 && !modalAlreadyOpen){
            dispatch(setModalAlreadyOpen())
            dispatch(SetModalAlertOpend())
        }

    }, [dispatch,cantidadAlertas,modalAlreadyOpen]);


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