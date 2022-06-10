import {useState} from "react"

const useForm = (initState = {}) =>{

    const [formValues, setFormValues] = useState(initState);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(e.keyCode === 13){
            e.preventDefault();
        }
    }

    const handleChange = (e)=>{
        setFormValues({
            ...formValues,
            [e.target.name] : e.target.value
        })
    }

    const handleOnKeyPress = (e)=>{
        (e.key === "Enter") && e.preventDefault();
    }
    
    return [
        formValues,
        handleSubmit,
        handleChange,
        handleOnKeyPress,
        setFormValues
    ]   

}

export default useForm;