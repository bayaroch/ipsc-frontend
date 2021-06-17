import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'

const getState = (state: RootState) => state.match

export const matches = createSelector(getState, (state) => state.matchList)
export const createResult = createSelector(
  getState,
  (state) => state.createMatch
)

export const updateResult = createSelector(
  getState,
  (state) => state.updateMatch
)

export const paginationMeta = createSelector(
  getState,
  (state) => state.matchMeta
)

export const matchDetail = createSelector(getState, (state) => state.detail)
