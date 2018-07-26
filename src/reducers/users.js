import users from '../data/users'
import { SAVE_PROFILE } from '../actions/profile'

function saveToProfiles(state, payload) {
  let newState = {}
  for (var id in state) {
    console.log('id', id, 'payload.id', payload.id)
    if (id === payload.id) {
      delete payload.id
      newState[id] = payload
      newState[id].username = 'this worked'
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
      console.log('new State', newState)
      return newState
    default:
      return state
  }

}

export default reducer