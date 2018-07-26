// import users from '../data/users'
import { SAVE_PROFILE } from '../actions/profile'
import { SET_USERS } from '../actions/authentication'

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

const reducer = (state = {}, { type, payload } = {}) => {
  switch (type) {
    case SAVE_PROFILE:
      const newState = saveToProfiles(state, payload)
      return newState
    case SET_USERS:
      return { ...payload.users }
    default:
      return state
  }
}

export default reducer
