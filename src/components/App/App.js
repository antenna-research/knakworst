import React, { Component } from 'react'
import './styles/App.css'
import WelcomePage from "../Welcome/WelcomePage"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faMusic, faComment, faTimesCircle, faHeart} from '@fortawesome/free-solid-svg-icons'
import { fab, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(faUserCircle, faMusic, faComment, faWhatsapp, fab, faTimesCircle, faHeart)

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomePage/>
      </div>
    )
  }
}

export default App
