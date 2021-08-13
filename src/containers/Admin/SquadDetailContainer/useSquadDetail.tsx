import { useEffect } from 'react'
import {
  SquadCreateParams,
  SquadListData,
  SquadResponseData,
  SquadUpdateParams,
} from '@services/squad.services'
import {
  updateSquad,
  createSquad,
  squadList,
  deleteSquads,
} from '@store/squads/actions'
import { createMetaSelector } from '@store/metadata/selectors'
import { updateSquadResult, squads } from '@store/squads/selectors'
import { matchDetail } from '@store/match/selectors'
import { getMatch } from '@store/match/actions'
import { Meta } from '@store/metadata/actions/types'
import { useSelector, useDispatch } from 'react-redux'
import searchStore from '@store/squads'
import { MatchItem } from '@store/match/actions/types'

const { actions } = searchStore

const getAllSquadsMeta = createMetaSelector(actions.squadList)
const updateSquadsMeta = createMetaSelector(actions.updateSquad)
const createSquadsMeta = createMetaSelector(actions.createSquad)

const useSquadDetail = (
  id: string
): {
  createResponse: SquadResponseData
  updateResponse: SquadResponseData
  list: SquadListData[]
  update: (params: SquadUpdateParams) => void
  create: (params: SquadCreateParams) => void
  deleting: (id: number) => void
  listMeta: Meta
  updateMeta: Meta
  createMeta: Meta
  match: MatchItem
} => {
  const dispatch = useDispatch()
  const updateResponse = useSelector(updateSquadResult)
  const createResponse = useSelector(updateSquadResult)
  const list = useSelector(squads)
  const listMeta: Meta = useSelector(getAllSquadsMeta)
  const updateMeta: Meta = useSelector(updateSquadsMeta)
  const createMeta: Meta = useSelector(createSquadsMeta)
  const match: MatchItem = useSelector(matchDetail)

  useEffect(() => {
    if (id) {
      dispatch(squadList(id))
      dispatch(getMatch(id))
    }
  }, [id])

  const update = (params: SquadUpdateParams) => {
    dispatch(updateSquad(params))
  }

  const create = (params: SquadCreateParams) => {
    dispatch(createSquad(params))
  }

  const deleting = (id: number) => {
    dispatch(deleteSquads(id))
  }
  return {
    createResponse,
    updateResponse,
    list,
    update,
    create,
    listMeta,
    updateMeta,
    deleting,
    createMeta,
    match,
  }
}

export default useSquadDetail
