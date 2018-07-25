import React from 'react'
import Profile from "../Profile/ProfileCard";


export default function swipe(props) {
  return (
    <div id={'swipe'}>

      <h1>Swipe page is rendered</h1>
      <Profile profile={props.profile} userId={props.currentCandidate}/>
       {/*<button onClick={() => props.dislikeUser(mainUserId, profileUserId)}>Dislike</button>*/}
      {/*<button onClick={() => props.likeUser(mainUserId, profileUserId)}>Like</button>*/}
    </div>
   

  )
}