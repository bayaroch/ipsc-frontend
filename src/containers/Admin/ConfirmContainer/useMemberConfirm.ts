import { useEffect } from 'react'
import { matchDetail } from '@store/match/selectors'
import { getMatch, updateRegisterMatch } from '@store/match/actions'
import { Meta } from '@store/metadata/actions/types'
import { useSelector, useDispatch } from 'react-redux'
import { getParticipants } from '@store/participants/actions'
import { participants } from '@store/participants/selectors'
import { createMetaSelector } from '@store/metadata/selectors'
import { ParticipantsItem } from '@services/participant.service'
import { MatchItem } from '@store/match/actions/types'
import { UpdateMatchParams } from '@services/match.services'

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
  respondMeta: Meta
  respond: (params: UpdateMatchParams) => void
} => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (id) {
      dispatch(getParticipants({ id: Number(id) }))
      dispatch(getMatch(id))
    }
  }, [id])

  const detail = useSelector(matchDetail)
  const list = useSelector(participants)
  const detailMeta = useSelector(_detailMeta)
  const listMeta = useSelector(_listMeta)
  const respond = (params: UpdateMatchParams) => {
    dispatch(updateRegisterMatch(params))
  }
  const respondMeta = useSelector(_respondMeta)

  return { detail, list, detailMeta, listMeta, respond, respondMeta }
}

export default useMemberConfirm
