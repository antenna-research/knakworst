import { AUTH_VERIFIED, CREATE_USER, LOGIN_USER } from '../actions/authentication'

export default (state = {}, { type, payload } = {}) => {
  switch (type) {
    // case CREATE_USER:
    //   console.log(payload.user.uid)
    //   return state
    // case LOGIN_USER:
    //   return {
    //     isAuth: true
    //   }
    // case AUTH_VERIFIED:
    //   return {
    //     isAuth: true
    //   }
    default:
      return state
  }
}
