import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavComponent from '../Nav/NavComponent'
import Profile from './ProfileCard'

class PersonalProfileContainer extends PureComponent {
  render() {
    return (
      <div id={'PersonalProfileContainer'}>
        <NavComponent />
        Profile Container
        <Profile profile={this.props.currentUser} />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    currentUser: state.users[props.match.params.id]
  }
}

export default connect(mapStateToProps)(PersonalProfileContainer)
