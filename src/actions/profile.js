export const SAVE_PROFILE = 'SAVE_PROFILE'

export const saveProfile = (profileData) => {
	return {
	  type: SAVE_PROFILE,
	  payload: profileData
	}
}