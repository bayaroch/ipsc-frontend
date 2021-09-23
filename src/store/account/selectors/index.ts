import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'
import _ from 'lodash'
import { MemberItem } from '@services/account.services'
import { groupByUserType } from './helper'

const getState = (state: RootState) => state.account

export const members = createSelector(getState, (state) =>
  _.sortBy(state.memberList, 'usercode')
)

export interface GroupedMemberItem {
  title: string
  data: MemberItem[]
}

export const membersGroupBy = createSelector(getState, (state) => {
  if (state === undefined) return []
  const grouped = groupByUserType(_.sortBy(state.memberList, 'usercode'))
  return grouped
})

export const paginationMeta = createSelector(
  getState,
  (state) => state.memberMeta
)
