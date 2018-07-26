import { LOGIN_USER, SET_USER } from '../actions/authentication'
import users from '../data/users'

const reducer = (state = null, { type, payload } = {}) => {
  switch (type) {
    case SET_USER:
      return payload.userId
    case LOGIN_USER:
      return payload.userId
    default:
      return state
  }
}
export default reducer
