export const CREATE_USER = 'CREATE_USER'

export const createUser = user => {
  return {
    type: CREATE_USER,
    payload: {
      user: 'test'
    }
  }
}
