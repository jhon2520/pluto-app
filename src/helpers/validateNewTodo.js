import  validator from "validator";
import errorMessage from "./errorMessage";



const formNewToDoValidation = ({title,description,date})=>{


    if(title === ""){
        errorMessage("Titulo vacío","Agregue un titulo a la nueva tarea");
        return false;
    }

    if(description === ""){
        errorMessage("Descripción vacía","Agregue una descripción al gasto")
        return false;
    }
    if(!validator.isDate(date)){
        errorMessage("Fecha incorrecta","La fecha de registro debe ser un valor válido")
        return false;
    }
    return true;
}

export default formNewToDoValidation;
