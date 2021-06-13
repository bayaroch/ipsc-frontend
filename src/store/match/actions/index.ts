import {
  matchServices,
  MatchPageMeta,
  GetMatchesResponse,
  MatchCreateParams,
  MatchResponse,
  MatchUpdateParams,
} from '@services/match.services'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { MATCH_ACTION_TYPE } from './types'

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
  MATCH_ACTION_TYPE.GET_MATCHES,
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
  MATCH_ACTION_TYPE.GET_MATCHES,
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
