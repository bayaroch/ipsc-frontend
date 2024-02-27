import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/division'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import {
  DivisionItem,
  DivisionPageMeta,
  DivisionPaginationMeta,
  DivisionCreateParams,
  DivisionUpdateParams,
} from '@services/division.services'

import { support as sup } from '@store/support/selectors'
import { SupportState } from '@store/support/reducers'

const { selectors, actions } = searchStore
const getAllDivisionMeta = createMetaSelector(actions.getAllDivisions)

const useDivision = (): {
  meta: Meta
  list: DivisionItem[]
  getList: (params: DivisionPageMeta) => void
  paginationMeta: DivisionPaginationMeta
  create: (params: DivisionCreateParams) => void
  update: (params: DivisionUpdateParams) => void
  support: SupportState
} => {
  const dispatch = useDispatch()
  const meta = useSelector(getAllDivisionMeta)
  const list = useSelector(selectors.divisions)
  const paginationMeta = useSelector(selectors.paginationMeta)
  const getList = (params: DivisionPageMeta) =>
    dispatch(actions.getAllDivisions(params))
  const create = (params: DivisionCreateParams) =>
    dispatch(actions.createDivision(params))
  const support = useSelector(sup)

  const update = (params: DivisionUpdateParams) => {
    dispatch(actions.updateDivision(params))
  }

  return {
    meta,
    list,
    getList,
    paginationMeta,
    create,
    update,
    support,
  }
}

export default useDivision
