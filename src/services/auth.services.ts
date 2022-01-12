import api from './api'
import { URI } from '@constants/uri.constants'
import { UserLoginData } from '@store/auth/actions/types'

export type LoginResponse = {
  data: LoginData
  status: string
  version: string
}

export type LoginData = {
  user: UserData
  token: string
}

export type UserData = {
  id: number
  usercode: string
  firstname?: string
  lastname?: string
  email: string
  birthday?: string
  usertype?: number
  gender?: number
  enabled?: boolean
  class_id?: number
  mo_badge?: null | number
  img_url?: string
}

export const authServices = {
  login: async (params: UserLoginData): Promise<LoginResponse> => {
    const { data } = await api.post<LoginResponse>(URI.LOGIN, params)
    return data
  },
}
