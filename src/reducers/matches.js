import _ from 'lodash'

import { DISLIKE_USER, LIKE_USER } from '../actions/swipe'
import matches from '../data/matches'

const likeUser = (state, { mainUserId, profileUserId }) => {
  const newState = _.cloneDeep(state)

  //add profileUserId and remove duplication
  newState[mainUserId].likes = [...newState[mainUserId].likes, profileUserId].reduce(
    (likes, id) => {
      if (!likes.includes(id)) {
        likes.push(id)
      }
      return likes()
    },
    []
  )
  return newState
}

const dislikeUser = (state, { mainUserId, profileUserId }) => {
  const newState = _.cloneDeep(state)
  newState[mainUserId].likes = newState[mainUserId].likes.filter(id => id === profileUserId)
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
