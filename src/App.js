import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import SwipeContainer from './components/Swipe/SwipeContainer';
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <SwipeContainer />
      </div>
      </Provider>
    );
  }
}

export default App;
