import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { ParticipantsItem } from '@services/participant.service'
import { updateRegisterMatch } from '@store/match/actions'
import _ from 'lodash'

export type MatchState = {
  participants: ParticipantsItem[] | undefined
}

const initialState: MatchState = {
  participants: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.getParticipants.fulfilled, (state, action) => {
    state.participants = action.payload.data
  })
  builder.addCase(actions.clearParticipantsData, (state) => {
    state.participants = undefined
  })
  builder.addCase(updateRegisterMatch.fulfilled, (state, action) => {
    state.participants =
      state.participants !== undefined
        ? _.map(state.participants, function (a) {
            return a.id === action.payload.data.id ? action.payload.data : a
          })
        : [action.payload.data]
  })
})
