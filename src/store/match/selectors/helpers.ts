import { ParticipantsItem } from '@services/match.services'
import _ from 'lodash'

export type ParticipantSortedItem = {
  groupTitle: number | string
  data: ParticipantsItem[]
}

export type ParticipantSortedList = Array<ParticipantSortedItem>

export const groupByDivision = (items: ParticipantsItem[]) => {
  const groupedItems = _.chain(items)
    .groupBy((item) => item.division_id)
    .map((groupItems, groupTitle) => {
      return { groupTitle: groupTitle, data: groupItems }
    })
    .value()

  return groupedItems
}
