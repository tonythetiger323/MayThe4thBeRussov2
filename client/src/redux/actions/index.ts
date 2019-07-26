import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from '../constants'
import API from '../../utils/API'

const requestLogin = (userData: any) => {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    userData
  }
}

const receiveLogin = (user: any) => {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user: user.user,
    accessToken: user.access_token
  }
}

const loginError = () => {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false
  }
}

export function loginUser(userData: any) {
  return async (dispatch: any) => {
    dispatch(requestLogin(userData))

    try {
      const res = await API.loginUser(userData)
      console.log(res)
      sessionStorage.setItem('access_token', res.data.access_token)
      dispatch(receiveLogin(res.data))
    } catch (error) {
      dispatch(loginError())
      console.log(error)
    }
  }
}

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export function logoutUser() {
  return (dispatch: any) => {
    dispatch(requestLogout())
    sessionStorage.removeItem('access_token')
    dispatch(receiveLogout)
  }
}
