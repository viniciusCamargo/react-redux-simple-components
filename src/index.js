import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import configureStore from './configureStore'
import App from './components/App'

const store = configureStore()

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  </Provider>
)

render(
  <Root store={store} />,
  document.getElementById('root')
)
