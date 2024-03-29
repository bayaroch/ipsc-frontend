import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { MemberPaginationMeta, MemberItem } from '@services/account.services'
import _ from 'lodash'

export type MatchState = {
  memberList: MemberItem[] | undefined
  memberMeta: MemberPaginationMeta | undefined
  profile: MemberItem | undefined
}

const initialState: MatchState = {
  memberList: undefined,
  memberMeta: undefined,
  profile: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.getAllMembers.fulfilled, (state, action) => {
    state.memberList = action.payload.data
    state.memberMeta = action.payload.meta.pagination
  })
  builder.addCase(actions.createUser.fulfilled, (state, action) => {
    state.memberList = _.unionBy(state.memberList, [action.payload.data], 'id')
  })
  builder.addCase(actions.updateUser.fulfilled, (state, action) => {
    state.memberList = _.map(_.cloneDeep(state.memberList), (m) => {
      return m.id === action.payload.data.id ? action.payload.data : m
    })
    state.profile =
      state.profile !== undefined && state.profile.id === action.payload.data.id
        ? action.payload.data
        : state.profile
  })
  builder.addCase(actions.profile.fulfilled, (state, action) => {
    state.profile = action.payload.data
  })
  builder.addCase(actions.clearProfileData, (state) => {
    state.profile = undefined
  })
})
