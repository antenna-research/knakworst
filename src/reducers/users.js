import users from '../data/users'
import { SAVE_PROFILE } from '../actions/profile'

const reducer = (state = users, { type, payload } = {}) => {

  function saveToProfiles(state, payload) {
    const updated = {...state, payload}
    let newState = {}
    for (var id in state) {
      if (id === payload.id) {
        delete payload[id]
        newState[id] = payload
        newState[id].username = 'this worked'
      } else {
        newState[id] = state[id]
      }
    }
    console.log('newState', newState)
    return newState
  }

  switch (type) {
    case SAVE_PROFILE:
      return saveToProfiles(state, payload)
    default:
      return state
  }
}

export default reducer
