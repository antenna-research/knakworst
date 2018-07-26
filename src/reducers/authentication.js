import { CREATE_USER } from '../actions/authentication'

export default (state = {}, { type, payload } = {}) => {
  switch (type) {
    case CREATE_USER:
      console.log(payload)
      return state
    default:
      return state
  }
}
