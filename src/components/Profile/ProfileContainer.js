import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavComponent from "../Nav/NavComponent";

class ProfileContainer extends PureComponent {
  render() {
    return (
      <div id={'ProfileContainer'}>
        <NavComponent/>
        Profile Container
      </div>
    )
  }
}

ProfileContainer.propTypes = {}

export default ProfileContainer
