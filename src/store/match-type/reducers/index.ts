import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { MatchTypePaginationMeta, MatchTypeItem } from '@services/match-type.services'
import _ from 'lodash'

export type MatchTypeState = {
  matchTypeList: MatchTypeItem[] | undefined
  matchTypeMeta: MatchTypePaginationMeta | undefined
}

const initialState: MatchTypeState = {
  matchTypeList: undefined,
  matchTypeMeta: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.getAllMatchTypes.fulfilled, (state, action) => {
    state.matchTypeList = action.payload.data
    state.matchTypeMeta = action.payload.meta.pagination
  })
  builder.addCase(actions.createMatchType.fulfilled, (state, action) => {
    state.matchTypeList = _.unionBy(state.matchTypeList, [action.payload.data], 'id')
  })
  builder.addCase(actions.updateMatchType.fulfilled, (state, action) => {
    state.matchTypeList = _.map(_.cloneDeep(state.matchTypeList), (m) => {
      return m.id === action.payload.data.id ? action.payload.data : m
    })
  })
})
