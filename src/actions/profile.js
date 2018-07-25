export const SAVE_PROFILE = 'SAVE_PROFILE'

export function saveProfile(profileData) {
  return {
    type: SAVE_PROFILE,
    payload: profileData
  }
}