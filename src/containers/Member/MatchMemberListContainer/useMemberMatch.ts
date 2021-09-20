import { useEffect } from 'react'
import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/match'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import { MatchPageMeta, MatchPaginationMeta } from '@services/match.services'
import { MatchItem } from '@store/match/actions/types'
import { GroupedMatchListItem } from '@store/match/selectors/helpers'

const { selectors, actions } = searchStore
const getAllMatchesMeta = createMetaSelector(actions.getAllMatches)

const useMemberMatch = (): {
  meta: Meta
  list: MatchItem[]
  getList: (params: MatchPageMeta) => void
  paginationMeta: MatchPaginationMeta
  groupedList: GroupedMatchListItem[]
} => {
  useEffect(() => {
    dispatch(actions.clearMatchData())
  }, [])

  const dispatch = useDispatch()
  const meta = useSelector(getAllMatchesMeta)
  const list = useSelector(selectors.memberMatches)
  const groupedList = useSelector(selectors.matchGroupBy)
  const paginationMeta = useSelector(selectors.paginationMeta)
  const getList = (params: MatchPageMeta) =>
    dispatch(actions.getAllMatches(params))

  return { meta, list, getList, paginationMeta, groupedList }
}

export default useMemberMatch
