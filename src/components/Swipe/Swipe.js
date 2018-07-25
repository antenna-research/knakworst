import React from 'react'
import Profile from "../Profile/ProfileCard";


export default function swipe(props) {
  return (
    <div id={'swipe'}>
      {!props.currentUserId && !props.currentCandidateId && 'Loading'}
      <h1>Swipe page is rendered</h1>
      <Profile profile={props.profile} userId={props.currentCandidateId}/>
       <button onClick={() => props.setDislikeUser(props.currentUserId, props.currentCandidateId)}>Dislike</button>
      <button onClick={() => props.setLikeUser(props.currentUserId, props.currentCandidateId)}>Like</button>
    </div>
   

  )
}