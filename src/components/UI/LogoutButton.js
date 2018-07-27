import { connect } from 'react-redux'
import React from 'react'

import { logoutUser } from '../../actions/authentication'
import './styles/LogoutButton.scss'
const LogoutButton = props => (
  <button onClick={props.logoutUser} className="logout-button">
    Logout
  </button>
)

export default connect(
  null,
  { logoutUser }
)(LogoutButton)
