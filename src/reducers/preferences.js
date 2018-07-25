import preferences from '../data/preferences'
import { UPDATE_PREFERENCES } from '../actions/updatePreferences';

const reducer = (state = preferences, action = {}) => {
  switch (action.type) {
    case UPDATE_PREFERENCES:
      return {
        ...state,
        [action.payload.currentUser]: action.payload.newPreferences
      }
  
    default:
      return state
  }
}
export default reducer
