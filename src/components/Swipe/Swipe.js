import React, {PureComponent} from 'react'


export default function swipe(props) {
  return (
    <div>
      <h1>Swipe page is rendered</h1>
  
      {/* mainUserId and profileUserID will come from the state when state is set up correctly */}
      {console.log(props)}
      {/* <button onClick={() => props.dislikeUser(mainUserId, profileUserId)}>Dislike</button>
      <button onClick={() => props.likeUser(mainUserId, profileUserId)}>Like</button> */}
    </div>
   

  )
}