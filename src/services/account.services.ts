import api from './api'
import { URI } from '@constants/uri.constants'
import { GENDER, USER_TYPE } from '@constants/user.constants'

export type MemberPageMeta = {
  page: number
  per_page: number
  sort_column?: string
  sort_order?: 'ASC' | 'DESC'
}

export type MemberPaginationMeta = {
  per_page: number
  total_pages: number
  total_objects: number
}

export type MetaPagination = {
  pagination: MemberPaginationMeta
}

export type MemberItem = {
  id: number
  usercode: string
  firstname: string
  lastname?: string
  email: string
  birthday: string
  usertype: number
  gender: GENDER
  enabled: boolean
  class_id: number
  mo_badge?: null | string
  img_url?: string
}
export type GetMemberResponse = {
  data: Array<MemberItem>
  status: string
  version: string
  meta: MetaPagination
}

export type UserCreateParams = {
  usercode: string
  password?: string
  firstname: string
  lastname: string
  email: string
  birthday?: string
  usertype?: USER_TYPE
  gender: GENDER
  enabled: boolean | number
  class_id: number
  img_url?: string
}

export type UserCreateResponse = {
  data: MemberItem
  status: string
  version: string
}

export type ProfileResponse = {
  data: MemberItem
  status: string
  version: string
}

export type UserUpdateParams = {
  id: number
  data: {
    usercode: string
    password?: string
    firstname: string
    lastname: string
    email: string
    birthday?: string
    usertype?: USER_TYPE
    gender: GENDER
    enabled: boolean | number
    class_id: number
    img_url?: string
  }
}

export const accountServices = {
  allMembers: async (meta: MemberPageMeta): Promise<GetMemberResponse> => {
    const { data } = await api.get<GetMemberResponse>(
      `${URI.ACCOUNT}?page=${meta.page}&per_page=${meta.per_page}`
    )
    return data
  },
  createUser: async (params: UserCreateParams): Promise<UserCreateResponse> => {
    const { data } = await api.post<UserCreateResponse>(URI.ACCOUNT, params)
    return data
  },
  updateUser: async (params: UserUpdateParams): Promise<UserCreateResponse> => {
    const { data } = await api.patch<UserCreateResponse>(
      `${URI.ACCOUNT}/${params.id}`,
      params.data
    )
    return data
  },
  profile: async (params: number): Promise<ProfileResponse> => {
    const { data } = await api.get<ProfileResponse>(`${URI.ACCOUNT}/${params}`)
    return data
  },
}
