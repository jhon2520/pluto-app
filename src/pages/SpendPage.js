import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSettingDataSpent } from '../actions/data.action'
import { startLoadingSpends } from '../actions/spend.action'
import Navbar from '../components/Navbar'
import MainSavingSpend from '../components/SpendMain'
import TableSpend from '../components/TableSpend'
import appImages from '../helpers/appImages'


const SpendPage = () => {
    
    const titulo = "MANTÉN TUS GASTOS ORGANIZADOS"
    const parrafo = "Aquí puedes llevar el registro de tus gastos, revisar el histórico de los mismos y editar la información"

    const dispatch = useDispatch();
    const state = useSelector(state=>state)
    const {uid} = state.auth



    useEffect(()=>{
        dispatch(startLoadingSpends(uid))
        dispatch(startSettingDataSpent())
    },[dispatch,uid])

    return (
        <div>
            <Navbar/>
            <MainSavingSpend
                img={appImages("./main2-img.png")}
                titulo = {titulo}
                parrafo = {parrafo}
            
            />
            <TableSpend/>
        </div>
    )
}

export default SpendPage