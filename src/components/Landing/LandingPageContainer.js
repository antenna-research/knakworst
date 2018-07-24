import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import NavComponent from "../Nav/NavComponent";

class LandingPageContainer extends PureComponent {
  render() {
    return (
      <div id={'LandingPageContainer'}>
        <NavComponent/>
        <h1>Landing Page</h1>
      </div>
    )
  }
}

LandingPageContainer.propTypes = {}

export default LandingPageContainer
