import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import React from 'react'
import './styles/MatchesPage.scss'


const MatchesPage = props => (
  <div id="MatchesPage">
    {props.matchedUsers.map(user => (
      <div key={user.id} className="MatchesPages-individualMatch-div">
      <img src={user.image} alt="" />
      <div id="user">
        <h1 className="name">{user.username}, {user.age}</h1>
        <div><FontAwesomeIcon icon={'map-marker-alt'}/>   {user.address}</div>
      </div>
        <div id="profile-button">
          <Link to={`/profile/${user.id}`}>
            <button className="button">Profile</button>
          </Link>
        </div>
      </div>
    ))}
  </div>
)


export default MatchesPage
