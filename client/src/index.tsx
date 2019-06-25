import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import * as Sentry from '@sentry/browser'
import ErrorBoundary from './Components/ErrorBoundary'

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN
})

ReactDOM.render(
  <ErrorBoundary>
    <SnackbarProvider>
      <Router>
        <App />
      </Router>
    </SnackbarProvider>
  </ErrorBoundary>,
  document.getElementById('root')
)
registerServiceWorker()
