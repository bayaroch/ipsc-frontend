import { UserData } from '@services/auth.services'

export enum AUTH_ACTION_TYPE {
  LOGIN = 'auth/login',
  LOGOUT = 'auth/logout',
}

export type UserLoginData = {
  usercode: string
  password: string
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
}

export type UserProfile = {}
