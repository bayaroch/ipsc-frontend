import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'
import _ from 'lodash'
import { MatchItem } from '../actions/types'
import { MATCH_STATUS } from '@constants/common.constants'

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

export const memberMatches = createSelector(getState, (state) => {
  const memberFilter = _.filter(state.matchList, function (o: MatchItem) {
    return o.status === MATCH_STATUS.MATCH_PUBLISH
  })
  return memberFilter
})
