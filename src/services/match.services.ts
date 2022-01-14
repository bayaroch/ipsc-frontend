import api from './api'
import { URI } from '@constants/uri.constants'
import { MatchItem } from '@store/match/actions/types'
import { UserData } from './auth.services'

export type MatchPageMeta = {
  page: number
  per_page: number
  sort_column?: string
  sort_order?: 'ASC' | 'DESC'
}

export type MatchCreateParams = {
  name: string
  match_start: string
  match_end: string
  registration_start: string
  registration_end: string
  lvl: number
  point_multiplier: number
  stage_number?: number
  tax?: number
  tax_info?: string
  min_point?: string
  additional_info?: string
  sponsor_info?: string
  per_squad: number
  is_public: number
  status: number
  last_modified_by?: number
}

export type matchParams = {
  id: number
}

export type MatchUpdateParams = {
  data: {
    name: string
    match_start: string
    match_end: string
    registration_start: string
    registration_end: string
    lvl: number
    point_multiplier: number
    stage_number?: number
    tax?: number
    tax_info?: string
    min_point?: string
    additional_info?: string
    sponsor_info?: string
    per_squad: number
    is_public: number
    status: number
    last_modified_by?: number
  }
  id: string
}

export type MatchResponse = {
  data: MatchItem
  status: string
  version: string
}

export type MetaPagination = {
  pagination: MatchPaginationMeta
}

export type MatchPaginationMeta = {
  per_page: number
  total_pages: number
  total_objects: number
}

export type GetMatchesResponse = {
  data: Array<MatchItem>
  status: string
  version: string
  meta: MetaPagination
}

export type RegisterMatchParams = {
  match_id: number
  user_id: number
  division_id: number
  category_id: number
  class_id: number
  is_ro: number
  remark?: string | null
}

export type UpdateMatchParams = {
  data: RegisterMatchParams
  id: number
}

export type RegisterMatchResponse = {
  data: RegisterMatchData
  status: string
  version: string
}

export type RegisterMatchData = {
  id: number
  match_id: number
  user_id: number
  division_id: number
  category_id: number
  class_id: number
  is_ro: boolean
  remark?: string | null
}

export type ParticipantsItem = {
  id: number
  match_id: number
  user_id: number
  division_id: number
  category_id: number
  class_id: number
  is_ro: boolean
  remark?: string | null
  user: UserData
}

export type MatchDeleteResponse = {
  data: number
  status: string
}

export const matchServices = {
  createMatch: async (params: MatchCreateParams): Promise<MatchResponse> => {
    const { data } = await api.post<MatchResponse>(URI.MATCH, params)
    return data
  },

  updateMatch: async (params: MatchUpdateParams): Promise<MatchResponse> => {
    const { data } = await api.patch<MatchResponse>(
      `${URI.MATCH}/${params.id}`,
      params.data
    )
    return data
  },

  deleteMatch: async (id: number): Promise<MatchDeleteResponse> => {
    const { data } = await api.delete<MatchDeleteResponse>(`${URI.MATCH}/${id}`)
    return data
  },

  getAllMatches: async (meta: MatchPageMeta): Promise<GetMatchesResponse> => {
    const { data } = await api.get<GetMatchesResponse>(
      `${URI.MATCH}?page=${meta.page}&per_page=${meta.per_page}`
    )
    return data
  },

  getMatch: async (id: string): Promise<MatchResponse> => {
    const { data } = await api.get<MatchResponse>(`${URI.MATCH}/${id}`)
    return data
  },

  registerMatch: async (
    params: RegisterMatchParams
  ): Promise<RegisterMatchResponse> => {
    const { data } = await api.post<RegisterMatchResponse>(
      URI.PARTICIPANT,
      params
    )
    return data
  },

  registerUpdateMatch: async (
    params: UpdateMatchParams
  ): Promise<RegisterMatchResponse> => {
    const { data } = await api.patch<RegisterMatchResponse>(
      `${URI.PARTICIPANT}/${params.id}`,
      params.data
    )
    return data
  },

  csvDownload: async (id: string): Promise<any> => {
    const res = await api.get<any>(URI.EXPORT.replace(/:id/gi, id))
    return res
  },
}
