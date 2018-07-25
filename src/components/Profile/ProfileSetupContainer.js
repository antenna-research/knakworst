import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class ProfileSetupContainer extends PureComponent {
  registerProfile = (profileData) => {
    this.props.dispatch({
      type: 'REGISTER_PROFILE',
      payload: profileData
    })
  }
  render() {
    return <ProfileSetup registerProfile={this.registerProfile} />
  }
}

export default connect()(ProfileSetupContainer)