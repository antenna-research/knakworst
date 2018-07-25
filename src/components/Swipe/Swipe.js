import React from 'react'
import Profile from '../Profile/ProfileCard'

export default function swipe(props) {
  const currentCandidate = props.profile[props.currentCandidateId]
  //.I will take care of this if statement etc later
  if (!currentCandidate) return 'Loading'
  return (
    <div id={'swipe'}>
      {!props.currentUserId && !props.currentCandidateId && 'Loading'}
      <h1>Swipe page is rendered</h1>
      <Profile profile={currentCandidate} />
      <button onClick={() => props.setDislikeUser(props.currentUserId, props.currentCandidateId)}>
        Dislike
      </button>
      <button onClick={() => props.setLikeUser(props.currentUserId, props.currentCandidateId)}>
        Like
      </button>
    </div>
  )
}
