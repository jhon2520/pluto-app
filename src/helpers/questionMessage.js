import Swal from "sweetalert2";

const questionMessage = ()=>{

    return Swal.fire({
        title:"Eliminar registro",
        text:"Esta operación no es reversible",
        icon:"warning",
        showCancelButton:true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'

    })
}

export default questionMessage;