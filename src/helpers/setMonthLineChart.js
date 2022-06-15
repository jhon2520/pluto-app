import convertNumberToMonth from "./convertNumberToMonth"

export const setMonthLineChart = (ahorro,gasto)=>{

    
    //ordernar array
    ahorro.sort((a,b)=> a.month - b.month)
    gasto.sort((a,b)=> a.month - b.month)
    
    // console.log("Ahorro",ahorro)
    // console.log("gasto",gasto)
    
    //Unir ahorro y gastos
    const union = [...ahorro,...gasto]
    // console.log("union",union)
    
    //Meses unicos
    const meses = union.map(el=> el.month)
    //console.log({meses});
    const unicos = [...new Set(meses)]
    unicos.sort((a,b)=> a - b)
    // console.log("meses unicos", unicos)
    
    //sólo los meses de ahorro
    const meseAhorro = ahorro.map((el)=>el.month)
    // console.log("meses ahorro",meseAhorro)
    
    //sólo los meses de gasto
    const meseGasto = gasto.map((el)=>el.month)
    // console.log("meses gasto",meseGasto)
    
    
    const newAhorro = unicos.map((el)=> 
    meseAhorro.includes(el) 
    ?el
    :"NaM"
    )

    const newGasto = unicos.map((el)=> 
    meseGasto.includes(el) 
    ?el
    :"NaM"
        )
    
    
    // console.log("newAhorro",newAhorro)
    // console.log("newGasto",newGasto)
    
    
    let indice = 0
    newAhorro.forEach((el)=>{
    if(el === "NaM" ){
        //console.log(newAhorro.indexOf(el,indice))
        indice = newAhorro.indexOf(el,indice)
        ahorro.splice(indice,0,{month:"Nam",sumValue:0})
        indice++
    }
    })
    
    
    let indice2 = 0
    newGasto.forEach((el)=>{
    if(el === "NaM" ){
        //console.log(newGasto.indexOf(el,indice2))
        indice2 = newGasto.indexOf(el,indice2)
        gasto.splice(indice2,0,{month:"Nam",sumValue:0})
        indice2++
    }
    })
    
    
    
    // console.log("Ahorro final",ahorro)
    // console.log("gasto final",gasto)
    // console.log(gasto)

    //crear variables
    const labels  = unicos.map((el)=> convertNumberToMonth(el))

    //data ahorro
    const ahorroData = ahorro.map((el)=> el.sumValue)
    //data gasto
    const gastoData = gasto.map((el)=> el.sumValue)
    
    return {labels,ahorroData,gastoData};

}