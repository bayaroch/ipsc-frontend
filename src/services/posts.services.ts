import api from './api'
import { URI } from '@constants/index'

export const postServices = {
  Posts: () => {
    return api.get(URI.POSTS)
  },
}
