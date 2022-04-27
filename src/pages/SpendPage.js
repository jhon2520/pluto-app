import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingSpends } from '../actions/spend.action'
import Navbar from '../components/Navbar'
import SpendMain from '../components/SpendMain'
import TableSpend from '../components/TableSpend'


const SpendPage = () => {
    

    const dispatch = useDispatch();
    const state = useSelector(state=>state)
    const {uid} = state.auth



    useEffect(()=>{
        dispatch(startLoadingSpends(uid))
    },[dispatch,uid])

    return (
        <div>
            <Navbar/>
            <SpendMain/>
            <TableSpend/>
        </div>
    )
}

export default SpendPage