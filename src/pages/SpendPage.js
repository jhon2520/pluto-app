import React,{useEffect,useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSettingDataSpent } from '../actions/data.action'
import { startLoadingSpends } from '../actions/spend.action'
import Navbar from '../components/Navbar'
import MainSavingSpend from '../components/SpendMain'
import TableSpend from '../components/TableSpend'
import appImages from '../helpers/appImages'

let valor = 0;

const SpendPage = () => {
    
    const titulo = "MANTÉN TUS GASTOS ORGANIZADOS"
    const parrafo = "Aquí puedes llevar el registro de tus gastos, editar la información almacenada y exportar en un archivo de excel"

    const dispatch = useDispatch();
    const state = useSelector(state=>state)
    const {uid} = state.auth




    useEffect(()=>{

        if(valor === 0 ){
            valor++
            return
        }
        
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