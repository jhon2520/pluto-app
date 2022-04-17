import React from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from "../pages/HomePage"
import SpendPage from "../pages/SpendPage"
import SavingPage from "../pages/SavingPage"
import DashBoardPage from "../pages/DashBoardPage"

const AppRouter = () => {
    return (
        <BrowserRouter>
        
            <Routes>
                
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/register' element={<RegisterPage/>} />
                <Route path='/home' element={<HomePage/>} />
                <Route path='/spend' element={<SpendPage/>} />
                <Route path='/saving' element={<SavingPage/>} />
                <Route path='/dashboard' element={<DashBoardPage/>} />
                <Route path='*' element={<Navigate replace to="/login"/> } />

            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter