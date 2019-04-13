import * as types from './index';

export const loginUserAction = (user: any) => {
  return {
    type: types.LOGIN_USER,
    user
  }
}