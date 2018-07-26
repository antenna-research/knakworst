import { SET_USER } from '../actions/authentication'

import users from '../data/users'

const reducer = (state = Object.keys(users)[0], { type, payload } = {}) => {
  switch (type) {
    case SET_USER:
      return payload.userId
    default:
      const userId = 'KmkWBqET3XgdWJblWUVoSgVewkE2'
      return userId
  }
}
export default reducer
