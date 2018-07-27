import { CREATE_USER, LOGIN_USER } from '../actions/authentication'

export default (state = {}, { type, payload } = {}) => {
  switch (type) {
    case CREATE_USER:
      console.log('create')
      console.log(payload.user.uid)
      return state
    case LOGIN_USER:
      console.log('login')
      return state
    default:
      return state
  }
}
