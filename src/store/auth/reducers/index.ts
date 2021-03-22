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
      return {
        ...state,
        authenticated: true,
        token: action.payload.token,
        user: action.payload.user,
      }
    default:
      return state
  }
}
