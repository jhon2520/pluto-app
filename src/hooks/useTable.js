import {useState,useEffect} from 'react'
import _ from "lodash";

const pageSize = 10;

const useTable = (data) => {
    
    // paginated: para mapear la que se va a mapear
    // pages :  para mapear el navbar de la paginacion
    //pagination: metodo en el onclik de la paginacion
    //currentPage: valor de cada li


    const [paginated, setPaginated] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(()=>{
        setPaginated(_(data).slice(0).take(pageSize).value())

    },[data])

    const pagination = (pageNo)=>{
        
        setCurrentPage(pageNo);
        const startIndex = (pageNo - 1) * pageSize;
        const paginated = _(data).slice(startIndex).take(pageSize).value();
        setPaginated(paginated)

    }

    const pageCount = (data.length > 0) ? Math.ceil(data.length/pageSize) : 0
    if(pageCount === 1) return null;

    // usando lodash
    const pages = _.range(1,pageCount+1)



    return [
        paginated,pages,pagination,currentPage
    ]


}

export default useTable