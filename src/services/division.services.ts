import api from './api'
import { URI } from '@constants/uri.constants'

export type DivisionPageMeta = {
  page: number
  per_page: number
  sort_column?: string
  sort_order?: 'ASC' | 'DESC'
}

export type DivisionPaginationMeta = {
  per_page: number
  total_pages: number
  total_objects: number
}

export type MetaPagination = {
  pagination: DivisionPaginationMeta
}

export type DivisionItem = {
  id: number
  shorthand: string
  name: string
  remark: null | string
}
export type GetDivisionResponse = {
  data: Array<DivisionItem>
  status: string
  version: string
  meta: MetaPagination
}

export type DivisionCreateParams = {
  shorthand: string
  name: string
  remark: null | string
}

export type DivisionCreateResponse = {
  data: DivisionItem
  status: string
  version: string
}

export type ProfileResponse = {
  data: DivisionItem
  status: string
  version: string
}

export type DivisionUpdateParams = {
  id: number
  data: {
    shorthand: string
    name: string
    remark: null | string
  }
}

export const divisionServices = {
  allDivisions: async (meta: DivisionPageMeta): Promise<GetDivisionResponse> => {
    const { data } = await api.get<GetDivisionResponse>(
      `${URI.DIVISIONS}?page=${meta.page}&per_page=${meta.per_page}`
    )
    return data
  },
  createDivision: async (params: DivisionCreateParams): Promise<DivisionCreateResponse> => {
    const { data } = await api.post<DivisionCreateResponse>(URI.DIVISIONS, params)
    return data
  },
  updateDivision: async (params: DivisionUpdateParams): Promise<DivisionCreateResponse> => {
    const { data } = await api.patch<DivisionCreateResponse>(
      `${URI.DIVISIONS}/${params.id}`,
      params.data
    )
    return data
  },
}
