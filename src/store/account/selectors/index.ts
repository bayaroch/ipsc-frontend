import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'

const getState = (state: RootState) => state.account

export const members = createSelector(getState, (state) => state.memberList)
export const paginationMeta = createSelector(
  getState,
  (state) => state.memberMeta
)
