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
export const setModalAlreadyOpen = ()=>{
    return{
        type:TYPES.UISETALREADYOPENMODAL
    }
}

export const setDarkTheme = ()=>{
    // console.log("se hizo el tema light");
    return{
        type:TYPES.UISETDARKMODE
    }
}

export const setLightTheme = ()=>{
    // console.log("se hizo el tema dark");
    return{
        type:TYPES.UISETLIGHTMODE
    }
}