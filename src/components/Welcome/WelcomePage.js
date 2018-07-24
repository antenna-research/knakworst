import React, {PureComponent} from 'react'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'
import NavComponent from "../Nav/NavComponent";

class WelcomePage extends PureComponent {
  render() {
    return (
      <div id={'WelcomePage'}>
        <h1>Welcome
          Page</h1>
        Welcome User! <br/>
        <Link to={'swipe'}>Start Swiping</Link>
      </div>
    )
  }
}

WelcomePage.propTypes = {}

export default WelcomePage
