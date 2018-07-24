import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppRouter from './routes'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import {Provider} from "react-redux"

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
