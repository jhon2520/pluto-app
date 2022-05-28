import React from 'react'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import  store from './store/store'

const MyApp = () => {
    return (

        <Provider store={store}>
            <AppRouter/>
        </Provider>
        // <LoginPage/>
    )
}

export default MyApp