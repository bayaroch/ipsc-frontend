import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { SupportItem } from '@services/support.services'
import { v4 as uuidv4 } from 'uuid'

export type SupportState = {
  class: SupportItem[] | undefined
  badges: SupportItem[] | undefined
  divisions: SupportItem[] | undefined
  toasts: {
    uuid: string
    message: string
    severity: 'success' | 'error' | 'warning' | 'info'
  }[]
  page?: any
}

const initialState: SupportState = {
  class: undefined,
  badges: undefined,
  divisions: undefined,
  toasts: [],
  page: undefined,
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
  builder.addCase(actions.addToast, (state, action) => {
    state.toasts = [
      ...state.toasts,
      {
        message: action.payload.message,
        severity: action.payload.severity ? action.payload.severity : 'success',
        uuid: uuidv4(),
      },
    ]
  })
  builder.addCase(actions.removeToast, (state, action) => {
    state.toasts = state.toasts.filter((t) => t.uuid !== action.payload)
  })
  builder.addCase(actions.cleanToasts, (state) => {
    state.toasts = []
  })
  builder.addCase(actions.fetchWordpress.fulfilled, (state, action) => {
    state.page = action.payload
  })
})
