import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import myComponents from './reducers'
import { loadState, saveState } from './localStorage'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger()
  middlewares.push(logger)
}

const configureStore = () => {
  const persistedState = loadState()

  const store = createStore(
    myComponents,
    persistedState, // set a initial state
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && // enable redux dev tools
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  store.subscribe(() => {
    saveState({
      inputs: store.getState().inputs,
      checkboxes: store.getState().checkboxes,
      selects: store.getState().selects,
      radios: store.getState().radios
    })
  })

  return store
}

export default configureStore
