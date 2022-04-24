import Swal from "sweetalert2"

const errorMessage = (titulo, mensaje)=>{
    return Swal.fire({
        icon:"error",
        width:400,
        // height:600,
        title:titulo,
        text:mensaje,
        backdrop:"rgba(0,0,0,0.4)"
    });
}

export default errorMessage;