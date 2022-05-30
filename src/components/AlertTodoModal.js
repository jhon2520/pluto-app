import React from 'react'
import Modal from "react-modal"
import { useSelector,useDispatch } from 'react-redux';
import { SetModalAlertClosed } from '../actions/ui.action';
import styles from "../css/AlertModal.module.css"
import TodoCardAlert from './TodoCardAlert';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import validateDateToAlert from '../helpers/validateDateToAlert';


const customStyles = {
    content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    //transform: 'translate(-50%, -50%)',
    },
};


Modal.setAppElement("#root")


const AlertTodoModal = () => {

    const {alertTodoOpen} = useSelector((state)=> state.ui)
    const {taks} = useSelector((state)=> state.data)
    const {taskWithAlerts} = taks
    let taskToShow = []
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    
    taskWithAlerts.forEach((task)=> {
        const days = validateDateToAlert(task.dateLimit);
        (days <= 5) && taskToShow.push(task);
    })


    const closeModal=()=>{
        dispatch(SetModalAlertClosed())
    }

    const hangleGoToTodos=()=>{
        dispatch(SetModalAlertClosed())
        navigate("/todo")
        
    }


    return (

            <Modal
                isOpen={alertTodoOpen}
                style={customStyles}
                onRequestClose={closeModal}
                closeTimeoutMS={200}
                className={styles.modal}
                overlayClassName={styles.modal_fondo}
            >
                <h1 className={styles.enunciado}>La siguientes tareas están próximas a <span className={styles.span_enunciado}>vencerse</span></h1>

                <div className={styles.cards_container}>
                {
                    taskToShow.map((task,i)=>{
                        return(
                            <TodoCardAlert
                                key={i}
                                {...task}
                            />
                        )
                    })
                }
                </div>
                <button onClick={hangleGoToTodos} className={styles.btn_pendientes}>Ir a mis pendientes</button>

            </Modal>

    )
}

export default AlertTodoModal