import TYPES from "../types/types"

export const SetModalAlertOpend = ()=>{
    return{
        type:TYPES.UIOPENALERTTODOMODAL
    }
}
export const SetModalAlertClosed = ()=>{
    return{
        type:TYPES.UICLOSEALERTTODOMODAL
    }
}