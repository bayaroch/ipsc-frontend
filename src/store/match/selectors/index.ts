import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'
import _ from 'lodash'
import { MatchItem } from '../actions/types'
import { MATCH_STATUS } from '@constants/common.constants'
import {
  groupByDivision,
  groupByDivisionScore,
  groupByIsBefore,
  rankGroupByUser,
} from './helpers'
import { CombinedItem, RankItem } from '@services/match.services'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RanksItem {
  user_id: string
  total: number
  count: number
  data: CombinedItem[]
}

const getState = (state: RootState) => state.match
const detail = (state: RootState) => state.match.detail
const ranks = (state: RootState) => state.match.ranksByDivision

export const matches = createSelector(getState, (state) => state.matchList)
export const matchesPublic = createSelector(
  getState,
  (state) => state.matchListPublic
)

export const matchGroupBy = createSelector(getState, (state) => {
  return groupByIsBefore(state.matchList)
})

export const matchPublicGroupBy = createSelector(getState, (state) => {
  return groupByIsBefore(state.matchListPublic)
})

export const createResult = createSelector(
  getState,
  (state) => state.createMatch
)

export const rankResult = createSelector(
  ranks,
  (state: CombinedItem[] | undefined) => {
    if (state === undefined) return []
    const groupBySum = _.chain(state)
      // Group the elements of Array based on `color` property
      .groupBy('user_id')
      // `key` is group's name (color), `value` is the array of objects
      .map((value, key) => ({
        user_id: key,
        total: _.sumBy(value, (o) => o.rp),
        count: value.length,
        data: _.orderBy(value, (v) => v.match_end, 'asc'),
      }))
      .value()

    const orderBySum = _.orderBy(groupBySum, (o) => o.total, 'desc')

    return orderBySum
  }
)

export const updateResult = createSelector(
  getState,
  (state) => state.updateMatch
)

export const paginationMeta = createSelector(
  getState,
  (state) => state.matchMeta
)

export const matchHTMLFiles = createSelector(
  getState,
  (state) => state.matchHTML
)

export const matchDetail = createSelector(getState, (state) => state.detail)

export const registerMatch = createSelector(
  getState,
  (state) => state.registerMatch
)

export const memberMatches = createSelector(getState, (state) => {
  const memberFilter = _.filter(state.matchList, function (o: MatchItem) {
    return o.status === MATCH_STATUS.MATCH_PUBLISH
  })
  return memberFilter
})

export const matchParticipants = createSelector(detail, (state) => {
  if (state === undefined) return []
  const verified = _.filter(state.participants, (p) => p.is_verified)
  const grouped = groupByDivision(verified)
  return grouped
})

export const waitingList = createSelector(detail, (state) => {
  if (state === undefined) return []
  const verified = _.filter(state.participants, (p) => !p.is_verified)
  return verified
})

export const matchScorebyDivision = createSelector(detail, (state) => {
  if (state === undefined) return []
  const grouped = groupByDivisionScore(state.match_scores)
  return grouped
})

export const rankResultByUser = createSelector(ranks, (state) => {
  if (state === undefined) return []
  const grouped = rankGroupByUser(state)
  const sum = (el: RankItem[]) => {
    return _.sumBy(el, (o) => o.rp)
  }
  const orderBySum = _.orderBy(grouped, (g) => sum(g.data), 'desc')
  return orderBySum
})

export const matchPublicParticipants = createSelector(detail, (state) => {
  if (state === undefined) return []
  const verified = _.filter(state.participants, (p) => p.is_verified)
  const grouped = groupByDivision(verified)
  return grouped
})

export const matchPublicGuests = createSelector(detail, (state) => {
  if (state === undefined) return []
  const guests = _.filter(state.participants, (p) => p.user?.usertype == 2)
  return guests
})
