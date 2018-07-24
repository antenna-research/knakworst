import { combineReducers, createStore } from 'redux'

import usersReducer from './reducers/users'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
  users: usersReducer
})

const store = createStore(reducers, enhancer)

export default store
