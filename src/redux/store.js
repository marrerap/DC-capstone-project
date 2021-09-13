import { createStore, combineReducers } from "redux";
import { messages } from './reducers/messages'
//  npm install @reduxjs/toolkit react-redux
import { compose, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import { user } from './reducers/user'
import { channels } from './reducers/channels'


// combines all existing reducers into a larger object
const rootReducer = combineReducers({
    messages,
    user,
    channels
})

const middleware = compose(
    applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const store = createStore(rootReducer, middleware)