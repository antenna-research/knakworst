import './styles/App.css'

import { connect } from 'react-redux'
import {
  faUserCircle,
  faMusic,
  faComment,
  faTimesCircle,
  faHeart,
  faSlidersH
} from '@fortawesome/free-solid-svg-icons'
import { fab, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import React, { Component } from 'react'

import { checkAuth } from '../../actions/authentication'
import WelcomePage from '../Welcome/WelcomePage'

library.add(faUserCircle, faMusic, faComment, faWhatsapp, fab, faTimesCircle, faHeart, faSlidersH)

class App extends Component {
  componentDidMount = () => {
    this.props.checkAuth()
  }
  render() {
    return (
      <div className="App">
        <WelcomePage />
      </div>
    )
  }
}

export default connect(
  null,
  { checkAuth }
)(App)
