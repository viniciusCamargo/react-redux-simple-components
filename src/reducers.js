import { combineReducers } from 'redux'
import inputs from './components/Input/InputReducer'
import checkboxes from './components/Checkbox/CheckboxReducer'
import selects from './components/Select/SelectReducer'
import radios from './components/Radio/RadioReducer'

const myComponents = combineReducers({
  inputs,
  checkboxes,
  selects,
  radios
})

export default myComponents
