import React from 'react'
import { Navigate } from 'react-router-dom';
import {useSelector} from "react-redux"

const PublicRoutes = ({children}) => {

    const state = useSelector(state => state)
    const {auth} = state;

    return !auth.uid ? children : <Navigate to={"/home"}/>
}

export default PublicRoutes