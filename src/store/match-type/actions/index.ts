import {
  matchTypeServices,
  MatchTypePageMeta,
  GetMatchTypeResponse,
  MatchTypeCreateResponse,
  MatchTypeCreateParams,
  MatchTypeUpdateParams,
} from '@services/match-type.services'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  MATCHTYPE_ACTION_TYPE,
} from './types'

export const getAllMatchTypes = createAsyncThunk<
  GetMatchTypeResponse,
  MatchTypePageMeta
>(MATCHTYPE_ACTION_TYPE.GET_MATCHTYPES, async (matchParams, { rejectWithValue }) => {
  try {
    const res = await matchTypeServices.allMatchTypes(matchParams)
    return res
  } catch (error) {
    if (!error) {
      throw error
    }
    return rejectWithValue(error)
  }
})

export const createMatchType = createAsyncThunk<
  MatchTypeCreateResponse,
  MatchTypeCreateParams
>(MATCHTYPE_ACTION_TYPE.CREATE_MATCHTYPE, async (params, { rejectWithValue }) => {
  try {
    const res = await matchTypeServices.createMatchType(params)
    return res
  } catch (error) {
    if (!error) {
      throw error
    }
    return rejectWithValue(error)
  }
})

export const updateMatchType = createAsyncThunk<
  MatchTypeCreateResponse,
  MatchTypeUpdateParams
>(MATCHTYPE_ACTION_TYPE.UPDATE_MATCHTYPE, async (params, { rejectWithValue }) => {
  try {
    const res = await matchTypeServices.updateMatchType(params)
    return res
  } catch (error) {
    if (!error) {
      throw error
    }
    return rejectWithValue(error)
  }
})
