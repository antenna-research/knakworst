import { combineReducers, createStore } from 'redux'

import usersReducer from './reducers/users'
import preferencesReducer from './reducers/users'
import matchesReducer from './reducers/matches'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
  users: usersReducer,
  preferences: preferencesReducer,
  matches: matchesReducer
})

const store = createStore(reducers, enhancer)

export default store
