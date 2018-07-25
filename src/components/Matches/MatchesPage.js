import { Col, Grid, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/lib/Button'
import React from 'react'

import './styles/MatchesPage.scss'

import PropTypes from 'prop-types'

const MatchesPage = props => (
  <div id="MachesPage">
    {props.matchedUsers.map(user => (
      <Col xs={12} md={5} key={user.id} className="profile-wrapper">
        <h1 className="name">{user.username}</h1>
        <p>age: {user.age}</p>
        <p>location: {user.address}</p>
        <p>genre(s): {user.genres.map(genre => <span key={genre}>{genre} </span>)}</p>

        <p>
          instrument(s):{' '}
          {user.instruments.map(instrument => <span key={instrument}>{instrument} </span>)}
        </p>

        <Link to={`/profile/${user.id}`}>
          <Button bsStyle="primary" className="button">
            Profile
          </Button>
        </Link>
        {/* <a
          href={`https://wa.me/${user.phone.replace(
            /-/g,
            ''
          )}?text=I'm%20matched%20with%20you%20on%20Knakworst`}
          >
          <FontAwesomeIcon icon={['fab', 'whatsapp']} size="3x" />
        </a> */}
      </Col>
    ))}
  </div>
)

MatchesPage.propTypes = {}

export default MatchesPage
