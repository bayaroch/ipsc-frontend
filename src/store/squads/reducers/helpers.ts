import { SquadListData, SquadListMembers } from '@services/squad.services'
import _ from 'lodash'

const isExist = (
  state: SquadListData[],
  payload: number
): number | undefined => {
  const squadId =
    state &&
    state
      .map((item) => {
        const exist = _.find(item.squad_members, (o) => o.user.id === payload)
        return exist?.id
      })
      .filter((item) => item)

  if (!_.isEmpty(squadId)) return squadId[0]
}

const isExistInThis = (
  state: SquadListData[] | undefined,
  payload: number,
  id: number
): boolean => {
  let exist = true
  state &&
    state
      .map((item) => {
        if (item.id === id) {
          exist = _.isObject(
            _.find(item.squad_members, (o) => o.user.id === payload)
          )
        }
      })
      .filter((item) => item)
  return exist
}

const joinMember = (
  list: SquadListData[],
  payload: SquadListMembers
): SquadListData[] => {
  const newList = _.map(list, (item) => {
    if (item.id === payload.squad_id) {
      return {
        ...item,
        squad_members: _.unionBy(item.squad_members, [payload], 'id'),
      }
    } else {
      return item
    }
  })

  return newList
}

const changeMember = (
  list: SquadListData[],
  payload: SquadListMembers
): SquadListData[] => {
  const newList = _.map(list, (item) => {
    if (item.id === payload.squad_id) {
      return {
        ...item,
        squad_members: _.unionBy(item.squad_members, [payload], 'id'),
      }
    } else {
      return {
        ...item,
        squad_members: _.filter(item.squad_members, (o) => o.id !== payload.id),
      }
    }
  })

  return newList
}

export const SquadHelper = {
  isExist,
  joinMember,
  changeMember,
  isExistInThis,
}
