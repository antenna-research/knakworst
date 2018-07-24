import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MatchesPage from "./MatchesPage"

class MatchesPageContainer extends PureComponent {
  render() {
    return (
      <div id={'MatchesPageContainer'}>
      <MatchesPage />
      </div>
    )
  }
}

MatchesPageContainer.propTypes = {}

export default MatchesPageContainer
