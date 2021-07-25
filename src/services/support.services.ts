import api from './api'
import { URI } from '@constants/uri.constants'

export type SupportResponse = {
  data: Array<SupportItem>
  status: string
  version: string
}

export type SupportItem = {
  id: number
  shorthand: string
  name: string
  remark: null | string
}

export const supportServices = {
  getBadges: async (): Promise<SupportResponse> => {
    const { data } = await api.get<SupportResponse>(`${URI.BADGES}`)
    return data
  },
  getDivisions: async (): Promise<SupportResponse> => {
    const { data } = await api.get<SupportResponse>(`${URI.DIVISIONS}`)
    return data
  },
  getClass: async (): Promise<SupportResponse> => {
    const { data } = await api.get<SupportResponse>(`${URI.CLASS}`)
    return data
  },
}
