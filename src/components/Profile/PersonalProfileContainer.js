import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NavComponent from '../Nav/NavComponent'
import Profile from './ProfileCard'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

class PersonalProfileContainer extends PureComponent {
  render() {
    return (
      <div id={'PersonalProfileContainer'}>
        <NavComponent />
        <Link to={`/profile/edit/${this.props.match.params.id}`}><FontAwesomeIcon icon="user-edit" /></Link>
        <Profile profile={this.props.viewedUser} />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    currentUser: state.currentUser,
    viewedUser: state.users[props.match.params.id]
  }
}

export default connect(mapStateToProps)(PersonalProfileContainer)
