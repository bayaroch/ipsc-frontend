import { AuthState } from '../actions/types'
import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'

export const initialState: AuthState = {
  authenticated: false,
  user: undefined,
  token: undefined,
  category: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.login.fulfilled, (state, action) => {
    state.authenticated = true
    state.token = action.payload.data.token
    state.user = action.payload.data.user
  })
  builder.addCase(actions.logOut, (state) => {
    state.authenticated = false
    state.token = undefined
    state.user = undefined
  })
})
