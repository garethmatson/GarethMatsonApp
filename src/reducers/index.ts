import {combineReducers} from 'redux'
import posts from './posts'
import users from './users'

const reducer = combineReducers({posts, users})
export default reducer

export type IAppState = ReturnType<typeof reducer>
