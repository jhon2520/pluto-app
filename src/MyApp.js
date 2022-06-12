import React from 'react'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import  store from './store/store'
import "../src/css/Const.css"

const MyApp = () => {
    return (

        <Provider store={store}>
            <AppRouter/>
        </Provider>
        // <LoginPage/>
    )
}

export default MyApp