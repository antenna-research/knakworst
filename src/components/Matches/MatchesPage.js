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
        <div id="user-details">
          <h1 className="name">{user.username}, {user.age}</h1>
          <div><FontAwesomeIcon icon={'map-marker-alt'}/>   {user.address}</div>
        </div>
        <div id="profile-button">
          <a href={`https://wa.me/${user.phone.replace(/[^0-9]/g, "")}?text=I'm%20matched%20with%20you%20on%20Knakworst`}><FontAwesomeIcon icon={['fab', 'whatsapp']} size={'2x'}/></a>
          <Link to={`/profile/${user.id}`}>
            <button>Profile</button>
          </Link>
        </div>
        </div>
      </div>
    ))}
  </div>
)


export default MatchesPage
