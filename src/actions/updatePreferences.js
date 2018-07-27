import firebase from "../firebase/settings"

export const UPDATE_PREFERENCES = 'UPDATE_PREFERENCES'

export const updatePreferences = (currentUser, newPreferences) => {
  return async dispatch => {
    const user = firebase.auth().currentUser
    if (user) {
      console.log('db')

      const saveProfileData = firebase
        .database()
        .ref('preferences/' + user.uid)
        .set(newPreferences)

      await Promise.all([saveProfileData])
        .catch(e => console.log(e))
      console.log('done')

      dispatch({
        type: UPDATE_PREFERENCES,
        payload: {currentUser, newPreferences}
      })
    }
  }
}

