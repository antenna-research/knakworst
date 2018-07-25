import _ from 'lodash'

import { DISLIKE_USER, LIKE_USER } from '../actions/swipe'
import matches from '../data/matches'

const updateMatches = (state, mainUserId, profileUserId) => {
  const isIncluded = state[profileUserId].likes.includes(mainUserId)

  if (isIncluded) {
    state[mainUserId].matches.push(profileUserId)
    state[profileUserId].matches.push(mainUserId)
  }
}

const likeUser = (state, { mainUserId, profileUserId }) => {
  const newState = _.cloneDeep(state)

  newState[mainUserId].likes = [...newState[mainUserId].likes, profileUserId]

  updateMatches(state, mainUserId, profileUserId)

  return newState
}

const dislikeUser = (state, { mainUserId, profileUserId }) => {
  const newState = _.cloneDeep(state)
  newState[mainUserId].dislikes = [...newState[mainUserId].dislikes, profileUserId]
  return newState
}

const reducer = (state = matches, { type, payload } = {}) => {
  switch (type) {
    case LIKE_USER:
      return likeUser(state, payload)
    case DISLIKE_USER:
      return dislikeUser(state, payload)
    default:
      return state
  }
}
export default reducer
