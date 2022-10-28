import api from './api'
import { URI } from '@constants/uri.constants'
import { UserData } from './auth.services'
import { TeamItem } from './team.service'

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
  team?: TeamItem
}

export type ParticipantsResponse = {
  data: ParticipantsItem[]
  status: string
  version: string
}

export interface ParticipantsParams {
  id: number
}

export type StatItem = Array<string>

export type ParticipantsStatResponse = {
  data: Array<StatItem>
  status: string
  version: string
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

  participantsStat: async (id: string): Promise<ParticipantsStatResponse> => {
    const { data } = await api.get<ParticipantsStatResponse>(
      URI.PARTICIPANT_STAT.replace(/:id/gi, id)
    )
    return data
  },

  deleteParticipants: async (id: string): Promise<any> => {
    const { data } = await api.delete<ParticipantsStatResponse>(
      `${URI.PARTICIPANT}/${id}`
    )
    return data
  },
}
