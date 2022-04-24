import validator  from "validator";
import errorMessage from "./errorMessage";

//contra : 123456M

const formRegisterValidation = ({name,email,password,password2})=>{

    if(!validator.isAlpha(name.replace(" ","")) || name.length < 3){
        errorMessage("Nombre incorrecto","El nombre debe tener una longitud mínimo de 3 letras y no tener números")
        return false;
    }
    if(!validator.isEmail(email)){
        errorMessage("Correo no valido","El correo debe ser valido para realizar el registro")
        return false;
    }
    if(!validator.isStrongPassword(password, { minLength: 6, minLowercase: 0, minUppercase: 1, minNumbers: 1, minSymbols: 0})){
        errorMessage("Contraseña invalida","la contraseña debe tener una longitud mínima de 6 digitos, una mayúscula y un número");
        return false;
    }
    if(password !== password2){
        errorMessage("Confirmación inválida","las contraseñas no coindiden")
        return false;
    }
    
    return true;
}

export default formRegisterValidation;



