import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

const enhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(reducers, enhancer)

export default store
