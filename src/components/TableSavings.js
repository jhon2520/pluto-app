import React, { useEffect } from 'react'
import tables from "../css/Tables.module.css"
// import spendingData from '../assets/data/spending'
import useTable from '../hooks/useTable'
import NavPagination from './NavPagination'
import TableButtons from './TableButtons'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import questionMessage from '../helpers/questionMessage'
import successMessage from '../helpers/successMessage'
import { startDeletingSaving } from '../actions/savings.actions'
import { startSettingDataSave } from '../actions/data.action'



const TableSavings = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector(state=>state)
    const {savings} = state.saving
    const [paginated,pages,pagination,currentPage] = useTable(savings)

    const handleNewSpend = () =>{
        navigate("/saving/new")
    }

    const handleEdit = (idSpend) =>{
        navigate(`/saving/${idSpend}`)
    }

    const handleDelete = (id,value) =>{

        questionMessage().then((result)=>{
            if(result.isConfirmed){
                successMessage("Eliminado","registo eliminado con éxito")
                dispatch(startSettingDataSave())
                dispatch(startDeletingSaving(id))
            }
        })
    }

    useEffect(()=>{
        //dispatch(startSettingMostValueSaved())
    },[dispatch])


    return (
        <div className={tables.tabla_container}>
            <h2>Ahorros</h2>

            { (savings.length < 1) 
                ? <h1>No hay ahorros</h1>
                :<div className={tables.container_table}>
                <table className={tables.tabla}>
                    <thead>
                        <tr>
                            {/* <th>id</th> */}
                            <th>Fecha ahorro</th>
                            <th>Valor ahorro</th>
                            <th>Descripción ahorro</th>
                            <th>Editar ahorro</th>
                            <th>Eliminar ahorro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paginated?.map((saving,i)=>{
                                return(

                                <tr key={i} className={tables.table_row}>
                                    {/* <td>{spend.id}</td> */}
                                    <td data-label="Fecha gasto">{saving.date}</td>
                                    <td data-label="Valor gasto">{saving.value}</td>
                                    <td data-label="Descripción gasto">{saving.description}</td>
                                    <td data-label="Editar gasto"><button onClick={()=>handleEdit(saving.id)} className={tables.btn_editar}>Editar</button></td>
                                    <td data-label="Eliminar gasto"><button onClick={()=>handleDelete(saving.id,saving.value)} className={tables.btn_eliminar}>Eliminar</button></td>
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
                nombre={"ahorros"}
                handleNew={handleNewSpend}
            />

        </div>
    )
}

export default TableSavings