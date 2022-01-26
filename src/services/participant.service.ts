import api from './api'
import { URI } from '@constants/uri.constants'
import { UserData } from './auth.services'

export type ParticipantsItem = {
  id: number
  match_id: number
  user_id: number
  division_id: number
  category_id: number
  is_verified: boolean | number
  class_id: number
  is_ro: boolean
  remark?: string | null
  user: UserData
}

export type ParticipantsResponse = {
  data: ParticipantsItem[]
  status: string
  version: string
}

export interface ParticipantsParams {
  id: number
}

export const participantsServices = {
  participants: async (
    params: ParticipantsParams
  ): Promise<ParticipantsResponse> => {
    const { data } = await api.get<ParticipantsResponse>(URI.PARTICIPANT, {
      params: params,
    })
    return data
  },
}
