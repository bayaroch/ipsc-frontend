import api from './api'
import { URI } from '@constants/uri.constants'
import { UserLoginData } from '@store/auth/actions/types'

export const authServices = {
  login: (data: UserLoginData) => {
    return api.post(URI.LOGIN, data)
  },
}
