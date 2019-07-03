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
import { Security } from '@okta/okta-react'

const config = {
  issuer: 'https://dev-455482.okta.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: process.env.REACT_APP_OKTA_CLIENT_ID
}

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN
})

ReactDOM.render(
  <ErrorBoundary>
    <SnackbarProvider>
      <Router>
        <Security
          issuer={config.issuer}
          client_id={config.client_id}
          redirect_uri={config.redirect_uri}
        >
          <App />
        </Security>
      </Router>
    </SnackbarProvider>
  </ErrorBoundary>,
  document.getElementById('root')
)
registerServiceWorker()
