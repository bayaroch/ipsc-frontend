import api from './api'
import { URI } from '@constants/uri.constants'
import { MemberItem } from './account.services'

export type TeamCreateParams = {
  user_id: number
  name: string
  code: string
  division_id: number
}

export type TeamItem = {
  id: number
  name: string
  code: string
  user: MemberItem
  division: {
    id: number
    shorthand: string
    name: string
    remark: null | string
  }
  team_members: TeamMemberItem[]
}

export type TeamMemberItem = {
  id: number
  user: MemberItem
}

export type TeamResponse = {
  data: TeamItem
}

export type TeamListResponse = {
  data: TeamItem[]
}

export type TeamListParams = {
  match_id: string
  team_id?: string
  division_id?: string
}

export type TeamJoinParams = {
  code: string
  team_id: number
  user_id: number
}

export type TeamJoinResponse = {
  data: TeamMemberItem | string
}

export const teamServices = {
  teamCreate: async (params: TeamCreateParams): Promise<TeamResponse> => {
    const { data } = await api.post<TeamResponse>(URI.MATCH, params)
    return data
  },
  teamDelete: async (id: string): Promise<any> => {
    const { data } = await api.delete<any>(URI.TEAMS_EDIT.replace(/:id/gi, id))
    return data
  },
  teamEdit: async (id: string): Promise<TeamResponse> => {
    const { data } = await api.post<TeamResponse>(
      URI.TEAMS_EDIT.replace(/:id/gi, id)
    )
    return data
  },
  teamList: async (params: TeamListParams): Promise<TeamListResponse> => {
    const { data } = await api.get<TeamListResponse>(URI.TEAMS, {
      params: params,
    })
    return data
  },
  teamJoin: async (params: TeamJoinParams): Promise<TeamJoinResponse> => {
    const { data } = await api.post<TeamJoinResponse>(URI.TEAM_MEMBERS, params)
    return data
  },
}
