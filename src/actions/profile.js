export const SAVE_PROFILE = 'SAVE_PROFILE'

export const saveProfile = (profileData) => {
	console.log('action fired')
	return {
	  type: SAVE_PROFILE,
	  payload: profileData
	}
}