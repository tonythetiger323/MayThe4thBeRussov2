import { LOGIN_USER, LOGOUT_USER } from '../constants'

export const loginUser = (username: any) => {
  return {
    type: LOGIN_USER,
    isAuthenticated: true,
    user: username
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
    isAuthenticated: false,
    user: null
  }
}
