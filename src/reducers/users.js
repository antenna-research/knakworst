import { LOGOUT_USER, SET_USERS } from '../actions/authentication'
import { SAVE_PROFILE } from '../actions/profile'

function saveToProfiles(state, payload) {
  let newState = {}
  console.log(payload.currentUser)
  for (let id in state) {
    if (id === payload.currentUser) {
      delete payload.currentUser
      newState[id] = payload.profileData
    } else {
      newState[id] = state[id]
    }
  }
  return newState
}

const reducer = (state = null, { type, payload } = {}) => {
  switch (type) {
    case SAVE_PROFILE:
      const newState = saveToProfiles(state, payload)
      return newState
    case SET_USERS:
      return { ...payload.users }
    case LOGOUT_USER:
      return null
    default:
      return state
  }
}

export default reducer
