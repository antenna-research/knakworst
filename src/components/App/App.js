import './styles/App.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  faUserCircle,
  faMusic,
  faComment,
  faTimesCircle,
  faHeart,
  faSlidersH,
  faUserEdit,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'
import { fab, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import React, { Component } from 'react'

import { checkAuth, fetchData, loginUser, resetDatabase } from '../../actions/authentication'

library.add(
  faUserCircle,
  faMusic,
  faComment,
  faWhatsapp,
  fab,
  faTimesCircle,
  faHeart,
  faSlidersH,
  faUserEdit,
  faSpinner
)

class App extends Component {
  componentDidMount = () => {
    console.log('DIDMOUNT')
    this.props.checkAuth()
  }
  render() {
    return (
      <div className="App">
        <h1>Knakworst</h1>
        <FontAwesomeIcon icon={'spinner'} spin size={'3x'} />
        <Link to={'swipe'}>
          <button>Swiping</button>
        </Link>
        <Link to={'/signup'}>
          <button>Sign Up</button>
        </Link>

        <button onClick={this.props.loginUser}>Login</button>
        <button onClick={this.props.fetchData}>Fetch Data</button>
        <button onClick={this.props.resetDatabase}>Reset Database</button>
      </div>
    )
  }
}

export default connect(
  null,
  { resetDatabase, checkAuth, loginUser, fetchData }
)(App)
