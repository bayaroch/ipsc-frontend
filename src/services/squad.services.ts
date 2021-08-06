import api from './api'
import { URI } from '@constants/uri.constants'

export type SquadListResponse = {
  data: Array<SquadListData>
  status: string
  version: string
}

export type SquadListData = {
  id: number
  match_id: number
  name: string
  time_start: string
  time_end: string
  remark: string | null
  squad_members: Array<SquadListMembers>
}

export type SquadListMembers = {
  id: number
  squad_id: number
  user_id: number
  is_rm: boolean
  is_ro: boolean
  notify_squad_id?: null | number
}

export type SquadCreateParams = {
  match_id: number
  name: string
  time_start: string
  time_end: string
  remark: null | string
}

export type SquadResponse = {
  data: SquadResponseData
  status: string
  version: string
}

export type SquadResponseData = {
  id: number
  match_id: number
  name: string
  time_start: string
  time_end: string
  remark: string | null
  squad_members: Array<SquadListMembers>
}

export type SquadUpdateParams = {
  data: SquadCreateParams
  id: number
}

export type DeleteResponse = {
  status: string
  data: number
}

export const squadServices = {
  getAllSquads: async (id: string): Promise<SquadListResponse> => {
    const { data } = await api.get<SquadListResponse>(`${URI.SQUADS}?id=${id}`)
    return data
  },
  createSquads: async (params: SquadCreateParams): Promise<SquadResponse> => {
    const { data } = await api.post<SquadResponse>(URI.SQUADS, params)
    return data
  },
  updateSquads: async (params: SquadUpdateParams): Promise<SquadResponse> => {
    const { data } = await api.patch<SquadResponse>(
      `${URI.SQUADS}/${params.id}`,
      params.data
    )
    return data
  },
  deleteSquads: async (id: number): Promise<DeleteResponse> => {
    const { data } = await api.delete<DeleteResponse>(`${URI.SQUADS}/${id}`)
    console.log('at service', data)
    return data
  },
}
