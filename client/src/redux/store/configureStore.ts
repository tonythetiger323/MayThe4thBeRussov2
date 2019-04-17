import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../reducers';
import rootSaga from '../sagas';

export const history = createBrowserHistory();

export default function configureStore(preloadedState?: any) {
  const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [routerMiddleware(history), sagaMiddleware]
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(...middleware)
    )
  )
  
  sagaMiddleware.run(rootSaga)

  return store
}
