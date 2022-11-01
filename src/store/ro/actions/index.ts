import { createAsyncThunk } from '@reduxjs/toolkit'
import { RO_ACTION_TYPE } from './types'
import {
  RoJoinParams,
  RoJoinResponse,
  RoListParams,
  RoListResponse,
  roServices,
  RoUpdateParams,
} from '@services/ro.services'

export const roJoin = createAsyncThunk<RoJoinResponse, RoJoinParams>(
  RO_ACTION_TYPE.JOIN_RO,
  async (params, { rejectWithValue }) => {
    try {
      const res = await roServices.roJoin(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const roUpdate = createAsyncThunk<RoJoinResponse, RoUpdateParams>(
  RO_ACTION_TYPE.UPDATE_RO,
  async (params, { rejectWithValue }) => {
    try {
      const res = await roServices.roUpdate(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const roList = createAsyncThunk<RoListResponse, RoListParams>(
  RO_ACTION_TYPE.LIST_RO,
  async (params, { rejectWithValue }) => {
    try {
      const res = await roServices.roList(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const roDelete = createAsyncThunk<any, number>(
  RO_ACTION_TYPE.DELETE_RO,
  async (params, { rejectWithValue }) => {
    try {
      const res = await roServices.roDelete(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)
