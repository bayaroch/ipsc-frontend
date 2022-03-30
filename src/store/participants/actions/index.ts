import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { PARTICIPANTS_ACTION_TYPE, CLEAR_PARTICIPANTS_DATA } from './types'
import {
  participantsServices,
  ParticipantsResponse,
  ParticipantsParams,
  ParticipantsStatResponse,
} from '@services/participant.service'

export const getParticipants = createAsyncThunk<
  ParticipantsResponse,
  ParticipantsParams
>(
  PARTICIPANTS_ACTION_TYPE.PARTICIPANTS,
  async (params, { rejectWithValue }) => {
    try {
      const res = await participantsServices.participants(params)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const getParticipantsStat = createAsyncThunk<
  ParticipantsStatResponse,
  string
>(
  PARTICIPANTS_ACTION_TYPE.PARTICIPANTS_STAT,
  async (id, { rejectWithValue }) => {
    try {
      const res = await participantsServices.participantsStat(id)
      return res
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error)
    }
  }
)

export const clearParticipantsData = createAction(CLEAR_PARTICIPANTS_DATA)
