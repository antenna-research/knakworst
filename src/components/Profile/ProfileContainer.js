import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavComponent from "../Nav/NavComponent";
import Profile from "./Profile";

class ProfileContainer extends PureComponent {
  render() {
    return (
      <div id={'ProfileContainer'}>
        <NavComponent/>
        Profile Container
        <Profile profile={this.props.users}/>
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
