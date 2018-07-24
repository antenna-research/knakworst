import React, { Component } from 'react';
import './App.css';
import LandingPageContainer from "./components/Landing/LandingPageContainer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faMusic, faComment } from '@fortawesome/free-solid-svg-icons'

library.add(faUserCircle)
library.add(faMusic)
library.add(faComment)
class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPageContainer/>
      </div>
    );
  }
}

export default App;
