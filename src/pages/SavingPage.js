import React,{useEffect,useRef} from 'react'
import { startLoadingSavings } from '../actions/savings.actions'
import Navbar from '../components/Navbar'
import MainSavingSpend from '../components/SpendMain'
import TableSavings from '../components/TableSavings'
import { useDispatch,useSelector } from 'react-redux'
import appImages from '../helpers/appImages'
import { startSettingDataSave  } from '../actions/data.action'


let valor = 0;

const SavingPage = () => {

    const titulo = "MANTÉN TUS AHORROS ORGANIZADOS"
    const parrafo = "Aquí puedes llevar el registro de tus ahorros, revisar el histórico de los mismos y editar la información"

    const dispatch = useDispatch();
    const state = useSelector(state=>state)
    const {uid} = state.auth


    useEffect(() => {

        if(valor === 0){
            valor++
            return
        }

        dispatch(startLoadingSavings(uid));
        dispatch(startSettingDataSave())

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