import { AuthState } from '../actions/types'
import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { profile } from '@store/account/actions'
import { UserData } from '@services/auth.services'
import { MemberItem } from '@services/account.services'

export const initialState: AuthState = {
  authenticated: false,
  user: undefined,
  token: undefined,
  category: undefined,
  pwdMsg: undefined,
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
  builder.addCase(profile.fulfilled, (state, action) => {
    state.user = updateCurrentUser(state.user, action.payload.data)
  })
  builder.addCase(actions.forgot.fulfilled, (state, action) => {
    state.pwdMsg = action.payload.data
  })
  builder.addCase(actions.reset.fulfilled, (state, action) => {
    state.pwdMsg = action.payload.data
  })
  builder.addCase(actions.clearPwdMsg, (state) => {
    state.pwdMsg = undefined
  })
})

const updateCurrentUser = (
  auth: UserData | undefined,
  profile: MemberItem
): UserData | undefined => {
  if (auth !== undefined && auth.id === profile.id) {
    return {
      ...auth,
      ...profile,
    }
  } else {
    return auth
  }
}
