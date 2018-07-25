import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const tempStyle = {
  border: '2px solid gray',
  borderRadius: '20px',
  margin: '10%',
  textAlign: 'center'
}

const MatchesPage = props =>
  props.matchedUsers.map(user => {
    return (
      <div key={user.id} style={tempStyle}>
        <h1>{user.username}</h1>
        <p>age:</p>
        <p>{user.age}</p>
        <hr />
        <p>place:</p>
        <p>{user.address}</p>
        <hr />
        <p>genre(s)</p>
        {user.genres.map(genre => <p key={genre}>{genre}</p>)}
        <hr />
        <p>instrument(s)</p>
        {user.instruments.map(instrument => <p key={instrument}>{instrument}</p>)}
        <hr />
        <a
          href={`https://wa.me/${user.phone.replace(
            /-/g,
            ''
          )}?text=I'm%20matched%20with%20you%20on%20Knakworst`}
        >
          <FontAwesomeIcon icon={['fab', 'whatsapp']} size="3x" />
        </a>
      </div>
    )
  })

MatchesPage.propTypes = {}

export default MatchesPage
