import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NavComponent from '../Nav/NavComponent'
import Profile from './ProfileCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/PersonalProfileContainer.scss'

class PersonalProfileContainer extends PureComponent {
  render() {
    return (
      <div id={'PersonalProfileContainer'}>
        <NavComponent />
        {this.props.currentUserId === this.props.match.params.id ? (
          <div id="PersonalProfileContainerLinkDiv">
            <Link
              to={`/profile/edit/${this.props.match.params.id}`}
              className={'Personal-Profile-Links'}
            >
              <FontAwesomeIcon icon="user-edit" />
            </Link>
            <Link to={'/preferences'} className={'Personal-Profile-Links'}>
              <FontAwesomeIcon icon="sliders-h" />
            </Link>
          </div>
        ) : null}
        <Profile profile={this.props.users[this.props.match.params.id]} />
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

export default connect(null)(PersonalProfileContainer)
