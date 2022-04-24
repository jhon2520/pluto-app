import React from 'react'
import tables from "../css/Tables.module.css"
// import spendingData from '../assets/data/spending'
import useTable from '../hooks/useTable'
import NavPagination from './NavPagination'
import TableButtons from './TableButtons'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {startDeletingSpend} from "../actions/spend.action"
import questionMessage from '../helpers/questionMessage'
import successMessage from '../helpers/successMessage'



const TableSpend = ({spends}) => {

    const [paginated,pages,pagination,currentPage] = useTable(spends)
    // const state = useSelector(state => state);
    // const {uid} = state.auth
    const navigate = useNavigate();
    const dispatch = useDispatch();


    //console.log(uid)

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
                dispatch(startDeletingSpend(id))
            }
        })
    }

    return (
        <div className={tables.tabla_container}>
            <h2>Gastos</h2>

            { (spends.length < 1) ? <h1>No hay datos</h1>:
                <div className={tables.container_table}>
                <table className={tables.tabla}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Fecha gasto</th>
                            <th>Valor gasto</th>
                            <th>Descripción gasto</th>
                            <th>Editar gasto</th>
                            <th>Eliminar gasto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paginated?.map((spend,i)=>{
                                return(

                                <tr key={i} className={tables.table_row}>
                                    <td>{spend.id}</td>
                                    <td>{spend.date}</td>
                                    <td>{spend.value}</td>
                                    <td>{spend.description}</td>
                                    <td><button onClick={()=>handleEdit(spend.id)} className={tables.btn_editar}>Editar</button></td>
                                    <td><button onClick={()=>handleDelete(spend.id)} className={tables.btn_eliminar}>Eliminar</button></td>
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
            />
            <TableButtons
                nombre={"gastos"}
                handleNew={handleNewSpend}
            />

        </div>
    )
}

export default TableSpend