import React, {PureComponent} from 'react'
import {Link} from "react-router-dom";
import './styles/NavComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavComponent extends PureComponent {
  render() {
    return (
      <div id={'NavComponent'}>
        <Link to={'/profile'} className={'NavComponent-Link'}><div id={'NavComponent-Profile'}><FontAwesomeIcon icon='user-circle' size="3x" /></div></Link>
        <Link to={'/swipe'} className={'NavComponent-Link'}><div id={'NavComponent-Swipe'}><FontAwesomeIcon icon='music' size="3x" /></div></Link>
        <Link to={'/matches'} className={'NavComponent-Link'}><div id={'NavComponent-Matches'}><FontAwesomeIcon icon='comment' size="3x" /></div></Link>
      </div>
    )
  }
}

export default NavComponent
