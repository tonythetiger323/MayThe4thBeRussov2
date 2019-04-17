import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import login from './loginReducer';

const rootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  login
});

export default rootReducer;