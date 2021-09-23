import { USER_TYPE } from '@constants/user.constants'
import { MemberItem } from '@services/account.services'
import _ from 'lodash'
import { GroupedMemberItem } from './'

export const groupByUserType = (items: MemberItem[]): GroupedMemberItem[] => {
  const groupedItems = _.chain(items)
    .groupBy((item) => isRegular(item))
    .map((groupItems, groupTitle) => {
      return {
        title: groupTitle,
        data: groupItems,
      }
    })
    .value()
  return groupedItems
}

const isRegular = (item: MemberItem) => {
  if (
    item.usertype === USER_TYPE.USER_ADMIN ||
    item.usertype === USER_TYPE.USER_REGULAR
  ) {
    return 'Гишүүд'
  }
  return 'Сурагчид'
}
