import { put, call } from 'redux-saga/effects'
import API from '../../utils/API'

import * as types from '../actions'
import { AxiosResponse } from 'axios'

export function* loginSaga(payload: any) {
  try {
    /* tslint:disable one-variable-per-declaration */
    const response: AxiosResponse = yield call(API.loginUser, payload);
    /* tslint:enable one-variable-per-declaration */
    yield [
      put({ type: types.LOGIN_USER_SUCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error})
  }
}
