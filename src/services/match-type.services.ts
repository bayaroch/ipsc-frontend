import api from './api'
import { URI } from '@constants/uri.constants'

export type MatchTypePageMeta = {
  page: number
  per_page: number
  sort_column?: string
  sort_order?: 'ASC' | 'DESC'
}

export type MatchTypePaginationMeta = {
  per_page: number
  total_pages: number
  total_objects: number
}

export type MetaPagination = {
  pagination: MatchTypePaginationMeta
}

export type MatchTypeItem = {
  id: number
  shorthand: string
  name: string
  remark: null | string
}
export type GetMatchTypeResponse = {
  data: Array<MatchTypeItem>
  status: string
  version: string
  meta: MetaPagination
}

export type MatchTypeCreateParams = {
  shorthand: string
  name: string
  remark: null | string
}

export type MatchTypeCreateResponse = {
  data: MatchTypeItem
  status: string
  version: string
}

export type ProfileResponse = {
  data: MatchTypeItem
  status: string
  version: string
}

export type MatchTypeUpdateParams = {
  id: number
  data: {
    shorthand: string
    name: string
    remark: null | string
  }
}

export const matchTypeServices = {
  allMatchTypes: async (meta: MatchTypePageMeta): Promise<GetMatchTypeResponse> => {
    const { data } = await api.get<GetMatchTypeResponse>(
      `${URI.MATCHTYPES}?page=${meta.page}&per_page=${meta.per_page}`
    )
    return data
  },
  createMatchType: async (params: MatchTypeCreateParams): Promise<MatchTypeCreateResponse> => {
    const { data } = await api.post<MatchTypeCreateResponse>(URI.MATCHTYPES, params)
    return data
  },
  updateMatchType: async (params: MatchTypeUpdateParams): Promise<MatchTypeCreateResponse> => {
    const { data } = await api.patch<MatchTypeCreateResponse>(
      `${URI.MATCHTYPES}/${params.id}`,
      params.data
    )
    return data
  },
}
