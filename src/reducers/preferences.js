import { LOGOUT_USER, SET_PREFERENCES } from '../actions/authentication'
import { UPDATE_PREFERENCES } from '../actions/updatePreferences'

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case UPDATE_PREFERENCES:
      return {
        ...state,
        [action.payload.currentUser]: action.payload.newPreferences
      }
    case SET_PREFERENCES:
      return action.payload.preferences
    case LOGOUT_USER:
      return null
    default:
      return state
  }
}
export default reducer
