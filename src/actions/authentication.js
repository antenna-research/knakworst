// import '../firebase/settings.js'

import '../firebase/index.js'


// import axios from 'axios'
import firebase from 'firebase'

export const CREATE_USER = 'CREATE_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const SET_USER = 'SET_USER'

export const createUser = ({ email, password }) => {
  return async dispatch => {
    try {
      const random = Math.floor(Math.random() * 1000000)
      // const res = await firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(`email${random}@email.com`, 'password')

      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(`email${random}@email.com`, password)

      dispatch({
        type: SET_USER,
        payload: {
          userId: res.user.uid
        }
      })
    } catch (e) {
      console.log(e.message)
    }
  }
}

export const loginUser = () => {
  return async dispatch => {
    try {
      console.log('login')
      console.log(firebase.auth().currentUser.uid)
    } catch (e) {
      console.log(e.message)
    }
  }
}
