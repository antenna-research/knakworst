import React from 'react'
import './styles/ProfileCard.scss'

export default function ProfileCard({ profile }) {
  return (
    <div id={'Profile-component'}>
      <div id={'Profile-card'}>
        {!profile && 'Loading'}
        <div className={"profile-video"}>
          <iframe
            src={ 'https://www.youtube.com/embed/' + profile.youtube }
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <h1>{profile.username}, {profile.age}</h1>
        <h2>aka {profile.firstName} {profile.lastName}</h2>
        <div className={"profile-city"}>{profile.address}</div>

        <ul className={"profile-genres"}>
          {profile.genres.map((genre, i) => <li key={i} className={"profile-genres"}>{genre}</li>)}
        </ul>
        <div className={"profile-name-age-place"}>
          <div className={"profile-name"}>

          </div>
        </div>
        <ul className={"profile-instruments"}>
          {profile.instruments.map((instrument, i) => <span key={i} className={"profile-instruments " + instrument}></span>)}
        </ul>
      </div>
    </div>
  )
}
