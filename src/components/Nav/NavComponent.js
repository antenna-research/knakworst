import './styles/NavComponent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import React, { PureComponent } from 'react'

class NavComponent extends PureComponent {
  render() {
    return (
      <div id={'NavComponent'}>
        <NavLink to={`/profile/${this.props.currentUser}`} className={'NavComponent-Link'} activeStyle={{color: '#ff4f00'}}>
          <div id={'NavComponent-Profile'}>
            <FontAwesomeIcon icon="user-circle" />
          </div>
        </NavLink>
        <NavLink to={'/swipe'} className={'NavComponent-Link'} activeStyle={{color: '#ff4f00'}}>
          <div id={'NavComponent-Swipe'}>
            <FontAwesomeIcon icon="music" />
          </div>
        </NavLink>
        <NavLink to={'/matches'} className={'NavComponent-Link'} activeStyle={{color: '#ff4f00'}}>
          <div id={'NavComponent-Matches'}>
            <FontAwesomeIcon icon="comment" />
          </div>
        </NavLink>

      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}
export default connect(mapStateToProps)(NavComponent)
