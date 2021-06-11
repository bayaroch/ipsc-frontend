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

export interface UserData {
  birthday?: string
  class_id: number
  email: string
  enabled: boolean
  firstname: string
  gender: number
  id: number
  lastname?: string
  mo_badge?: string | null
  usercode: string
  usertype: number
}

export type AuthAction = {
  type: AUTH_ACTION_TYPE
  user?: any
}

export type AuthState = {
  authenticated: boolean
  user?: UserData | undefined
  token?: string | undefined
}

export type UserProfile = {}
