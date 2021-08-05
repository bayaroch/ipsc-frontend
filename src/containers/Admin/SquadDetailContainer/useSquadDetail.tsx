import { useEffect, useState } from 'react'
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
import { Meta } from '@store/metadata/actions/types'
import { useSelector, useDispatch } from 'react-redux'
import searchStore from '@store/squads'

const { selectors, actions } = searchStore

const getAllSquadsMeta = createMetaSelector(actions.squadList)
const updateSquadsMeta = createMetaSelector(actions.updateSquad)
const createSquadsMeta = createMetaSelector(actions.createSquad)

const useUpdateMatch = (
  id: string
): {
  createResponse: SquadResponseData
  updateResponse: SquadResponseData
  list: SquadListData[]
  update: (params: SquadUpdateParams) => void
  create: (params: SquadCreateParams) => void
  deleting: (id: string) => void
  listMeta: Meta
  updateMeta: Meta
  createMeta: Meta
} => {
  const dispatch = useDispatch()
  const updateResponse = useSelector(updateSquadResult)
  const createResponse = useSelector(updateSquadResult)
  const list = useSelector(squads)
  const listMeta: Meta = useSelector(getAllSquadsMeta)
  const updateMeta: Meta = useSelector(updateSquadsMeta)
  const createMeta: Meta = useSelector(createSquadsMeta)

  useEffect(() => {
    console.log(id)
    if (id) {
      dispatch(squadList(id))
    }
  }, [id])

  const update = (params: SquadUpdateParams) => {
    dispatch(updateSquad(params))
  }

  const create = (params: SquadCreateParams) => {
    dispatch(createSquad(params))
  }

  const deleting = (id: string) => {
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
  }
}

export default useUpdateMatch
