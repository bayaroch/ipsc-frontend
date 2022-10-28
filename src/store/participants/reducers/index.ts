import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { ParticipantsItem, StatItem } from '@services/participant.service'
import { updateRegisterMatch } from '@store/match/actions'
import _ from 'lodash'

export type MatchState = {
  participants: ParticipantsItem[] | undefined
  participantsStat: StatItem[] | undefined
}

const initialState: MatchState = {
  participants: undefined,
  participantsStat: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.getParticipants.fulfilled, (state, action) => {
    state.participants = action.payload.data
  })
  builder.addCase(actions.getParticipantsStat.fulfilled, (state, action) => {
    state.participantsStat = action.payload.data
  })
  builder.addCase(actions.clearParticipantsData, (state) => {
    state.participants = undefined
    state.participantsStat = undefined
  })
  builder.addCase(updateRegisterMatch.fulfilled, (state, action) => {
    state.participants =
      state.participants !== undefined
        ? _.map(state.participants, function (a) {
            return a.id === action.payload.data.id ? action.payload.data : a
          })
        : [action.payload.data]
  })
  builder.addCase(actions.deleteParticipants.fulfilled, (state, action) => {
    state.participants =
      state.participants !== undefined
        ? _.filter(state.participants, function (a) {
            return a.id !== action.meta.arg.id
          })
        : []
  })
})
