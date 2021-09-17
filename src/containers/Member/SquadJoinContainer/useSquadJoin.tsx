import { useEffect } from 'react'
import {
  SquadChangeParams,
  SquadJoinParams,
  SquadListData,
} from '@services/squad.services'
import { squadList, squadJoin, squadChange } from '@store/squads/actions'
import { createMetaSelector } from '@store/metadata/selectors'
import { squads } from '@store/squads/selectors'
import { Meta } from '@store/metadata/actions/types'
import { useSelector, useDispatch } from 'react-redux'
import searchStore from '@store/squads'
import { user } from '@store/auth/selectors'
import { UserData } from '@services/auth.services'
import { MatchItem } from '@store/match/actions/types'
import { getMatch } from '@store/match/actions'
import { matchDetail } from '@store/match/selectors'

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
  change: (params: SquadChangeParams) => void
  getList: (id: string) => void
  userData: UserData
  match: MatchItem
} => {
  const dispatch = useDispatch()
  const list = useSelector(squads)
  const listMeta: Meta = useSelector(getAllSquadsMeta)
  const joinMeta: Meta = useSelector(joinSquadMeta)
  const userData: UserData = useSelector(user)
  const match: MatchItem = useSelector(matchDetail)

  useEffect(() => {
    if (id) {
      dispatch(squadList(id))
      dispatch(getMatch(id))
    }
  }, [id])

  const join = (params: SquadJoinParams) => {
    dispatch(squadJoin(params))
  }
  const change = (params: SquadChangeParams) => {
    dispatch(squadChange(params))
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
    change,
    match,
  }
}

export default useSquadJoin
