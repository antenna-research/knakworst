import axios from 'axios'

export const CREATE_USER = 'CREATE_USER'

export const createUser = user => {
  return async dispatch => {
    const res = await axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(({ data }) => data)

    return dispatch({
      type: CREATE_USER,
      payload: {
        user: res
      }
    })
  }
}
