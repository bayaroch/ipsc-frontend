import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { SupportItem } from '@services/support.services'

export type SupportState = {
  class: SupportItem[] | undefined
  badges: SupportItem[] | undefined
  divisions: SupportItem[] | undefined
}

const initialState: SupportState = {
  class: undefined,
  badges: undefined,
  divisions: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.getBadges.fulfilled, (state, action) => {
    state.badges = action.payload.data
  })
  builder.addCase(actions.getDivisions.fulfilled, (state, action) => {
    state.divisions = action.payload.data
  })
  builder.addCase(actions.getClass.fulfilled, (state, action) => {
    state.class = action.payload.data
  })
})
