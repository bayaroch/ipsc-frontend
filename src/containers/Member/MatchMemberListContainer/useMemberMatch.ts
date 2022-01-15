import { useEffect } from 'react'
import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/match'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import { MatchPageMeta, MatchPaginationMeta } from '@services/match.services'
import { MatchItem } from '@store/match/actions/types'
import { GroupedMatchListItem } from '@store/match/selectors/helpers'
import { UserData } from '@services/auth.services'
import { user } from '@store/auth/selectors'

const { selectors, actions } = searchStore
const getAllMatchesMeta = createMetaSelector(actions.getAllMatches)

const useMemberMatch = (): {
  meta: Meta
  list: MatchItem[]
  getList: (params: MatchPageMeta) => void
  paginationMeta: MatchPaginationMeta
  groupedList: GroupedMatchListItem[]
  currentUser: UserData
} => {
  useEffect(() => {
    dispatch(actions.clearMatchData())
  }, [])

  const dispatch = useDispatch()
  const meta = useSelector(getAllMatchesMeta)
  const list = useSelector(selectors.memberMatches)
  const groupedList = useSelector(selectors.matchGroupBy)
  const paginationMeta = useSelector(selectors.paginationMeta)
  const currentUser = useSelector(user)
  const getList = (params: MatchPageMeta) =>
    dispatch(actions.getAllMatches(params))

  return { meta, list, getList, paginationMeta, groupedList, currentUser }
}

export default useMemberMatch
