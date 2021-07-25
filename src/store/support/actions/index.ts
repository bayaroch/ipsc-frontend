import { createAsyncThunk } from '@reduxjs/toolkit'
import { SUPPORT_ACTION_TYPE } from './types'
import { SupportResponse, supportServices } from '@services/support.services'

export const getBadges = createAsyncThunk<SupportResponse>(
  SUPPORT_ACTION_TYPE.GET_BADGES,
  async (_, { rejectWithValue }) => {
    try {
      const res = await supportServices.getBadges()
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const getDivisions = createAsyncThunk<SupportResponse>(
  SUPPORT_ACTION_TYPE.GET_DIVISIONS,
  async (_, { rejectWithValue }) => {
    try {
      const res = await supportServices.getDivisions()
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const getClass = createAsyncThunk<SupportResponse>(
  SUPPORT_ACTION_TYPE.GET_CLASS,
  async (_, { rejectWithValue }) => {
    try {
      const res = await supportServices.getClass()
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)
