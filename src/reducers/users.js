import users from '../data/users'
import { SAVE_PROFILE } from '../actions/profile'

function saveToProfiles(state, payload) {
  let newState = {}
  for (var id in state) {
    if (id === payload.id) {
      delete payload.id
      newState[id] = payload
    } else {
      newState[id] = state[id]
    }
  }
  return newState
}

const reducer = (state = users, { type, payload } = {}) => {

  switch (type) {
    case SAVE_PROFILE:
      const newState = saveToProfiles(state, payload)
      return newState
    default:
      return state
  }

}

export default reducer