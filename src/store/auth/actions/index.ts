import { authServices, LoginResponse } from '@services/auth.services'
import { UserLoginData, AUTH_ACTION_TYPE } from './types'
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
