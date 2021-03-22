import { authServices } from '@services/auth.services'
import { UserLoginData, AUTH_ACTION_TYPE } from './types'

export const authActions = {
  login: (data: UserLoginData) => {
    return (dispatch: Function) => {
      dispatch(authActionCreators.loginRequest())
      authServices.login(data).then(
        (user) => {
          dispatch(authActionCreators.loginSuccess(user.data))
          console.log(user)
        },
        (error) => {
          dispatch(authActionCreators.loginFailure(error))
        }
      )
    }
  },
}

export const authActionCreators = {
  loginRequest: () => ({
    type: AUTH_ACTION_TYPE.LOGIN_REQUEST,
  }),
  loginSuccess: (user: any) => ({
    type: AUTH_ACTION_TYPE.LOGIN_SUCCESS,
    user,
  }),
  loginFailure: (error: any) => ({
    type: AUTH_ACTION_TYPE.LOGIN_FAILURE,
    error,
  }),
  logout: () => ({
    type: AUTH_ACTION_TYPE.LOGOUT,
  }),
}
