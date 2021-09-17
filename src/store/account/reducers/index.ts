import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { MemberPaginationMeta, MemberItem } from '@services/account.services'
import _ from 'lodash'

export type MatchState = {
  memberList: MemberItem[] | undefined
  memberMeta: MemberPaginationMeta | undefined
}

const initialState: MatchState = {
  memberList: undefined,
  memberMeta: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.getAllMembers.fulfilled, (state, action) => {
    state.memberList = action.payload.data
    state.memberMeta = action.payload.meta.pagination
  })
  builder.addCase(actions.createUser.fulfilled, (state, action) => {
    state.memberList = _.unionBy(state.memberList, [action.payload.data], 'id')
  })
})
