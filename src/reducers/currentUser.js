import { SET_USER } from '../actions/authentication'

import users from '../data/users'

const reducer = async (state = Object.keys(users)[0], { type, payload } = {}) => {
  switch (type) {
    case SET_USER:
      return payload.userId
    default:
      return state
  }
}
export default reducer
