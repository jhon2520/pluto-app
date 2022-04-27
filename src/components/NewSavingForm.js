import React from 'react'
import useForm from '../hooks/useForm'

const NewSavingForm = () => {

    const [formValues,handleSubmit,handleChange,handleOnKeyPress,setFormValues] = useForm({
        date: "",
        value:"",
        description:"",
    })

    const {date,value,description} = formValues;

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <div>
                    <button type='submit'>Guardar ahorro</button>
                    <button>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default NewSavingForm