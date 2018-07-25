export const UPDATE_PREFERENCES = 'UPDATE_PREFERENCES'

export const updatePreferences = (currentUser, newPreferences) => {
  return {
    type: UPDATE_PREFERENCES,
    payload: {currentUser, newPreferences}
  }
}