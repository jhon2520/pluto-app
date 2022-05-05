import {createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import authReducer from "../reducers/authReducer";
import savingsReducer from "../reducers/savingsReducer";
import spendReducer from "../reducers/spendReducer";
import todoReducer from "../reducers/todoReducer";



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth:authReducer,
    spend:spendReducer,
    saving: savingsReducer,
    todo:todoReducer
})


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)