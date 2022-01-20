import api from './api'
import { StoreType } from '../store/store'
import { AxiosRequestConfig } from 'axios'

export const authorizationProvider = (store: StoreType): void => {
  api.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      const { auth } = store.getState()
      const user = auth.user
      if (user) {
        const token = `Bearer ${auth.token}`
        if (token) {
          if (config.headers === undefined) {
            config.headers = {}
          }
          config.headers.Authorization = `${token}`
        }
      }
      return config
    },
    (error) => Promise.reject(error)
  )
  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}
