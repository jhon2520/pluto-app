import {createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import authReducer from "../reducers/authReducer";
import savingsReducer from "../reducers/savingsReducer";
import spendReducer from "../reducers/spendReducer";



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth:authReducer,
    spend:spendReducer,
    saving: savingsReducer
})


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)