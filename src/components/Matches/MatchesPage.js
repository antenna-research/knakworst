import { Col, Grid, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/lib/Button'
import React from 'react'

import './styles/MatchesPage.scss'

import PropTypes from 'prop-types'

const tempStyle = {
  border: '2px solid gray',
  borderRadius: '20px',
  // margin: '10%',
  textAlign: 'center'
}

const MatchesPage = props => (
  <Grid>
    <Row className="show-grid">
      {props.matchedUsers.map(user => (
        <Col sm={6} md={3} key={user.id} style={tempStyle} id="MachesPage">
          <Link to={`/profile/${user.id}`}>
            <Button bsStyle="primary">Profile</Button>
          </Link>
          <h1>{user.username}</h1>
          <p>age: {user.age}</p>
          <p>place: {user.address}</p>
          <p>genre(s): {user.genres.map(genre => <span key={genre}>{genre} </span>)}</p>

          <p>
            instrument(s):{' '}
            {user.instruments.map(instrument => <span key={instrument}>{instrument}</span>)}
          </p>

          <hr />
          <a
            href={`https://wa.me/${user.phone.replace(
              /-/g,
              ''
            )}?text=I'm%20matched%20with%20you%20on%20Knakworst`}
          >
            <FontAwesomeIcon icon={['fab', 'whatsapp']} size="3x" />
          </a>
        </Col>
      ))}
    </Row>
  </Grid>
)

MatchesPage.propTypes = {}

export default MatchesPage
