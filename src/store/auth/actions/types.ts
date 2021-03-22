export enum AUTH_ACTION_TYPE {
  LOGIN_REQUEST = 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE = 'USERS_LOGIN_FAILURE',
  LOGOUT = 'LOGOUT',
}

export type UserLoginData = {
  usercode: string
  password: string
}

export type UserRegisterData = {
  email: string
  password: string
}

export interface UserAuthState {
  token: string
  refreshToken: string
  id: number
  firstLogin: boolean
  email: string
  nickname: string
  user_code: string
  updateStep: number
  avatar_url: string | null
  is_social: boolean
  sign_in_count: number
}

export type AuthAction = {
  type: AUTH_ACTION_TYPE
  payload?: any
}

export type AuthState = {
  authenticated: boolean
  user?: any
  token?: any
}

export type UserProfile = {}
