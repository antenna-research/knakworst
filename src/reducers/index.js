import { combineReducers } from 'redux'

import currentUserReducer from './currentUser'
import usersReducer from './users'
import preferencesReducer from './users'
import matchesReducer from './matches'

export default combineReducers({
  currentUser: currentUserReducer,
  users: usersReducer,
  preferences: preferencesReducer,
  matches: matchesReducer
})
