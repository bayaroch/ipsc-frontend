import {
  matchServices,
  MatchPageMeta,
  GetMatchesResponse,
  MatchCreateParams,
  MatchResponse,
  MatchUpdateParams,
  RegisterMatchParams,
  RegisterMatchResponse,
  UpdateMatchParams,
  MatchDeleteResponse,
  MatchFileResponse,
  RegisterPublicMatchParams,
  RankCombinedResponse,
} from '@services/match.services'
import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { MATCH_ACTION_TYPE, CLEAR_MATCH_DATA } from './types'
import { squadJoin } from '@store/squads/actions'
import { SquadJoinParams } from '@services/squad.services'

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

export const deleteMatch = createAsyncThunk<MatchDeleteResponse, number>(
  MATCH_ACTION_TYPE.DELETE_MATCH,
  async (params, { rejectWithValue }) => {
    try {
      await matchServices.deleteMatch(params)
      const data = {
        data: params,
        status: 'success',
      }
      return data
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
  UpdateMatchParams
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

export const ranksByDivisionList = createAsyncThunk<RankCombinedResponse, void>(
  MATCH_ACTION_TYPE.RANKS_BY_DIVISION,
  async (_, { rejectWithValue }) => {
    try {
      const res = await matchServices.ranksByTop40()
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
export const clearRankData = createAction(MATCH_ACTION_TYPE.CLEAR_RANK_DATA)

export const fetchRanks = () => async (
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  dispatch: any
): Promise<any> => {
  Promise.resolve(dispatch(clearRankData())).then(() => {
    dispatch(ranksByDivisionList())
  })
}

export const registerThenSquadJoin = (
  params: RegisterMatchParams,
  squadParams: SquadJoinParams
) => async (
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  dispatch: any
): Promise<any> => {
  Promise.resolve(dispatch(registerMatch(params))).then(() => {
    dispatch(squadJoin(squadParams))
  })
}

export const getAllPublicMatches = createAsyncThunk<
  GetMatchesResponse,
  MatchPageMeta
>(MATCH_ACTION_TYPE.GET_PUBLIC_MATCHES, async (params, { rejectWithValue }) => {
  try {
    const res = await matchServices.fetchPublicMatch(params)
    return res
  } catch (error) {
    if (!error) {
      throw error
    }
    return rejectWithValue(error)
  }
})

export const getMatchFileList = createAsyncThunk<MatchFileResponse, string>(
  MATCH_ACTION_TYPE.MATCH_HTML,
  async (params, { rejectWithValue }) => {
    try {
      const res = await matchServices.getHTMLFiles(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const registerPublicMatch = createAsyncThunk<
  any,
  RegisterPublicMatchParams
>(
  MATCH_ACTION_TYPE.REGISTER_PUBLIC_MATCH,
  async (params, { rejectWithValue }) => {
    try {
      const res = await matchServices.registerPublicMatch(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)
