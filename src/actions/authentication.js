import '../firebase/settings.js'

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
      const resFromUers = firebase
        .database()
        .ref('users/' + user.uid)
        .set({
          username: 'Kinney1',
          firstName: 'Kinney',
          lastName: 'Tate',
          age: 20,
          phone: '974-566-3044',
          email: 'Kinney@gmail.com',
          address: 'Amsterdam',
          genres: ['Rock', 'Jazz', 'Pop'],
          instruments: ['Guitar', 'Piano', 'Bass'],
          youtube: ['bPQNal63IVI'],
          image: 'https://fakeimg.pl/1200x800/eb61a9/fff'
        })
      const resFromMatches = firebase
        .database()
        .ref('matches/' + user.uid)
        .set({
          likes: ['1', '2', '3'],
          dislikes: [],
          matches: ['1', '2', '3']
        })

      const resFromPreferences = firebase
        .database()
        .ref('preferences/' + user.uid)
        .set({
          genres: ['Rock', 'Jazz', 'Funk', 'Classic'],
          instruments: ['Piano', 'Bass', 'Flute'],
          locations: ['Amsterdam', 'Leiden'],
          age: {
            min: 18,
            max: 40
          }
        })
      await Promise.all([resFromUers, resFromMatches, resFromPreferences]).catch(e =>
        console.log(e)
      )
      console.log('done')
    }
  }
}
