import { LOGIN_USER, LOGOUT_USER } from '../constants'

const initialState = {
  isAuthenticated: false,
  user: null
}

export default function rootReducer(state = initialState, action: any) {
  console.log(action)
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, {
        isAuthenticated: true,
        user: action.user
      })
    case LOGOUT_USER:
      return Object.assign({}, state, {
        isAuthenticated: false,
        user: null
      })
    default:
      return state
  }
}
