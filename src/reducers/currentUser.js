import { LOGOUT_USER } from '../actions/authentication'

import { LOGIN_USER, SET_USER } from '../actions/authentication'
import users from '../data/users'

const reducer = (state = null, { type, payload } = {}) => {
  switch (type) {
    case SET_USER:
      console.log('setUser')
      return payload.userId
    case LOGIN_USER:
      console.log('login')
      return payload.userId
    case LOGOUT_USER:
      return null
    default:
      return state
  }
}
export default reducer
