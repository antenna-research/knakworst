import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import NavComponent from '../Nav/NavComponent'
import Profile from './ProfileCard'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './styles/PeronalProfileContainer.scss'

class PersonalProfileContainer extends PureComponent {
  render() {
    return (
      <div id={'PersonalProfileContainer'}>
        <NavComponent />
        <div id='PersonalProfileContainerLinkDiv'>
          <Link to={`/profile/edit/${this.props.match.params.id}`} className={'Personal-Profile-Links'}><FontAwesomeIcon icon='user-edit' /></Link>
          <Link to={'/preferences'} className={'Personal-Profile-Links'}><FontAwesomeIcon icon='sliders-h' /></Link>
        </div>
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
