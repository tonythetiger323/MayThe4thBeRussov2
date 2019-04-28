import { CHANGE_IS_AUTHENTICATED } from '../constants/action-types'

export const changeIsAuthenticated = (payload: string) => {
      return { type: CHANGE_IS_AUTHENTICATED, payload }
}