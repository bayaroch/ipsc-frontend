import { useEffect } from 'react'
import { SquadJoinParams, SquadListData } from '@services/squad.services'
import { squadList, squadJoin } from '@store/squads/actions'
import { createMetaSelector } from '@store/metadata/selectors'
import { squads } from '@store/squads/selectors'
import { Meta } from '@store/metadata/actions/types'
import { useSelector, useDispatch } from 'react-redux'
import searchStore from '@store/squads'
import { user } from '@store/auth/selectors'
import { UserData } from '@services/auth.services'

const { actions } = searchStore

const getAllSquadsMeta = createMetaSelector(actions.squadList)
const joinSquadMeta = createMetaSelector(actions.squadJoin)

const useSquadJoin = (
  id: string
): {
  list: SquadListData[]
  listMeta: Meta
  joinMeta: Meta
  join: (params: SquadJoinParams) => void
  getList: (id: string) => void
  userData: UserData
} => {
  const dispatch = useDispatch()
  const list = useSelector(squads)
  const listMeta: Meta = useSelector(getAllSquadsMeta)
  const joinMeta: Meta = useSelector(joinSquadMeta)
  const userData: UserData = useSelector(user)
  const joinData: UserData = useSelector(user)

  useEffect(() => {
    if (id) {
      dispatch(squadList(id))
    }
  }, [id])

  const join = (params: SquadJoinParams) => {
    dispatch(squadJoin(params))
  }

  const getList = (id: string) => {
    dispatch(squadList(id))
  }

  return {
    userData,
    list,
    listMeta,
    join,
    joinMeta,
    getList,
  }
}

export default useSquadJoin
