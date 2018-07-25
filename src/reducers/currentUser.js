import users from '../data/users'

const reducer = (state = Object.keys(users)[0], { type, payload } = {}) => {
  switch (type.action) {
    default:
      return state
  }
}
export default reducer
