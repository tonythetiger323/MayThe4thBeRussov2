import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './redux/store/configureStore'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider>
      <Router>
        <App />
      </Router>
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
