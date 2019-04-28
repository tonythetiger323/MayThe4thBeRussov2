import { CHANGE_IS_AUTHENTICATED } from '../constants/action-types'

const initialState = {
  users: []
}

export const rootReducer: any = (state: any = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_IS_AUTHENTICATED:
      console.log(action.payload)
      return Object.assign({}, state, {
        users: state.users.concat(action.payload)
      });
    default:
      return state;
  }
}