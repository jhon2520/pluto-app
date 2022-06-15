import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Navbar from '../components/Navbar'
import HomeMainInfo from '../components/HomeMainInfo'
import HomeSkills from '../components/HomeSkills'
import HomeContact from '../components/HomeContact'
import AlertTodoModal from '../components/AlertTodoModal'
import { startSettingDataSpent, startSettingDataSave, startSettingUndoneTaks } from '../actions/data.action'
import { setDarkTheme, SetModalAlertOpend, setModalAlreadyOpen, uiSetAppFirstTimeOpen } from '../actions/ui.action'
import validateDateToAlert from '../helpers/validateDateToAlert'
import { startLoadingSpends } from '../actions/spend.action'
import { startLoadingSavings } from '../actions/savings.actions'
import { startLoadingTodos } from '../actions/todo.action'



const HomePage = () => {
    
    const dispatch = useDispatch();
    const {modalAlreadyOpen,appFirstOpen} = useSelector((state)=>state.ui)
    const {taks} = useSelector((state)=> state.data)
    const {taskWithAlerts} = taks
    const state = useSelector(state=>state)
    const {uid} = state.auth


    let taskToShow = []

    taskWithAlerts.forEach((task)=> {
        const days = validateDateToAlert(task.dateLimit);
        (days <= 5) && taskToShow.push(task);
    })

    const cantidadAlertas = taskToShow.length;

    useEffect(() => {

        
        //se cargan todos los gastos, ahorros y tareas con sus dispatch
            if(appFirstOpen === 0){
                dispatch(startSettingUndoneTaks());
                dispatch(startLoadingSpends(uid))
                dispatch(startSettingDataSpent())
                dispatch(startLoadingSavings(uid));
                dispatch(startSettingDataSave())
                dispatch(startLoadingTodos())
                dispatch(startSettingUndoneTaks())
            }
            dispatch(uiSetAppFirstTimeOpen())

        if(cantidadAlertas>0 && !modalAlreadyOpen){
            dispatch(setModalAlreadyOpen())
            dispatch(SetModalAlertOpend())
        }


    }, [dispatch,cantidadAlertas,modalAlreadyOpen,uid]);

    useEffect(() => {
        if(localStorage.getItem("theme")){
        
            const theme = localStorage.getItem("theme");
            (theme === "dark") && dispatch(setDarkTheme())
        }
    }, [dispatch]);


    return (
        <div>
            <Navbar/>
            <AlertTodoModal/>
            <HomeMainInfo/>
            <HomeSkills/>
            <HomeContact/>
        </div>
    )
}

export default HomePage