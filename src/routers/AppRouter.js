import React,{useEffect} from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import {useDispatch} from "react-redux"

import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from "../pages/HomePage"
import SpendPage from "../pages/SpendPage"
import SavingPage from "../pages/SavingPage"
import DashBoardPage from "../pages/DashBoardPage"
import NewSpendPage from '../pages/NewSpendPage'
import ToDoPage from "../pages/ToDoPage"
import firebaseApp from '../firebase/firebaseConfig'
import {getAuth,onAuthStateChanged} from "firebase/auth"
import { login } from '../actions/auth.action'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import NewSavingPage from '../pages/NewSavingPage'



const AppRouter = () => {


    const auth = getAuth(firebaseApp);
    const dispatch = useDispatch();

    useEffect(()=>{
        
        onAuthStateChanged(auth,(user)=>{
            
            if(user?.uid){
                dispatch(login(user.uid,user.displayName))
               // dispatch(startLoadingSpends(user.uid))
            }
            
        })
        
    },[auth,dispatch,])
    

    return (
        <BrowserRouter>
        
            <Routes>

                <Route path='/login/*' element={

                    <PublicRoutes>
                        <Routes>
                            <Route path='/' element={<LoginPage/>} />
                            <Route path='login' element={<LoginPage/>} />
                            <Route path='register' element={<RegisterPage/>} />
                            <Route path='*' element={<Navigate replace to ="/login"/>} />
                        </Routes>
                    </PublicRoutes>
                
                }/>

                <Route path='/*' element={

                    <PrivateRoutes>
                        <Routes>
                            <Route path='/' element={<HomePage/>} />
                            <Route path='/home' element={<HomePage/>} />
                            <Route path='spend' element={<SpendPage/>} />
                            <Route path='spend/new' element={<NewSpendPage/>} />
                            <Route path='spend/:spendId' element={<NewSpendPage/>} />
                            <Route path='saving' element={<SavingPage/>} />
                            <Route path='saving/new' element={<NewSavingPage/>} />
                            <Route path='saving/:savingId' element={<NewSavingPage/>} />
                            <Route path='todo' element={<ToDoPage/>} />
                            <Route path='dashboard' element={<DashBoardPage/>} />
                            <Route path='*' element={<Navigate replace to="/home"/> } />
                        </Routes>
                    </PrivateRoutes>

                }/>


            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter