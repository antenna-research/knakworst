const _ = require('lodash')
const matches = {
  1: {
    likes: [2, 3],
    dislikes: [7, 8, 9],
    matches: [2, 3]
  },
  2: {
    likes: [1],
    dislikes: [5, 6, 7],
    matches: [1]
  },
  3: {
    likes: [1],
    dislikes: [5, 6, 7],
    matches: [1]
  }
}

const likeUser = (state, { mainUserId, profileUserId }) => {
  const newState = _.cloneDeep(state)

  //add profileUserId and remove duplication
  newState[mainUserId].likes = [...newState[mainUserId].likes, profileUserId].reduce(
    (likes, id) => {
      if (!likes.includes(id)) {
        likes.push(id)
      }
      return likes
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

const res = dislikeUser(matches, { mainUserId: 1, profileUserId: 2 })

console.log(res)
