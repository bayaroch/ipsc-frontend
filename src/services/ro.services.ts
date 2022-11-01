import api from './api'
import { URI } from '@constants/uri.constants'
import { MemberItem } from './account.services'

export type RoJoinParams = {
  match_id: number
  user_id: number
}

export type RoItem = {
  id: number
  match_id: number
  user_id: number
  is_verified: boolean
  created_at: string
  user: MemberItem
}

export type RoUpdateParams = {
  id: number
  is_verified: boolean
}

export type RoJoinResponse = {
  data: RoItem
}

export type RoListResponse = {
  data: RoItem[]
}

export type RoListParams = {
  id: number
}

export const roServices = {
  roJoin: async (params: RoJoinParams): Promise<RoJoinResponse> => {
    const { data } = await api.post<RoJoinResponse>(URI.RO, params)
    return data
  },
  roUpdate: async (params: RoUpdateParams): Promise<RoJoinResponse> => {
    const { data } = await api.patch<RoJoinResponse>(`${URI.RO}/${params.id}`, {
      is_verified: params.is_verified,
    })
    return data
  },
  roList: async (params: RoListParams): Promise<RoListResponse> => {
    const { data } = await api.get<RoListResponse>(URI.RO, { params: params })
    return data
  },
  roDelete: async (params: number): Promise<RoListResponse> => {
    const { data } = await api.delete<RoListResponse>(`${URI.RO}/${params}`)
    return data
  },
}
