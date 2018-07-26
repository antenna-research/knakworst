export const SAVE_PROFILE = 'SAVE_PROFILE'
export const SET_PROFILE = 'SET_PRIFILE'

export const saveProfile = profileData => {
  return {
    type: SAVE_PROFILE,
    payload: profileData
  }
}
