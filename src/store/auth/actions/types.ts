import { UserData } from '@services/auth.services'

export enum AUTH_ACTION_TYPE {
  LOGIN = 'auth/login',
  LOGOUT = 'auth/logout',
  FORGOT = 'auth/forgoPassword',
  RESET = 'auth/resetPassword',
  CLEAR_MSG = 'auth/clearMsg',
}

export type UserLoginData = {
  usercode: string
  password: string
}

export type PasswordForgotData = {
  email: string
}

export type UserRegisterData = {
  email: string
  password: string
}

export type AuthAction = {
  type: AUTH_ACTION_TYPE
  user?: any
}

export type AuthState = {
  authenticated: boolean
  user?: UserData | undefined
  token?: string | undefined
  category: number | undefined
  pwdMsg: PwdItem | undefined
}

export type PasswordResetData = {
  token: string | undefined
  email: string | undefined
  password: string | undefined
  password_confirmation: string | undefined
}

export type PwdItem = {
  msg: string
  user?: UserData | undefined
}
export type PwdResponse = {
  data: PwdItem
  status: string
  version: string
}
