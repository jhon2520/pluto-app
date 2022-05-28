import authReducer from "../reducers/authReducer";
import dataReducer from "../reducers/dataReducer";
import savingsReducer from "../reducers/savingsReducer";
import spendReducer from "../reducers/spendReducer";
import todoReducer from "../reducers/todoReducer";
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../reducers/uiReducer";


const store = configureStore({
    reducer:{
        auth:authReducer,
        spend:spendReducer,
        saving: savingsReducer,
        todo:todoReducer,
        data:dataReducer,
        ui:uiReducer
    }
})

export default store