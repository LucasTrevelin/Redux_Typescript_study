import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './Reducers/userReducer'

export const userStore = createStore(userReducer, applyMiddleware(thunk))
