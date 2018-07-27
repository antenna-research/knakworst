import firebase from "../firebase/settings"
import {fetchData} from "./authentication"

export const SAVE_PROFILE = 'SAVE_PROFILE'
export const SET_PROFILE = 'SET_PROFILE'

export const saveProfile = (profileData, currentUser, other) => {
  return async dispatch => {
    const user = firebase.auth().currentUser
    if (user) {
      console.log('db')

      const saveProfileData = firebase
        .database()
        .ref('users/' + user.uid)
        .set(profileData)

      await Promise.all([saveProfileData])
        .catch(e => console.log(e))
      console.log('done')

      dispatch({
      type: SAVE_PROFILE,
      payload: {profileData, currentUser}
    })
    }
  }
}