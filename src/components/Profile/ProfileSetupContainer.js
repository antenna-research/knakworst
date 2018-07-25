import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ProfileSetup from "./ProfileSetup";
import { saveProfile } from '../../actions/profile'

class ProfileSetupContainer extends PureComponent {

  render() {
    let currentUserProfile = this.props.users[parseInt(this.props.currentUserId)]
    return <ProfileSetup currentUserId={this.props.currentUserId} currentUserProfile={this.props.users[parseInt(this.props.currentUserId)]} saveProfile={this.props.saveProfile} />
  }

}


const mapStateToProps = (state) => {
  return {
    currentUserId: state.currentUser,
    users: state.users
  }
}

export default connect(mapStateToProps, { saveProfile })(ProfileSetupContainer)
