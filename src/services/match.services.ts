import api from './api'
import { URI } from '@constants/uri.constants'
import { MatchItem } from '@store/match/actions/types'
import { UserData } from './auth.services'
import { SupportItem } from './support.services'
import { FileWithPath } from 'react-dropzone'

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
  match_id?: number
  user_id?: number
  division_id?: number
  category_id?: number
  class_id?: number
  is_ro?: number
  is_verified?: number | boolean
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
  is_verified: boolean | number
  user: UserData
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
  is_verified: boolean | number
  user: UserData
}

export type ScoreItem = {
  categories: string
  classname: string
  division: SupportItem
  division_id: number
  dq: boolean
  exclude_flag: boolean
  id: number
  match_id: number
  percent: number
  pf: string
  pts: number
  user: UserData
  user_id: number
}

export type MatchDeleteResponse = {
  data: number
  status: string
}

export type ImportParams = {
  match_html: FileWithPath
  rts: 60
  match_id?: number | string
  exclude_codes?: string
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

  importMatch: async (params: ImportParams): Promise<any> => {
    const formData = new FormData()
    formData.append('match_html', params.match_html)
    formData.append('rts', '60')
    formData.append('match_id', String(params.match_id))
    if (params.exclude_codes) {
      formData.append('exclude_codes', params.exclude_codes)
    }

    const res = await api.post(URI.MATCH_SCORE, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return res
  },
}
