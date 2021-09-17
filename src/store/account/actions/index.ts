import {
  accountServices,
  MemberPageMeta,
  GetMemberResponse,
  UserCreateResponse,
  UserCreateParams,
} from '@services/account.services'
import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { ACCOUNT_ACTION_TYPE, CLEAR_MEMBER_DATA } from './types'

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

export const clearMemberData = createAction(CLEAR_MEMBER_DATA)
