import React from 'react'
import tables from "../css/Tables.module.css"
import spendingData from '../assets/data/spending'
import useTable from '../hooks/useTable'
import NavPagination from './NavPagination'
import TableButtons from './TableButtons'
import { useNavigate } from 'react-router-dom'

const TableSpend = () => {

    const [paginated,pages,pagination,currentPage] = useTable(spendingData)
    const navigate = useNavigate();

    const handleNewSpend = () =>{
        navigate("/spend/new")
    }

    return (
        <div className={tables.tabla_container}>
            <h2>Gastos</h2>

                <div className={tables.container_table}>
                <table className={tables.tabla}>
                    <thead>
                        <tr>
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
                                    <td>{spend.date}</td>
                                    <td>{spend.value}</td>
                                    <td>{spend.description}</td>
                                    <td>Btn editar</td>
                                    <td>Btn Eliminar</td>
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                </div>

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