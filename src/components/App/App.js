import React, { Component } from 'react'
import './styles/App.css'
import WelcomePage from "../Welcome/WelcomePage"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faMusic, faComment } from '@fortawesome/free-solid-svg-icons'

library.add(faUserCircle)
library.add(faMusic)
library.add(faComment)
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
