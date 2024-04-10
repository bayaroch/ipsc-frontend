import { authServices, LoginResponse } from '@services/auth.services'
import { UserLoginData, AUTH_ACTION_TYPE, PwdResponse, PasswordForgotData, PasswordResetData } from './types'
import { createAsyncThunk, createAction } from '@reduxjs/toolkit'

export const login = createAsyncThunk<LoginResponse, UserLoginData>(
  AUTH_ACTION_TYPE.LOGIN,
  async (matchParams, { rejectWithValue }) => {
    try {
      const res = await authServices.login(matchParams)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const logOut = createAction(AUTH_ACTION_TYPE.LOGOUT)

export const forgot = createAsyncThunk<PwdResponse, PasswordForgotData>(
  AUTH_ACTION_TYPE.FORGOT,
  async (matchParams, { rejectWithValue }) => {
    try {
      const res = await authServices.forgotPassword(matchParams)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const reset = createAsyncThunk<PwdResponse, PasswordResetData>(
  AUTH_ACTION_TYPE.RESET,
  async (matchParams, { rejectWithValue }) => {
    try {
      const res = await authServices.resetPassword(matchParams)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const clearPwdMsg = createAction(AUTH_ACTION_TYPE.CLEAR_MSG)
