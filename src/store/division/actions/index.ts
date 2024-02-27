import {
  divisionServices,
  DivisionPageMeta,
  GetDivisionResponse,
  DivisionCreateResponse,
  DivisionCreateParams,
  DivisionUpdateParams,
} from '@services/division.services'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  DIVISION_ACTION_TYPE,
} from './types'

export const getAllDivisions = createAsyncThunk<
  GetDivisionResponse,
  DivisionPageMeta
>(DIVISION_ACTION_TYPE.GET_DIVISIONS, async (matchParams, { rejectWithValue }) => {
  try {
    const res = await divisionServices.allDivisions(matchParams)
    return res
  } catch (error) {
    if (!error) {
      throw error
    }
    return rejectWithValue(error)
  }
})

export const createDivision = createAsyncThunk<
  DivisionCreateResponse,
  DivisionCreateParams
>(DIVISION_ACTION_TYPE.CREATE_DIVISION, async (params, { rejectWithValue }) => {
  try {
    const res = await divisionServices.createDivision(params)
    return res
  } catch (error) {
    if (!error) {
      throw error
    }
    return rejectWithValue(error)
  }
})

export const updateDivision = createAsyncThunk<
  DivisionCreateResponse,
  DivisionUpdateParams
>(DIVISION_ACTION_TYPE.UPDATE_DIVISION, async (params, { rejectWithValue }) => {
  try {
    const res = await divisionServices.updateDivision(params)
    return res
  } catch (error) {
    if (!error) {
      throw error
    }
    return rejectWithValue(error)
  }
})
