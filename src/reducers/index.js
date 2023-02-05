import { combineReducers } from "redux"
import authReducer from './auth'
import currectUserReducer from './currentUser'
import questionReducer from './questions'

export default combineReducers({
    authReducer,
    currectUserReducer,
    questionReducer
})