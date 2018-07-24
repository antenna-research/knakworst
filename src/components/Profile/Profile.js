import React from 'react'
import { connect } from 'react-redux'

export default function Profile(props) {
  const userId = props.userId
  const currentCandidate = props.profile[userId]
  return (

    // <div>
    //   {console.log(props)}
    //   {/* {props && console.log(props.users)} */}
    //  </div>
  <div id={props.userId}>
    {!props.profile && 'Loading'}

    {props.profile &&

    <h1>{console.log(currentCandidate.name)}</h1>
    
  //   <div class="profile">
  //   <div class="profile-video">
  //     <iframe width="560" height="315" src="https://www.youtube.com/embed/{ props.user.profile.youtube }" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  //   </div>
  //   <ul class="profile-genres">
  //     {
  //       props.profile.genres.map( (genre, i) => 
  //       <li key={i}>{ genre }</li>)
  //     }
  //   </ul>
  //   <div class="profile-name-age-place">
  //     <div class="profile-name">
  //       {props.profile.firstName} {props.profile.lastName}
  //     </div>
  //     <div class="profile-age">
  //       {props.profile.age}
  //     </div>
  //     <div class="profile-city">
  //       {props.profile.age}
  //     </div>
  //   </div>
  //   <ul class="profile-instruments">
  //     {
  //       props.profile.instruments.map( (instrument, i) => 
  //       <li key={i}>{ instrument }</li>)
  //     }
  //   </ul>
  // </div>

    }

   </div> 
  
  )

}
/*

*/