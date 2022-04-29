import  validator from "validator";
import errorMessage from "./errorMessage";



const formNewSavingValidation = ({date,value,description})=>{

    if(!validator.isDate(date)){
        errorMessage("Fecha incorrecta","La fecha debe ser un valor válido")
        return false;
    }
    if(value <= 0){
        errorMessage("valor incorrecto","El valor del ahorro no puede ser negativo ni igual a cero")
        return false;
    }
    return true;
}

export default formNewSavingValidation;