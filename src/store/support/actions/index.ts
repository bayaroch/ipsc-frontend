import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { SUPPORT_ACTION_TYPE } from './types'
import { SupportResponse, supportServices } from '@services/support.services'
import { AlertColor } from '@mui/material/Alert'
import { contentServices } from '@services/public.service'

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

export const fetchWordpress = createAsyncThunk<any, string>(
  SUPPORT_ACTION_TYPE.GET_WORDPRESS,
  async (id, { rejectWithValue }) => {
    try {
      const res = await contentServices.getPageContent(id)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const commonData = () => async (
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  dispatch: any
): Promise<any> => {
  Promise.resolve(dispatch(getClass())).then(() => {
    dispatch(getDivisions()).then(() => {
      dispatch(getBadges())
    })
  })
}

export type toastParams = {
  message: string
  severity?: AlertColor
}

export const addToast = createAction<toastParams>('toast/addToast')
export const removeToast = createAction<string>('toast/removeToast')
export const cleanToasts = createAction('toast/cleanToasts')
