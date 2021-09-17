import {
  SquadCreateParams,
  SquadListResponse,
  SquadUpdateParams,
  squadServices,
  SquadResponse,
  DeleteResponse,
  SquadJoinParams,
  SquadJoinResponse,
  SquadChangeParams,
} from '@services/squad.services'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { SQUAD_ACTION_TYPE } from './types'

export const createSquad = createAsyncThunk<SquadResponse, SquadCreateParams>(
  SQUAD_ACTION_TYPE.CREATE_SQUAD,
  async (matchParams, { rejectWithValue }) => {
    try {
      const res = await squadServices.createSquads(matchParams)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const updateSquad = createAsyncThunk<SquadResponse, SquadUpdateParams>(
  SQUAD_ACTION_TYPE.UPDATE_SQUAD,
  async (matchUpdateParams, { rejectWithValue }) => {
    try {
      const res = await squadServices.updateSquads(matchUpdateParams)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const deleteSquads = createAsyncThunk<DeleteResponse, number>(
  SQUAD_ACTION_TYPE.DELETE_SQUAD,
  async (deleteParams, { rejectWithValue }) => {
    try {
      await squadServices.deleteSquads(deleteParams)
      const data = {
        data: deleteParams,
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

export const squadList = createAsyncThunk<SquadListResponse, string>(
  SQUAD_ACTION_TYPE.GET_SQUADS,
  async (id, { rejectWithValue }) => {
    try {
      const res = await squadServices.getAllSquads(id)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const squadJoin = createAsyncThunk<SquadJoinResponse, SquadJoinParams>(
  SQUAD_ACTION_TYPE.JOIN_SQUAD,
  async (params, { rejectWithValue }) => {
    try {
      const res = await squadServices.joinSquads(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const squadChange = createAsyncThunk<
  SquadJoinResponse,
  SquadChangeParams
>(SQUAD_ACTION_TYPE.CHANGE_SQUAD, async (params, { rejectWithValue }) => {
  try {
    const res = await squadServices.changeSquads(params)
    return res
  } catch (error) {
    if (!error) {
      throw error
    }
    return rejectWithValue(error)
  }
})
