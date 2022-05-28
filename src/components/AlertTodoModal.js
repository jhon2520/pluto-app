import React from 'react'
import Modal from "react-modal"
import { useSelector,useDispatch } from 'react-redux';
import { SetModalAlertClosed } from '../actions/ui.action';
import styles from "../css/AlertModal.module.css"



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
    console.log(taskWithAlerts);
    const dispatch = useDispatch();
    

    const closeModal=()=>{
        dispatch(SetModalAlertClosed())
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
                <h2>Alertas</h2>
                {
                    taskWithAlerts.map((task)=>{
                        return(
                            <h1>{task.title}</h1>
                        )
                    })
                }

            </Modal>

    )
}

export default AlertTodoModal