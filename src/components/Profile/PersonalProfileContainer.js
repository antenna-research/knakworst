import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavComponent from "../Nav/NavComponent";
import Profile from "./ProfileCard";

class PersonalProfileContainer extends PureComponent {
  render() {
    return (
      <div id={'PersonalProfileContainer'}>
      {console.log(this.props.users)}
        <NavComponent/>
        Profile Container
        <Profile profile={this.props.users} userId={this.props.currentUser}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(PersonalProfileContainer)
