import React from 'react'
import Profile from "../Profile/Profile";


export default function swipe(props) {
  return (
    <div>

      <h1>Swipe page is rendered</h1>
      <Profile profile={props.profile} userId={props.currentCandidate}/>
       {/*<button onClick={() => props.dislikeUser(mainUserId, profileUserId)}>Dislike</button>*/}
      {/*<button onClick={() => props.likeUser(mainUserId, profileUserId)}>Like</button>*/}
    </div>
   

  )
}