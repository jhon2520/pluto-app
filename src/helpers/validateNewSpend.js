import  validator from "validator";
import errorMessage from "./errorMessage";



const formNewSpendeValidation = ({date,value,description})=>{

    if(!validator.isDate(date)){
        errorMessage("Fecha incorrecta","La fecha debe ser un valor válido")
        return false;
    }
    if(value <= 0){
        errorMessage("valor incorrecto","El valor de lo gastado no puede ser negativo ni igual a cero")
        return false;
    }
    if(description === ""){
        errorMessage("Descripción vacía","Agregue una descripción al gasto")
        return false;
    }
    return true;
}

export default formNewSpendeValidation;