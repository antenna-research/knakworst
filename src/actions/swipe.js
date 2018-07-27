import firebase from '../firebase/settings'
import _ from 'lodash'
export const LIKE_USER = 'LIKE USER'
export const DISLIKE_USER = 'DISLIKE_USER'

const updateMatches = (state, userId, targetId) => {
  const isIncluded = state[targetId].likes.includes(userId)
  if (isIncluded) {
    state[userId].matches.push(targetId)
    state[targetId].matches.push(userId)
  }
}
//
// const likeUser = (state, { mainUserId, profileUserId }) => {
//   const newState = _.cloneDeep(state)
//
//   newState[mainUserId].likes = [...newState[mainUserId].likes, profileUserId]
//
//   updateMatches(newState, mainUserId, profileUserId)
//
//   return newState
// }
//
// const dislikeUser = (state, { mainUserId, profileUserId }) => {
//   const newState = _.cloneDeep(state)
//
//   newState[mainUserId].dislikes = newState[mainUserId].dislikes
//     ? [...newState[mainUserId].dislikes, profileUserId]
//     : [profileUserId]
//   return newState
// }

export const likeUser = (mainUserId, profileUserId) => {
  return async (dispatch, getState) => {
    const newState = _.cloneDeep(getState().matches)
    // newState.likes =
    //   newState[mainUserId].likes !== 0
    //     ? [...newState[mainUserId].likes, profileUserId]
    //     : [profileUserId]
    if (!newState[mainUserId].likes) {
      newState[mainUserId].likes = [profileUserId]
    } else {
      newState[mainUserId].likes.push(profileUserId)
    }

    if (!newState[mainUserId].matches) newState[mainUserId].matches = []
    if (!newState[profileUserId.matches]) newState[profileUserId].matches = []

    updateMatches(newState, mainUserId, profileUserId)

    const res = await firebase
      .database()
      .ref('matches/')
      .set(newState)
    console.log(newState)

    dispatch({
      type: LIKE_USER,
      payload: {
        newState
      }
    })
  }
}

export const dislikeUser = (mainUserId, profileUserId) => {
  return async (dispatch, getState) => {
    const newState = _.cloneDeep(getState().matches)

    newState[mainUserId].dislikes = newState[mainUserId].dislikes
      ? [...newState[mainUserId].dislikes, profileUserId]
      : [profileUserId]

    const res = await firebase
      .database()
      .ref('/matches/')
      .set(newState)

    dispatch({
      type: DISLIKE_USER,
      payload: {
        newState
      }
    })
  }
}
