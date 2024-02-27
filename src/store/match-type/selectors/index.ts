import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'
import _ from 'lodash'

const getState = (state: RootState) => state.matchType

export const matchTypes = createSelector(getState, (state) =>
  _.sortBy(state.matchTypeList, 'id')
)

export const paginationMeta = createSelector(
  getState,
  (state) => state.matchTypeMeta
)
