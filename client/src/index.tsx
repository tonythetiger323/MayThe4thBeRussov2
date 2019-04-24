import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <SnackbarProvider>
        <Router>
          <App />
        </Router>
      </SnackbarProvider>,
  document.getElementById('root')
);
registerServiceWorker();
