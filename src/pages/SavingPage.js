import React,{useEffect} from 'react'
import { startLoadingSavings } from '../actions/savings.actions'
import Navbar from '../components/Navbar'
import MainSavingSpend from '../components/SpendMain'
import TableSavings from '../components/TableSavings'
import { useDispatch,useSelector } from 'react-redux'
import appImages from '../helpers/appImages'
import { startSettingTotalSave } from '../actions/data.action'

const SavingPage = () => {

    const titulo = "MANTÉN TUS AHORROS ORGANIZADOS"
    const parrafo = "Aquí puedes llevar el registro de tus ahorros, revisar el histórico de los mismos y editar la información"

    const dispatch = useDispatch();
    const state = useSelector(state=>state)

    const {uid} = state.auth

    useEffect(() => {
        dispatch(startLoadingSavings(uid));
        dispatch(startSettingTotalSave())
    }, [dispatch,uid]);

    return (
        <div>
            <Navbar/>
            <MainSavingSpend
                img={appImages("./main3-img.png")}
                titulo = {titulo}
                parrafo = {parrafo}
            />
            <TableSavings/>
        </div>
    )
}

export default SavingPage