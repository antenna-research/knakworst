import firebase from '../firebase/settings'
import _ from 'lodash'
export const LIKE_USER = 'LIKE USER'
export const DISLIKE_USER = 'DISLIKE_USER'
const updateMatches = (state, mainUserId, profileUserId) => {
  const isIncluded = state[profileUserId].likes.includes(mainUserId)

  if (isIncluded) {
    state[mainUserId].matches.push(profileUserId)
    state[profileUserId].matches.push(mainUserId)
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
    if (!newState.likes)
      newState.like = []
        ? [...newState[mainUserId].likes, profileUserId]
        : updateMatches(newState, mainUserId, profileUserId)

    const res = await firebase
      .database()
      .ref('/matches/')
      .set(newState)
    console.log(newState)

    return {
      type: LIKE_USER,
      payload: {
        newState
      }
    }
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
