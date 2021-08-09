import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { SquadListData, SquadResponseData } from '@services/squad.services'
import _ from 'lodash'

export type MatchState = {
  squadList: SquadListData[] | undefined
  createSquad: SquadResponseData | undefined
  updateSquad: SquadResponseData | undefined
  deleteStatus: string | undefined
}

const initialState: MatchState = {
  squadList: undefined,
  createSquad: undefined,
  updateSquad: undefined,
  deleteStatus: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.squadList.fulfilled, (state, action) => {
    state.squadList = action.payload.data
  })
  builder.addCase(actions.createSquad.fulfilled, (state, action) => {
    state.createSquad = action.payload.data
    if (_.isArray(state.squadList))
      state.squadList = _.concat(state.squadList, action.payload.data)
  })
  builder.addCase(actions.updateSquad.fulfilled, (state, action) => {
    state.updateSquad = action.payload.data
    if (_.isArray(state.squadList) && !_.isEmpty(state.squadList))
      state.squadList = _.map(state.squadList, function (a) {
        return a.id === action.payload.data.id ? action.payload.data : a
      })
  })
  builder.addCase(actions.deleteSquads.fulfilled, (state, action) => {
    state.squadList = _.filter(state.squadList, (item) => {
      return item.id !== Number(action.payload.data)
    })
  })
})
