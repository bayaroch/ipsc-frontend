import { createReducer } from '@reduxjs/toolkit'
import { MatchItem } from '../actions/types'
import * as actions from '../actions'
import { MatchPaginationMeta } from '@services/match.services'

export type MatchState = {
  matchList: MatchItem[] | undefined
  matchMeta: MatchPaginationMeta | undefined
}

const initialState: MatchState = {
  matchList: undefined,
  matchMeta: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.getAllMatches.fulfilled, (state, action) => {
    state.matchList = action.payload.data
    state.matchMeta = action.payload.meta.pagination
  })
})
