import { createStore } from 'redux'
import myComponents from './reducers'
import { loadState, saveState } from './localStorage'

const configureStore = () => {
  const persistedState = loadState()

  const store = createStore(
    myComponents,
    persistedState, // set a initial state
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

  console.log(store.getState())
  store.subscribe(() => {
    console.log(store.getState())
  })

  return store
}

export default configureStore
