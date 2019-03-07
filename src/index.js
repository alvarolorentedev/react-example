import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App';

const target = document.querySelector('#root')

render(
  <Provider store={store}>
      <div>
        <App />
      </div>
  </Provider>,
  target
)
