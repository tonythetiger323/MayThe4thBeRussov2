import React from 'react';
import ReactDOM from 'react-dom';
import configureStore, { history } from './redux/store/configureStore'
import { Provider } from 'react-redux';
import { ConnectedRouter} from 'connected-react-router'
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <SnackbarProvider>
        <Router>
          <App />
        </Router>
      </SnackbarProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
