export const LIKE_USER = 'LIKE USER'
export const DISLIKE_USER = 'DISLIKE_USER'

export const likeUser = (mainUserId, profileUserId) => {
  return {
    type: LIKE_USER,
    payload: { mainUserId, profileUserId }
  }
}

export const dislikeUser = (mainUserId, profileUserId) => {
  return {
    type: DISLIKE_USER,
    payload: { mainUserId, profileUserId }
  }
}
