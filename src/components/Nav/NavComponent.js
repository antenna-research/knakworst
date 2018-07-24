import React, {PureComponent} from 'react'
import {Link} from "react-router-dom";
import './styles/NavComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavComponent extends PureComponent {
  render() {
    return (
      <div id={'NavComponent'}>
        <Link to={'/profile'} className={'NavComponent-Link'}><div id={'NavComponent-Profile'}><FontAwesomeIcon icon='user-circle' /></div></Link>
        <Link to={'/swipe'} className={'NavComponent-Link'}><div id={'NavComponent-Swipe'}><FontAwesomeIcon icon='music' /></div></Link>
        <Link to={'/matches'} className={'NavComponent-Link'}><div id={'NavComponent-Matches'}><FontAwesomeIcon icon='comment' /></div></Link>
      </div>
    )
  }
}

export default NavComponent
