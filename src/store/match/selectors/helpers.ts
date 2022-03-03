import { ParticipantsItem, ScoreItem } from '@services/match.services'
import _ from 'lodash'
import { MatchItem } from '../actions/types'
import moment from 'moment'

export type ParticipantSortedItem = {
  groupTitle: number | string
  data: ParticipantsItem[]
}

export type ScoreSortedItem = {
  groupTitle: number | string
  data: ScoreItem[]
}

export type GroupedMatchListItem = {
  groupTitle: string
  data: MatchItem[]
}

export type ParticipantSortedList = Array<ParticipantSortedItem>

export type DivisionScoreList = Array<ScoreSortedItem>

export const groupByDivision = (items: ParticipantsItem[]) => {
  const groupedItems = _.chain(items)
    .groupBy((item) => item.division_id)
    .map((groupItems, groupTitle) => {
      return { groupTitle: groupTitle, data: groupItems }
    })
    .value()

  return groupedItems
}

export const groupByDivisionScore = (items: ScoreItem[]): DivisionScoreList => {
  const groupedItems = _.chain(items)
    .groupBy((item) => item.division_id)
    .map((groupItems, groupTitle) => {
      const dqItems = _.filter(groupItems, (c) => c.dq === true)
      const scoreItems = _.filter(groupItems, (c) => c.dq === false)
      const orderItems = _.orderBy(scoreItems, ['pts'], ['desc'])
      const newArr = [...orderItems, ...dqItems]
      return { groupTitle: groupTitle, data: newArr }
    })
    .value()

  return groupedItems
}

export const groupByIsBefore = (items: MatchItem[]): GroupedMatchListItem[] => {
  const groupedItems = _.chain(items)
    .groupBy((item) => {
      const today = moment()
      const isBefore = moment(item.match_end).isBefore(today, 'days')
      return isBefore
    })
    .map((groupItems, groupTitle) => {
      return {
        groupTitle: groupTitle === 'true' ? 'Явагдаж дууссан' : 'Удахгүй болох',
        data: _.orderBy(groupItems, 'match_start', 'asc'),
      }
    })
    .value()

  return groupedItems
}
