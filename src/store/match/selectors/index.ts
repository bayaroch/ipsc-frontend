import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'

const getState = (state: RootState) => state.match

export const matches = createSelector(getState, (state) => state.matchList)
export const createResult = createSelector(
  getState,
  (state) => state.createMatch
)

export const paginationMeta = createSelector(
  getState,
  (state) => state.matchMeta
)
