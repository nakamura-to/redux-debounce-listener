import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import debounceListener from 'redux-debounce-listener'
import reducer from '../reducers'

const logger = createLogger();
const finalCreateStore = compose(
  applyMiddleware(thunk, logger),
  debounceListener(50, { 'leading': true })
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
