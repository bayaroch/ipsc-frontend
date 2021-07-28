import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'
import _ from 'lodash'
import { MatchItem } from '../actions/types'
import { MATCH_STATUS } from '@constants/common.constants'
import { groupByDivision } from './helpers'

const getState = (state: RootState) => state.match
const detail = (state: RootState) => state.match.detail

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

export const registerDetail = createSelector(
  getState,
  (state) => state.registerDetail
)

export const memberMatches = createSelector(getState, (state) => {
  const memberFilter = _.filter(state.matchList, function (o: MatchItem) {
    return o.status === MATCH_STATUS.MATCH_PUBLISH
  })
  return memberFilter
})

export const matchParticipants = createSelector(detail, (state) => {
  if (state === undefined) return []
  const grouped = groupByDivision(state.participants)
  return grouped
})
