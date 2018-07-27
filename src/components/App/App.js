import React, { Component } from 'react'
import './styles/App.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faMusic, faComment, faTimesCircle, faHeart, faSlidersH, faUserEdit, faSpinner, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { fab, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"

library.add(faUserCircle, faMusic, faComment, faWhatsapp, fab, faTimesCircle, faHeart, faSlidersH, faUserEdit, faSpinner, faMapMarkerAlt)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Knakworst</h1>
        <FontAwesomeIcon icon={'spinner'} spin size={'3x'}/>
        <Link to={'swipe'}><button>Swiping</button></Link>
        <Link to={'/signup'}><button>Sign Up</button></Link>
      </div>
    )
  }
}

export default App
