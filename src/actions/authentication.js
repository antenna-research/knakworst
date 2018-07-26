import '../firebase/settings.js'

// import axios from 'axios'
import firebase from 'firebase'

export const CREATE_USER = 'CREATE_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const SET_USER = 'SET_USER'
export const CHECK_AUTH = 'CHECK_AUTH'

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

export const checkAuth = () => {
  return async dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('user is logged in')
        dispatch({
          type: SET_USER,
          payload: {
            userId: user.uid
          }
        })
      } else {
        console.log('no user')
      }
    })
  }
}

export const checkdb = () => {
  return async dispatch => {
    const user = firebase.auth().currentUser
    if (user) {
      console.log('db')
      firebase
        .database()
        .ref('something/' + user.uid)
        .set({
          username: 'name',
          email: 'email',
          matches: {
            likes: ['1', '2', '3'],
            dislikes: [],
            matches: ['1', '2', '3']
          }
        })
    }
  }
}
