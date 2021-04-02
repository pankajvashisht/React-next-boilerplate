import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './reducer'
import { isBrowser } from 'utils'

const composeEnhancer =
  (isBrowser && window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
)
