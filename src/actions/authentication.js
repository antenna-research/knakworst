import { SET_MATCHES } from './matches'
import firebase from '../firebase/settings'
import usersData from '../data/users'
import matchesData from '../data/matches'
import preferencesData from '../data/preferences'

export const CREATE_USER = 'CREATE_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const SET_USER = 'SET_USER'
export const AUTH_VERIFIED = 'AUTH_VERIFIED'
export const SET_USERS = 'SET_USERS'
export const SET_PREFERENCES = 'SET_PREFERENCES'
// export const FETCH_DATA = 'FETCH_DATA'
export const LOGOUT_USER = 'LOGOUT_USER'

export const setUser = id => {
  return {
    type: SET_USER,
    payload: {
      userId: id
    }
  }
}

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
          userId: res.user.uid,
          isAuth: true
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
      const data = await firebase
        .auth()
        .signInWithEmailAndPassword('email407944@email.com', 'ashtasht')
      dispatch({
        type: LOGIN_USER,
        payload: { isAuth: true, userId: data.user.uid }
      })
    } catch (e) {
      console.log(e.message)
    }
  }
}

export const logoutUser = () => {
  return async dispatch => {
    const res = await firebase.auth().signOut()
    console.log(res)
    dispatch({
      type: LOGOUT_USER
    })
  }
}

export const checkAuth = () => {
  return async (dispatch, getState) => {
    console.log('check auth')
    console.log(firebase.auth().currentUser)
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        console.log('user is logged in')
        // console.log(getState().matches)
        // setTimeout(() => {
        //   dispatch({
        //     type: SET_MATCHES,
        //     payload: {
        //       users: usersData
        //     }
        //   })
        // }, 1000)
        // const token = await user.getIdTokenResult().then(res => res.token)
        dispatch({
          type: AUTH_VERIFIED
        })
        dispatch({
          type: LOGIN_USER,
          payload: { userId: user.uid }
        })
      } else {
        console.log('no user')
      }
    })
  }
}

export const fetchData = () => {
  return async dispatch => {
    const usersRequest = firebase
      .database()
      .ref('/users/')
      .once('value')
      .then(res => res.val())
    const matchesRequest = firebase
      .database()
      .ref('/matches/')
      .once('value')
      .then(res => res.val())
    const preferencesRequest = firebase
      .database()
      .ref('/preferences/')
      .once('value')
      .then(res => res.val())
    const [users, matches, preferences] = await Promise.all([
      usersRequest,
      matchesRequest,
      preferencesRequest
    ])

    dispatch({
      type: SET_MATCHES,
      payload: {
        matches
      }
    })

    dispatch({
      type: SET_USERS,
      payload: {
        users
      }
    })

    dispatch({
      type: SET_PREFERENCES,
      payload: {
        preferences
      }
    })
  }
}

export const resetDatabase = () => {
  return async dispatch => {
    const user = firebase.auth().currentUser
    if (user) {
      console.log('db')
      const resFromUsers = firebase
        .database()
        .ref('users/')
        .set(usersData)

      const resFromUsers2 = firebase
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
        .ref('matches/')
        .set(matchesData)

      const resFromMatches2 = firebase
        .database()
        .ref('matches/' + user.uid)
        .set({
          likes: ['1', '2', '3'],
          dislikes: [],
          matches: ['1', '2', '3']
        })

      const resFromPreferences = firebase
        .database()
        .ref('preferences/')
        .set(preferencesData)
      const resFromPreferences2 = firebase
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
      await Promise.all([
        resFromUsers,
        resFromUsers2,
        resFromMatches,
        resFromMatches2,
        resFromPreferences,
        resFromPreferences2
      ]).catch(e => console.log(e))
      console.log('done')
    }
  }
}
