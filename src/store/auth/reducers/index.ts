import { AUTH_ACTION_TYPE, AuthAction, AuthState } from '../actions/types'

export const INITIAL_STATE: AuthState = {
  authenticated: false,
  user: undefined,
  token: undefined,
}

export const authReducer = function (
  state = INITIAL_STATE,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AUTH_ACTION_TYPE.LOGIN_SUCCESS:
      console.log('---->', action)
      return {
        ...state,
        authenticated: true,
        token: action.user.data.token,
        user: action.user.data.user,
      }
    default:
      return state
  }
}
