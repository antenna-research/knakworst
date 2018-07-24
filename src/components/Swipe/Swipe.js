import React from 'react'

export default function swipe(props) {
  return (
    <div>
      <h1>Swipe page is rendered</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Marcus_Miller_at_Stockholm_Jazz_Fest_2009.jpg/240px-Marcus_Miller_at_Stockholm_Jazz_Fest_2009.jpg" alt="marcus miller"/>
      {console.log(props.users[0])}
      <p>Name: {props.users[0].username}</p>
      <button onClick={() => props.dislikeUser()}>Dislike</button>
      <button onClick={() => props.likeUser(1,2)}>Like</button>
    </div>
   

  )
}