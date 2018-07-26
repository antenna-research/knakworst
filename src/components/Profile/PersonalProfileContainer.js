import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import NavComponent from '../Nav/NavComponent'
import Profile from './ProfileCard'

class PersonalProfileContainer extends PureComponent {
  render() {
    return (
      <div id={'PersonalProfileContainer'}>
        <NavComponent />
        Profile Container
        { (this.props.currentUser === this.props.match.params.id) ? 
            <span> (<Link to={`/profile/edit/${this.props.match.params.id}`}>Edit</Link>)</span> :
            '' }        
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
