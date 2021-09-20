import { createStore, combineReducers } from "redux";
import { messages } from './reducers/messages'
//  npm install @reduxjs/toolkit react-redux
import {  applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import { user } from './reducers/user';
import { channels } from './reducers/channels';
import { docLinks } from './reducers/docLinks'
import { composeWithDevTools } from "redux-devtools-extension";


// combines all existing reducers into a larger object
const rootReducer = combineReducers({
    messages,
    user,
    channels,
    docLinks,

})

const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
)

export const store = createStore(rootReducer, middleware)