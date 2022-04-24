import React,{useEffect} from 'react'
import styles from "../css/NewSpendForm.module.css"
import { useNavigate,useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { activeSpend, startAddingNewSpend, startEditingSpend } from '../actions/spend.action'
import useForm from '../hooks/useForm'





const NewSpendForm = () => {

    //TODO:Crear reglas de validación para este formulario
    
    const params = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {spendId} = params;
    const [formValues,handleSubmit,handleChange,handleOnKeyPress,setFormValues] = useForm({
        date: "",
        value:"",
        description:"",
    })
    const state = useSelector(state => state);
    const {spends} = state.spend;
    const {active} = state.spend;

//    console.log(active);

  //  console.log(spends);

    useEffect(() => {

        if(spendId){

            const spend = spends.find(spend=> spend.id === spendId)
            console.log("se va a edtiar");
            setFormValues({
                date: spend.date,
                value:spend.value,
                description:spend.description,
            })

            dispatch(activeSpend(spendId,spend))

        }

    }, [spendId,setFormValues,spends,dispatch]);

    


    
    const {date,value,description} = formValues;


    const handleCancel = () =>{
        navigate(-1)
    }
    
    const handleNewNote = ()=>{
        dispatch(startAddingNewSpend(value,description,date))
        navigate(-1)
    }
    
    const handleEdit =() =>{
       // console.log("Editando");
        dispatch(startEditingSpend(active))
        navigate(-1)
    }

    return (
        <div className={styles.form_container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h3>Fecha del gasto</h3>
                <input 
                    type="date" 
                    name='date'
                    value={date}
                    onChange={handleChange}
                    min="01-01-1920"
                    max="01-01-2050"
                    onKeyPress={handleOnKeyPress}
                    
                    />
                <h3>Valor</h3>
                <input 
                    type="number" 
                    name='value'
                    placeholder='valor'
                    autoComplete='off'
                    value={value}
                    onChange={handleChange}
                    onKeyPress={handleOnKeyPress}
                    />
                <h3>Describa el gasto</h3>
                <textarea 
                    name="description" 
                    id="" 
                    cols="30" 
                    rows="10"
                    style={{resize:"none"}}
                    value={description}
                    onChange={handleChange}
                    onKeyPress={handleOnKeyPress}
                    >
                </textarea>
                <div className={styles.botones}>
                    <button onClick={spendId ? handleEdit : handleNewNote} type='submit'>{spendId ? "Editar gasto" : "Guardar gasto"}</button>
                    <button onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default NewSpendForm