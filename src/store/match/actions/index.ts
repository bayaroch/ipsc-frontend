import {
  matchServices,
  MatchPageMeta,
  GetMatchesResponse,
  MatchCreateParams,
  MatchResponse,
  MatchUpdateParams,
  RegisterMatchParams,
  RegisterMatchResponse,
} from '@services/match.services'
import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { MATCH_ACTION_TYPE, CLEAR_MATCH_DATA } from './types'

export const getAllMatches = createAsyncThunk<
  GetMatchesResponse,
  MatchPageMeta
>(MATCH_ACTION_TYPE.GET_MATCHES, async (matchParams, { rejectWithValue }) => {
  try {
    const res = await matchServices.getAllMatches(matchParams)
    return res
  } catch (error) {
    if (!error) {
      throw error
    }
    return rejectWithValue(error)
  }
})

export const createMatch = createAsyncThunk<MatchResponse, MatchCreateParams>(
  MATCH_ACTION_TYPE.CREATE_MATCH,
  async (matchParams, { rejectWithValue }) => {
    try {
      const res = await matchServices.createMatch(matchParams)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const updateMatch = createAsyncThunk<MatchResponse, MatchUpdateParams>(
  MATCH_ACTION_TYPE.UPDATE_MATCH,
  async (matchUpdateParams, { rejectWithValue }) => {
    try {
      const res = await matchServices.updateMatch(matchUpdateParams)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const getMatch = createAsyncThunk<MatchResponse, string>(
  MATCH_ACTION_TYPE.GET_MATCH,
  async (id, { rejectWithValue }) => {
    try {
      const res = await matchServices.getMatch(id)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const registerMatch = createAsyncThunk<
  RegisterMatchResponse,
  RegisterMatchParams
>(MATCH_ACTION_TYPE.REGISTER_MATCH, async (params, { rejectWithValue }) => {
  try {
    const res = await matchServices.registerMatch(params)
    return res
  } catch (error) {
    if (!error) {
      throw error
    }
    return rejectWithValue(error)
  }
})

export const updateRegisterMatch = createAsyncThunk<
  RegisterMatchResponse,
  RegisterMatchParams
>(
  MATCH_ACTION_TYPE.REGISTER_UPDATE_MATCH,
  async (params, { rejectWithValue }) => {
    try {
      const res = await matchServices.registerUpdateMatch(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const clearMatchData = createAction(CLEAR_MATCH_DATA)
