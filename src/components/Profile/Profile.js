import React from 'react'
import { connect } from 'react-redux'

export default function Profile(props) {

  // remove when container is ready
  props.user = {
    firstName: 'Kinney',
    lastName: 'Tate',
    age: 20,
    phone: '974-566-3044',
    email: 'Kinney@gmail.com',
    address: 'Amsterdam',

    profile: {
      genres: ['Rock', 'Jazz', 'Pop'],
      instrument: ['Guitar'],
      youtube: 'ltmYirj5IA0',
    },
  }

  return (<div class="profile">
    <div class="profile-video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/{ props.user.profile.youtube }" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <ul class="profile-genres">
      {
        props.profile.genres.map( (genre, i) => 
        <li key={i}>{ genre }</li>)
      }
    </ul>
    <div class="profile-name-age-place">
      <div class="profile-name">
        {props.user.firstName} {props.user.lastName}
      </div>
      <div class="profile-age">
        {props.user.age}
      </div>
      <div class="profile-city">
        {props.user.age}
      </div>
    </div>
    <ul class="profile-instruments">
      {
        props.profile.instruments.map( (instrument, i) => 
        <li key={i}>{ instrument }</li>)
      }
    </ul>
  </div>)

}
/*

*/