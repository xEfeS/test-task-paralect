import {combineReducers,createStore,applyMiddleware} from "redux";
import reposReducer from "./reducers/reposReducer";
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import usersReducer from "./reducers/usersReduser";

const rootReducer = combineReducers({
    repos:reposReducer,
    users:usersReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))