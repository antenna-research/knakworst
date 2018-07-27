import React from 'react'
import './styles/ProfileCard.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

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
        <div className={'profile-info'}>
          <h1>{profile.username}, {profile.age}</h1>
          <h2>aka {profile.firstName} {profile.lastName}</h2>
          <div className={"profile-city"}><FontAwesomeIcon icon={'map-marker-alt'}/>  {profile.address}</div>
          <ul>
            {profile.genres.map((genre, i) => <li key={i} className={"profile-genres"}>{genre}</li>)}
          </ul>
          <div className={"profile-instruments-div"}>
            {profile.instruments.map((instrument, i) => <div key={i} className={"profile-instruments " + instrument}></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
