import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { SquadListData, SquadResponseData } from '@services/squad.services'

export type MatchState = {
  squadList: SquadListData[] | undefined
  createSquad: SquadResponseData | undefined
  updateSquad: SquadResponseData | undefined
}

const initialState: MatchState = {
  squadList: undefined,
  createSquad: undefined,
  updateSquad: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.squadList.fulfilled, (state, action) => {
    state.squadList = action.payload.data
  })
  builder.addCase(actions.createSquad.fulfilled, (state, action) => {
    state.createSquad = action.payload.data
  })
  builder.addCase(actions.updateSquad.fulfilled, (state, action) => {
    state.updateSquad = action.payload.data
  })
})
