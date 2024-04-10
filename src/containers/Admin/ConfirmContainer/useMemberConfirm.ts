import { useEffect } from 'react'
import { matchDetail } from '@store/match/selectors'
import { getMatch, updateRegisterMatch } from '@store/match/actions'
import { Meta } from '@store/metadata/actions/types'
import { useSelector, useDispatch } from 'react-redux'
import {
  deleteParticipants,
  getParticipants,
} from '@store/participants/actions'
import { participants } from '@store/participants/selectors'
import { createMetaSelector } from '@store/metadata/selectors'
import { ParticipantsItem } from '@services/participant.service'
import { MatchItem } from '@store/match/actions/types'
import { UpdateMatchParams } from '@services/match.services'
import { support } from '@store/support/selectors'
import { SupportItem } from '@services/support.services'
import { SquadChangeParams, SquadJoinParams, SquadListData } from '@services/squad.services'
import { squadList, squadJoin, squadChange } from '@store/squads/actions'
import { squads } from '@store/squads/selectors'

const _listMeta = createMetaSelector(getParticipants)
const _detailMeta = createMetaSelector(getMatch)
const _respondMeta = createMetaSelector(updateRegisterMatch)

const useMemberConfirm = (
  id: string
): {
  detail: MatchItem
  list: ParticipantsItem[]
  detailMeta: Meta
  listMeta: Meta
  update: (params: UpdateMatchParams) => void
  respondMeta: Meta
  respond: (params: UpdateMatchParams) => void
  divisions: SupportItem[]
  deleteMember: (id: number) => void

  sList: SquadListData[]
  join: (params: SquadJoinParams) => void
  change: (params: SquadChangeParams) => void
} => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (id) {
      dispatch(getParticipants({ id: Number(id) }))
      dispatch(getMatch(id))
      dispatch(squadList(id))
    }
  }, [id])

  const update = (params: UpdateMatchParams) => {
    dispatch(updateRegisterMatch(params))
  }

  const detail = useSelector(matchDetail)
  const list = useSelector(participants)
  const detailMeta = useSelector(_detailMeta)
  const listMeta = useSelector(_listMeta)
  const respond = (params: UpdateMatchParams) => {
    dispatch(updateRegisterMatch(params))
  }
  const deleteMember = (id: number) => {
    dispatch(deleteParticipants({ id: id }))
  }
  const { divisions } = useSelector(support)
  const respondMeta = useSelector(_respondMeta)

  const sList = useSelector(squads)
  const join = (params: SquadJoinParams) => {
    dispatch(squadJoin(params))
  }
  const change = (params: SquadChangeParams) => {
    dispatch(squadChange(params))
  }

  return {
    detail,
    list,
    detailMeta,
    listMeta,
    respond,
    respondMeta,
    divisions,
    update,
    deleteMember,
    sList,
    join,
    change,
  }
}

export default useMemberConfirm
