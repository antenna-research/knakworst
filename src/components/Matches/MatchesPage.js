import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MatchesPage = props => {
  return (
    <div>
      <a href="https://wa.me/310627653060?text=I'm%20matched%20with%20you%20on%20Knakworst"><FontAwesomeIcon icon={['fab', 'whatsapp']} size="3x" /></a>

    </div>
  )
}

MatchesPage.propTypes = {

}

export default MatchesPage
