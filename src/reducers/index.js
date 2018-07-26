import { combineReducers } from 'redux'

import currentUserReducer from './currentUser'
import usersReducer from './users'
import preferencesReducer from './preferences'
import matchesReducer from './matches'
import authentication from './authentication'

export default combineReducers({
  currentUser: currentUserReducer,
  users: usersReducer,
  preferences: preferencesReducer,
  matches: matchesReducer,
  authentication
})
