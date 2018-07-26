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
        <div className="profile-video">
          <iframe
            src="https://www.youtube.com/embed/{ props.user.profile.youtube }"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <h1>{profile.username}</h1>

        <ul className="profile-genres">
          {profile.genres.map((genre, i) => <li key={i}>{genre}</li>)}
        </ul>
        <div className="profile-name-age-place">
          <div className="profile-name">
            {profile.firstName} {profile.lastName}
          </div>
          <div className="profile-age">{profile.age}</div>
          <div className="profile-city">{profile.city}</div>
        </div>
        <ul className="profile-instruments">
          {profile.instruments.map((instrument, i) => <li key={i}>{instrument}</li>)}
        </ul>
      </div>
    </div>
  )
}
