import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MatchesPage from "./MatchesPage"
import NavComponent from "../Nav/NavComponent";

class MatchesPageContainer extends PureComponent {
  render() {
    return (
      <div id={'MatchesPageContainer'}>
        <NavComponent/>
        Matches Page Container!
      <MatchesPage />
      </div>
    )
  }
}

MatchesPageContainer.propTypes = {}

export default MatchesPageContainer
