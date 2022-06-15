import moment from "moment";
import _ from "lodash";
import convertNumberToMonth from "./convertNumberToMonth";

export const groupByMonth = (data = [])=>{

    let aux = [];

    data.forEach((el)=>{
        let month =  ((moment(el.date,"YYYY/MM/DD").month() + 1));
        aux.push({...el,month,value:parseInt(el.value)});         
    })

    const result = _(aux).groupBy("month")
    .map((objs,key)=>({
        "month":parseInt(key),
        "sumValue":_.sumBy(objs,"value")
    })).value();

    // console.log(result);
    return result;;
    
}

export const getMostMonth = (data = [])=>{

    let initialValue = 0;
    let mes = 0;

    data.forEach((el)=>{
        if(el.sumValue >initialValue){
            initialValue = el.sumValue;
            mes = el.month;
        }
    })

    return {month:parseInt(mes),value:initialValue}

}