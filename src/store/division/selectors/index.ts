import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'
import _ from 'lodash'

const getState = (state: RootState) => state.division

export const divisions = createSelector(getState, (state) =>
  _.sortBy(state.divisionList, 'id')
)

export const paginationMeta = createSelector(
  getState,
  (state) => state.divisionMeta
)
