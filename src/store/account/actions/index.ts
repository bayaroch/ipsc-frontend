import {
  accountServices,
  MemberPageMeta,
  GetMemberResponse,
  UserCreateResponse,
  UserCreateParams,
  UserUpdateParams,
  ProfileResponse,
  UserVerifyParams,
  VerifyResponse
} from '@services/account.services'
import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import {
  ACCOUNT_ACTION_TYPE,
  CLEAR_MEMBER_DATA,
  CLEAR_PROFILE_DATA,
} from './types'

export const getAllMembers = createAsyncThunk<
  GetMemberResponse,
  MemberPageMeta
>(ACCOUNT_ACTION_TYPE.GET_MEMBERS, async (matchParams, { rejectWithValue }) => {
  try {
    const res = await accountServices.allMembers(matchParams)
    return res
  } catch (error) {
    if (!error) {
      throw error
    }
    return rejectWithValue(error)
  }
})

export const createUser = createAsyncThunk<
  UserCreateResponse,
  UserCreateParams
>(ACCOUNT_ACTION_TYPE.CREATE_USER, async (params, { rejectWithValue }) => {
  try {
    const res = await accountServices.createUser(params)
    return res
  } catch (error) {
    if (!error) {
      throw error
    }
    return rejectWithValue(error)
  }
})

export const updateUser = createAsyncThunk<
  UserCreateResponse,
  UserUpdateParams
>(ACCOUNT_ACTION_TYPE.UPDATE_USER, async (params, { rejectWithValue }) => {
  try {
    const res = await accountServices.updateUser(params)
    return res
  } catch (error) {
    if (!error) {
      throw error
    }
    return rejectWithValue(error)
  }
})

export const profile = createAsyncThunk<ProfileResponse, string>(
  ACCOUNT_ACTION_TYPE.GET_PROFILE,
  async (params, { rejectWithValue }) => {
    try {
      const res = await accountServices.profile(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const resend = createAsyncThunk<VerifyResponse, string>(
  ACCOUNT_ACTION_TYPE.GET_RESEND,
  async (params, { rejectWithValue }) => {
    try {
      const res = await accountServices.resend(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const updateVerify = createAsyncThunk<
  VerifyResponse,
  UserVerifyParams
>(ACCOUNT_ACTION_TYPE.UPDATE_VERIFY, async (params, { rejectWithValue }) => {
  try {
    const res = await accountServices.verifyUser(params)
    return res
  } catch (error) {
    if (!error) {
      throw error
    }
    return rejectWithValue(error)
  }
})

export const clearMemberData = createAction(CLEAR_MEMBER_DATA)
export const clearProfileData = createAction(CLEAR_PROFILE_DATA)

export const initProfile = (params: string) => async (
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  dispatch: any
): Promise<any> => {
  Promise.resolve(dispatch(clearProfileData())).then(() => {
    dispatch(profile(params))
  })
}
