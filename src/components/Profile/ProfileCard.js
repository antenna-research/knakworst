import React from 'react'
import './styles/ProfileCard.css'

export default function ProfileCard(props) {
  const currentUser = props.profile[props.userId]
  if (!currentUser) return null
  const userId = props.userId
  const currentCandidate = props.profile[userId]
  return (
    <div id={'Profile-component'}>
      <div id={'Profile-card'}>
        {!props.profile && 'Loading'}
        <div class="profile-video">
          <iframe src="https://www.youtube.com/embed/{ props.user.profile.youtube }" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>

        <h1>{currentCandidate.username}</h1>

      <ul class="profile-genres">
        {currentCandidate.genres.map( (genre, i) =>
          <li key={i}>{ genre }</li>)
        }
      </ul>
      <div class="profile-name-age-place">
        <div class="profile-name">
          {currentCandidate.firstName} {props.profile.lastName}
        </div>
        <div class="profile-age">
          {currentCandidate.age}
        </div>
        <div class="profile-city">
          {currentCandidate.city}
        </div>
      </div>
      <ul class="profile-instruments">
        {
          currentCandidate.instruments.map( (instrument, i) =>
          <li key={i}>{ instrument }</li>)
        }
      </ul>
    </div>
  </div>
)
}