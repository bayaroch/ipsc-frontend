import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/match'
import { metaState } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import { MatchPageMeta } from '@services/match.services'
import { MatchItem } from '@store/match/actions/types'

const { selectors, actions } = searchStore
const getAllMatchesMeta = createMetaSelector(actions.getAllMatches)

const useMatch = (): {
  meta: metaState
  list: MatchItem[]
  getList: (params: MatchPageMeta) => void
} => {
  const dispatch = useDispatch()
  const meta = useSelector(getAllMatchesMeta)
  const list = useSelector(selectors.matches)
  const getList = (params: MatchPageMeta) =>
    dispatch(actions.getAllMatches(params))

  return { meta, list, getList }
}

export default useMatch
