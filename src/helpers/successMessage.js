import Swal from "sweetalert2";

const successMessage = (titulo,mensaje,tiempo)=>{

    return Swal.fire({
        icon:"success",
        width:400,
        title:titulo,
        text:mensaje,
        backdrop:"rgba(0,0,0,0.4)",
        timer:1500,
        showConfirmButton:false
    });
}

export default successMessage;