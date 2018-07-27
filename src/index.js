import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import AppRouter from './routes'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'
import './firebase/settings.js'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
