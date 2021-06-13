import { createReducer } from '@reduxjs/toolkit'
import { MatchItem } from '../actions/types'
import * as actions from '../actions'

export type MatchState = {
  matchList: MatchItem[] | undefined
}

const initialState: MatchState = {
  matchList: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.getAllMatches.fulfilled, (state, action) => {
    state.matchList = action.payload.data
  })
})
