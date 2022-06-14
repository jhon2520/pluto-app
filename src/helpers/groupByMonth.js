import moment from "moment";
import _ from "lodash";
import convertNumberToMonth from "./convertNumberToMonth";

export const groupByMonth = (data = [])=>{

    let aux = [];

    data.forEach((el)=>{
        let month = moment(el.date,"YYYY/MM/DD").month() + 1;
        aux.push({...el,month,value:parseInt(el.value)}); 
    })

    const result = _(aux).groupBy("month")
    .map((objs,key)=>({
        "month":key,
        "sumValue":_.sumBy(objs,"value")
    })).value();


    return result;;
    
}

export const getMostMonth = (data = [])=>{

    let initialValue = 0;
    let mes = "";

    data.forEach((el)=>{
        if(el.sumValue >initialValue){
            initialValue = el.sumValue;
            mes = convertNumberToMonth(el.month);
        }
    })

    return {month:mes,value:initialValue}

}