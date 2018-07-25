import React from 'react'
import './styles/ProfileCard.css'

export default function ProfileCard({ profile }) {
  // const currentUser = props.profile[props.userId]
  // if (!currentUser) return null
  // const userId = props.userId
  // const currentCandidate = props.profile[userId]
  return (
    <div id={'Profile-component'}>
      <div id={'Profile-card'}>
        {!profile && 'Loading'}
        <div class="profile-video">
          <iframe
            src="https://www.youtube.com/embed/{ props.user.profile.youtube }"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>

        <h1>{profile.username}</h1>

        <ul class="profile-genres">{profile.genres.map((genre, i) => <li key={i}>{genre}</li>)}</ul>
        <div class="profile-name-age-place">
          <div class="profile-name">
            {profile.firstName} {profile.lastName}
          </div>
          <div class="profile-age">{profile.age}</div>
          <div class="profile-city">{profile.city}</div>
        </div>
        <ul class="profile-instruments">
          {profile.instruments.map((instrument, i) => <li key={i}>{instrument}</li>)}
        </ul>
      </div>
    </div>
  )
}
