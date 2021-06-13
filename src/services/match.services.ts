import api from './api'
import { URI } from '@constants/uri.constants'
import { MatchItem } from '@store/match/actions/types'

export type MatchPageMeta = {
  page: number
  per_page: number
}

export type MatchCreateParams = {
  name: string
  match_start: string
  match_end: string
  registration_start: string
  registration_end: string
  lvl: number
  point_multiplier: number
  stage_number: number
  tax?: number
  tax_info?: string
  min_point?: string
  additional_info?: string
  sponsor_info?: string
  per_squad: number
  is_public: number
  status: number
  last_modified_by: number
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
    stage_number: number
    tax?: number
    tax_info?: string
    min_point?: string
    additional_info?: string
    sponsor_info?: string
    per_squad: number
    is_public: number
    status: number
    last_modified_by: number
  }
  id: number
}

export type MatchResponse = {
  data: MatchItem
  status: string
  version: string
}

export type GetMatchesResponse = {
  data: Array<MatchItem>
  status: string
  version: string
}

export const matchServices = {
  createMatch: async (params: MatchCreateParams): Promise<MatchResponse> => {
    const { data } = await api.post<MatchResponse>(URI.MATCH, params)
    return data
  },

  updateMatch: async (params: MatchUpdateParams): Promise<MatchResponse> => {
    const { data } = await api.put<MatchResponse>(
      URI.MATCH.replace(/:id/gi, String(params.id)),
      params.data
    )
    return data
  },

  getAllMatches: async (meta: MatchPageMeta): Promise<GetMatchesResponse> => {
    const { data } = await api.get<GetMatchesResponse>(
      `${URI.MATCH}?page=${meta.page}&per_page=${meta.per_page}`
    )
    return data
  },
}
