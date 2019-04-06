import * as types from '../actions';
import { LoginState, LoginAction } from '../../types'

const defaultState: LoginState = {
  user: undefined
}

export default function(state: LoginState = defaultState, action: LoginAction<any>) {
  const response = action.response;

  switch(action.type) {
    case types.LOGIN_USER_SUCESS:
      return { ...state, response };
    case types.LOGIN_USER_ERROR:
      return { ...state, response }
    default:
      return state
  }
};
