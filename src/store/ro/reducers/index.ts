import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { RoItem } from '@services/ro.services'
import _ from 'lodash'

export type SupportState = {
  roList: RoItem[] | undefined
}

const initialState: SupportState = {
  roList: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.roList.fulfilled, (state, action) => {
    state.roList = action.payload.data
  })
  builder.addCase(actions.roUpdate.fulfilled, (state, action) => {
    const roData = action.payload.data
    state.roList = state.roList
      ? _.map(state.roList, (t) => {
          if (t.match_id === roData.match_id && roData.id === t.id) {
            return roData
          } else {
            return t
          }
        })
      : undefined
  })

  builder.addCase(actions.roJoin.fulfilled, (state, action) => {
    state.roList = state.roList
      ? _.concat(state.roList, action.payload.data)
      : [action.payload.data]
  })
  builder.addCase(actions.roDelete.fulfilled, (state, action) => {
    state.roList = state.roList
      ? _.filter(state.roList, (r) => r.id !== action.meta.arg)
      : undefined
  })
})
