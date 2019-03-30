import { put, call } from 'redux-saga/effects';
import API from '../../utils/API'

import * as types from '../actions'

export function* registerSaga(payload: any) {
  try {
    const response = yield call(API.registerUser, payload);
    yield [
      put({ type: types.REGISTER_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}