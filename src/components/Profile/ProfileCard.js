import React from 'react'
import './styles/ProfileCard.scss'

export default function ProfileCard({ profile }) {
  // const currentUser = props.profile[props.userId]
  // if (!currentUser) return null
  // const userId = props.userId
  // const currentCandidate = props.profile[userId]
  return (
    <div id={'Profile-component'}>
      <div id={'Profile-card'}>
        {!profile && 'Loading'}
        <div class='profile-video'>
          <iframe
            src='https://www.youtube.com/embed/{ props.user.profile.youtube }'
            frameborder='0'
            allow='autoplay; encrypted-media'
            allowfullscreen
          />
        </div>
        <h1 className={'profile-header'}>{profile.username}, {profile.age}</h1>
        <h2 class='profile-name'> (aka {profile.firstName} {profile.lastName} )</h2>


        <ul class='profile-genres'>{profile.genres.map((genre) => <li key={genre}>{genre}</li>)}</ul>
        <ul class='profile-instruments'>
          {profile.instruments.map((instrument) => <li key={instrument}>{instrument}</li>)}
        </ul>
      </div>
    </div>
  )
}
