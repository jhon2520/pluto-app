import moment from "moment"


const validateDateToAlert = (todoFecha)=>{

    const date = moment()
    const now = date.toDate().getTime();    
    const diff = new Date(todoFecha).getTime() - now;
    
    // console.log(now);
    // console.log(new Date(todoFecha).getTime() );
    // console.log(diff);
    
    const duration = new moment.duration(diff,"milliseconds");
    const days = Math.floor(duration.asDays());

    
    return days;

}

export default validateDateToAlert