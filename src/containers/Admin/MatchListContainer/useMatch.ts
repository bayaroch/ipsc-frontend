import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/match'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import { MatchPageMeta, MatchPaginationMeta } from '@services/match.services'
import { MatchItem } from '@store/match/actions/types'

const { selectors, actions } = searchStore
const getAllMatchesMeta = createMetaSelector(actions.getAllMatches)

const useMatch = (): {
  meta: Meta
  list: MatchItem[]
  getList: (params: MatchPageMeta) => void
  paginationMeta: MatchPaginationMeta
  deleteMatch: (id: number) => void
} => {
  const dispatch = useDispatch()
  const meta = useSelector(getAllMatchesMeta)
  const list = useSelector(selectors.matches)
  const paginationMeta = useSelector(selectors.paginationMeta)
  const getList = (params: MatchPageMeta) =>
    dispatch(actions.getAllMatches(params))

  const deleteMatch = (id: number) => dispatch(actions.deleteMatch(id))

  return { meta, list, getList, paginationMeta, deleteMatch }
}

export default useMatch
