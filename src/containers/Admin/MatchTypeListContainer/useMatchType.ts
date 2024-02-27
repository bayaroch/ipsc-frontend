import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/match-type'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import {
  MatchTypeItem,
  MatchTypePageMeta,
  MatchTypePaginationMeta,
  MatchTypeCreateParams,
  MatchTypeUpdateParams,
} from '@services/match-type.services'

import { support as sup } from '@store/support/selectors'
import { SupportState } from '@store/support/reducers'

const { selectors, actions } = searchStore
const getAllMatchTypeMeta = createMetaSelector(actions.getAllMatchTypes)

const useMatchType = (): {
  meta: Meta
  list: MatchTypeItem[]
  getList: (params: MatchTypePageMeta) => void
  paginationMeta: MatchTypePaginationMeta
  create: (params: MatchTypeCreateParams) => void
  update: (params: MatchTypeUpdateParams) => void
  support: SupportState
} => {
  const dispatch = useDispatch()
  const meta = useSelector(getAllMatchTypeMeta)
  const list = useSelector(selectors.matchTypes)
  const paginationMeta = useSelector(selectors.paginationMeta)
  const getList = (params: MatchTypePageMeta) =>
    dispatch(actions.getAllMatchTypes(params))
  const create = (params: MatchTypeCreateParams) =>
    dispatch(actions.createMatchType(params))
  const support = useSelector(sup)

  const update = (params: MatchTypeUpdateParams) => {
    dispatch(actions.updateMatchType(params))
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

export default useMatchType
