import { createStore, combineReducers } from "redux";
import { posts } from './reducers/posts'
//  npm install @reduxjs/toolkit react-redux
import { compose, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import { user } from './reducers/user'


// combines all existing reducers into a larger object
const rootReducer = combineReducers({
    posts,
    user
})

const middleware = compose(
    applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const store = createStore(rootReducer, middleware)