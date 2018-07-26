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
        <img src={user.image} alt="" />
        <div className="info">
          <h1 className="name">{user.username}</h1>
          <div className="details">
            <p>age: {user.age}</p>
            <p>location: {user.address}</p>
            <p>genre(s): {user.genres.map(genre => <span key={genre}>{genre} </span>)}</p>

            <p>
              instrument(s):{' '}
              {user.instruments.map(instrument => <span key={instrument}>{instrument} </span>)}
            </p>
          </div>

          <Link to={`/profile/${user.id}`}>
            <Button className="button">Profile</Button>
          </Link>
        </div>
      </Col>
    ))}
  </div>
)

MatchesPage.propTypes = {}

export default MatchesPage
