import { SET_PREFERENCES } from '../actions/authentication'

import preferences from '../data/preferences'
import { UPDATE_PREFERENCES } from '../actions/updatePreferences'

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case UPDATE_PREFERENCES:
      return {
        ...state,
        [action.payload.currentUser]: action.payload.newPreferences
      }
    case SET_PREFERENCES:
      return {
        ...state,
        preferences: action.payload.preferences
      }
    default:
      return state
  }
}
export default reducer
