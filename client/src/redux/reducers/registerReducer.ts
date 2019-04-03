import * as types from '../actions'
import { RegisterState, RegisterAction } from '../../types'

const defaultState: RegisterState = {
  user: undefined
}

export default function(
  state: RegisterState = defaultState,
  action: RegisterAction<any>
) {
  const response = action.response

  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return { ...state, response }
    case types.REGISTER_USER_ERROR:
      return { ...state, response }
    default:
      return state
  }
}
