import { createReducer } from '@reduxjs/toolkit'
import { MatchItem } from '../actions/types'
import * as actions from '../actions'
import {
  MatchPaginationMeta,
  RegisterMatchData,
} from '@services/match.services'
import _ from 'lodash'

export type MatchState = {
  matchList: MatchItem[] | undefined
  matchMeta: MatchPaginationMeta | undefined
  createMatch: MatchItem | undefined
  updateMatch: MatchItem | undefined
  detail: MatchItem | undefined
  registerMatch: RegisterMatchData | undefined
}

const initialState: MatchState = {
  matchList: undefined,
  matchMeta: undefined,
  createMatch: undefined,
  updateMatch: undefined,
  detail: undefined,
  registerMatch: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.getAllMatches.fulfilled, (state, action) => {
    state.matchList = action.payload.data
    state.matchMeta = action.payload.meta.pagination
  })
  builder.addCase(actions.createMatch.fulfilled, (state, action) => {
    state.createMatch = action.payload.data
  })
  builder.addCase(actions.updateMatch.fulfilled, (state, action) => {
    state.updateMatch = action.payload.data
  })
  builder.addCase(actions.getMatch.fulfilled, (state, action) => {
    state.detail = action.payload.data
  })
  builder.addCase(actions.clearMatchData, (state) => {
    state.updateMatch = undefined
    state.createMatch = undefined
  })
  builder.addCase(actions.registerMatch.fulfilled, (state, action) => {
    state.registerMatch = action.payload.data
  })
  builder.addCase(actions.updateRegisterMatch.fulfilled, (state, action) => {
    state.registerMatch = action.payload.data
  })
  builder.addCase(actions.deleteMatch.fulfilled, (state, action) => {
    state.matchList = _.filter(state.matchList, (m) => m.id !== action.meta.arg)
  })
})
