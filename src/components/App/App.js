import React, { Component } from 'react'
import './styles/App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faMusic, faComment, faTimesCircle, faHeart, faSlidersH} from '@fortawesome/free-solid-svg-icons'
import { fab, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {Link} from "react-router-dom"

library.add(faUserCircle, faMusic, faComment, faWhatsapp, fab, faTimesCircle, faHeart, faSlidersH)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Knakworst</h1>
        Welcome User! <br/>
        <Link to={'swipe'}>Start Swiping</Link>
      </div>
    )
  }
}

export default App
