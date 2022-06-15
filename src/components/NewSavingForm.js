import React,{useEffect} from 'react'
import useForm from '../hooks/useForm'
import styles from "../css/NewSpendForm.module.css"
import { useDispatch,useSelector } from 'react-redux'
import { setActiveSaving, startAddingNewSaving, startEditingSaving } from '../actions/savings.actions'
import { useNavigate,useParams } from 'react-router-dom'
import successMessage from '../helpers/successMessage'
import formNewSavingValidation from '../helpers/validateNewSaving'
import errorMessage from '../helpers/errorMessage'
import { startSettingDataSave } from '../actions/data.action'

const NewSavingForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector(state=>state)

    const {savings} = state.saving

    const params = useParams();
    const {savingId} = params;

    const [formValues,handleSubmit,handleChange,handleOnKeyPress,setFormValues] = useForm({
        date: "",
        value:"",
        description:"",
    })

    const {date,value,description} = formValues;


    useEffect(() => {
        
        if(savingId){
           // console.log("editando")
            const saving = savings.find((saving)=> saving.id === savingId);
           // console.log(saving)
            setFormValues({
                date:saving.date,
                value:saving.value,
                description:saving.description,
            })


            dispatch(setActiveSaving(saving))
        }


    }, [savingId,savings,setFormValues,dispatch]);

    
    const handleCancel = () =>{
        navigate(-1)
    }


    const handleNewSaving = ()=>{

        if(formNewSavingValidation(formValues)){

            dispatch(startAddingNewSaving(date,value,description));
            dispatch(startSettingDataSave())
            successMessage("Creado","Ahorro registrado correctamente")
            navigate(-1)
        }   
    }
    
    const handleEdit = () =>{
        dispatch(setActiveSaving({id:savingId,...formValues}))
        dispatch(startEditingSaving())
        dispatch(startSettingDataSave())
        .then(successMessage(`Editar`,"Ahorro editado correctamente"))
        .catch((err)=>errorMessage("Error",err.message))
        navigate(-1)
    }
    


    return (
        <div className={styles.form_container}>
            <form  className={styles.form} onSubmit={handleSubmit}>
                <h3>Fecha del ahorro</h3>
                <input 
                    type="date" 
                    name="date"
                    value={date}
                    onChange={handleChange}
                    onKeyPress={handleOnKeyPress}
                    />
                <h3>Valor del ahorro</h3>
                <input 
                    type="number"
                    name='value'
                    value={value}
                    onChange={handleChange}
                    onKeyPress={handleOnKeyPress}
                    />
                <h3>Descripción opcional del ahorro</h3>
                <textarea 
                    cols="30" 
                    rows="10"
                    style={{resize:"none"}}
                    value={description}
                    name="description"
                    onChange={handleChange}
                    onKeyPress={handleOnKeyPress}
                    >
                </textarea>
                <div className={styles.botones}>
                    <button type='submit' onClick={ savingId ? handleEdit: handleNewSaving}>Guardar ahorro</button>
                    <button onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default NewSavingForm