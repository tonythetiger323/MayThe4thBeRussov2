import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import { SnackbarProvider } from 'notistack'
import { Router } from 'react-router-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import * as Sentry from '@sentry/browser'
import ErrorBoundary from './Components/ErrorBoundary'
import { Provider } from 'react-redux'
import store from './redux/store'
import history from './history'

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN
})

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <SnackbarProvider>
        <Router history={history}>
          <App />
        </Router>
      </SnackbarProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
