import { SquadListData } from '@services/squad.services'
import _ from 'lodash'

export type SquadGroupType = {
  groupTitle: string
  data: SquadListData[]
}
export const groupByRemark = (items: SquadListData[]): SquadGroupType[] => {
  const groupedItems = _.chain(items)
    .groupBy((item) => item.remark)
    .map((groupItems, groupTitle) => {
      return { groupTitle: groupTitle, data: groupItems }
    })
    .value()

  return groupedItems
}
