import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { DivisionPaginationMeta, DivisionItem } from '@services/division.services'
import _ from 'lodash'

export type DivisionState = {
  divisionList: DivisionItem[] | undefined
  divisionMeta: DivisionPaginationMeta | undefined
}

const initialState: DivisionState = {
  divisionList: undefined,
  divisionMeta: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.getAllDivisions.fulfilled, (state, action) => {
    state.divisionList = action.payload.data
    state.divisionMeta = action.payload.meta.pagination
  })
  builder.addCase(actions.createDivision.fulfilled, (state, action) => {
    state.divisionList = _.unionBy(state.divisionList, [action.payload.data], 'id')
  })
  builder.addCase(actions.updateDivision.fulfilled, (state, action) => {
    state.divisionList = _.map(_.cloneDeep(state.divisionList), (m) => {
      return m.id === action.payload.data.id ? action.payload.data : m
    })
  })
})
