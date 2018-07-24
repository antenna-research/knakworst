import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavComponent from "../Nav/NavComponent";
import Profile from "./Profile";

class ProfileContainer extends PureComponent {
  render() {
    return (
      <div id={'ProfileContainer'}>
      {console.log(this.props.users)}
        <NavComponent/>
        Profile Container
        <Profile profile={this.props.users} userId={'1'}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(ProfileContainer)
