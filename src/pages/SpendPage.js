import React from 'react'
import Navbar from '../components/Navbar'
import SpendMain from '../components/SpendMain'
import TableSpend from '../components/TableSpend'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { startLoadingSpends } from '../actions/spend.action'


const SpendPage = () => {


    //desde aquí está entrando mal la información

    // const dispatch = useDispatch();
    // const state = useSelector(state=>state)
    // const {spends} = state.spend
    // const {uid} = state.auth
            
    // useEffect(()=>{
    //     console.log("se disparó el efecto que trae la data desde la pagina");
    //     dispatch(startLoadingSpends(uid))

    // },[dispatch,uid])
    




    return (
        <div>
            <Navbar/>
            <SpendMain/>
            <TableSpend
               // spends={spends}
            />
            


        </div>
    )
}

export default SpendPage