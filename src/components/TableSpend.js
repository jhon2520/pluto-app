import React from 'react'
import tables from "../css/Tables.module.css"
import useTable from '../hooks/useTable'
import NavPagination from './NavPagination'
import TableButtons from './TableButtons'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {startDeletingSpend} from "../actions/spend.action"
import questionMessage from '../helpers/questionMessage'
import successMessage from '../helpers/successMessage'
import { startSettingDataSpent } from '../actions/data.action'



const TableSpend = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector(state=>state)
    const {spends} = state.spend
    const [paginated,pages,pagination,currentPage] = useTable(spends)
    // const [isLoading, setIsLoading] = useState(true)

    const handleNewSpend = () =>{
        navigate("/spend/new")
    }

    const handleEdit = (idSpend) =>{
        navigate(`/spend/${idSpend}`)
    }

    const handleDelete = (id) =>{

        questionMessage().then((result)=>{
            if(result.isConfirmed){
                successMessage("Eliminado","registo eliminado con éxito")
                dispatch(startSettingDataSpent())
                dispatch(startDeletingSpend(id))
            }
        })
    }

    // useEffect(() => {
    //     console.log(isLoading)
    //     dispatch(startSettingDataSpent())
    //     console.log("efecto disparado");
    //     setIsLoading(false);
    // }, [dispatch,isLoading]);



    // if(isLoading){
    //     return(<h1>Espere.....................................</h1>)
    // }

    return (
        <div className={tables.tabla_container}>
            <h2>Gastos</h2>

            { (spends.length < 1) ? <h1>No hay datos</h1>:
                <div className={tables.container_table}>
                <table className={tables.tabla}>
                    <thead>
                        <tr>
                            {/* <th>id</th> */}
                            <th>Fecha gasto</th>
                            <th>Valor gasto</th>
                            <th>Descripción gasto</th>
                            <th>Editar gasto</th>
                            <th>Eliminar gasto</th>
                        </tr>
                    </thead>
                    <tbody  className={tables.tabla_body}>
                        {
                            paginated?.map((spend,i)=>{
                                return(

                                <tr key={i} className={tables.table_row}>
                                    {/* <td>{spend.id}</td> */}
                                    <td data-label="Fecha gasto" >{spend.date}</td>
                                    <td data-label="Valor gasto">{spend.value}</td>
                                    <td data-label="Descripción gasto">{spend.description}</td>
                                    <td data-label="Editar gasto"><button onClick={()=>handleEdit(spend.id)} className={tables.btn_editar}>Editar</button></td>
                                    <td data-label="Eliminar gasto"><button onClick={()=>handleDelete(spend.id)} className={tables.btn_eliminar}>Eliminar</button></td>
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                </div>
            }


            <NavPagination
                pages={pages}
                pagination={pagination}
                currentPage={currentPage}
                dark ={false}
            />
            <TableButtons
                nombre={"gastos"}
                handleNew={handleNewSpend}
            />

        </div>
    )
}

export default TableSpend