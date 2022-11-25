import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "../reducers/todosReducer";
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware  = [thunk]
const rootReducers = combineReducers( {
    todos: todosReducer, 
})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)))

export default store;
