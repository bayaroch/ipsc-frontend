import { createAsyncThunk } from '@reduxjs/toolkit'
import { TEAM_ACTION_TYPE } from './types'
import {
  TeamCreateParams,
  TeamJoinParams,
  TeamJoinResponse,
  TeamLeaveParams,
  TeamListParams,
  TeamListResponse,
  TeamResponse,
  teamServices,
} from '@services/team.service'

export const createTeam = createAsyncThunk<TeamResponse, TeamCreateParams>(
  TEAM_ACTION_TYPE.CREATE_TEAMS,
  async (params, { rejectWithValue }) => {
    try {
      const res = await teamServices.teamCreate(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const editTeam = createAsyncThunk<TeamResponse, string>(
  TEAM_ACTION_TYPE.EDIT_TEAMS,
  async (params, { rejectWithValue }) => {
    try {
      const res = await teamServices.teamEdit(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const joinTeam = createAsyncThunk<TeamJoinResponse, TeamJoinParams>(
  TEAM_ACTION_TYPE.TEAM_JOIN,
  async (params, { rejectWithValue }) => {
    try {
      const res = await teamServices.teamJoin(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const leaveTeam = createAsyncThunk<void, TeamLeaveParams>(
  TEAM_ACTION_TYPE.TEAM_LEAVE,
  async (params, { rejectWithValue }) => {
    try {
      const res = await teamServices.teamLeave(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const deleteTeam = createAsyncThunk<any, string>(
  TEAM_ACTION_TYPE.DELETE_TEAMS,
  async (id, { rejectWithValue }) => {
    try {
      const res = await teamServices.teamDelete(id)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const listTeam = createAsyncThunk<TeamListResponse, TeamListParams>(
  TEAM_ACTION_TYPE.GET_TEAMS,
  async (params, { rejectWithValue }) => {
    try {
      const res = await teamServices.teamList(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)
