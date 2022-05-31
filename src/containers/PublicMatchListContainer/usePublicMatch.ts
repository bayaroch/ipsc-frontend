import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/match'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import { MatchItem } from '@store/match/actions/types'
import { GroupedMatchListItem } from '@store/match/selectors/helpers'
import { SupportState } from '@store/support/reducers'
import { BADGES, CLASS, DIVISIONS } from '@constants/common.constants'

const { selectors, actions } = searchStore
const getAllPublicMatchesMeta = createMetaSelector(actions.getAllPublicMatches)

const useMemberMatch = (): {
  meta: Meta
  list: MatchItem[]
  getList: () => void
  groupedList: GroupedMatchListItem[]
  support: SupportState
} => {
  const dispatch = useDispatch()
  const meta = useSelector(getAllPublicMatchesMeta)
  const list = useSelector(selectors.matchesPublic)
  const groupedList = useSelector(selectors.matchPublicGroupBy)
  const getList = () => dispatch(actions.getAllPublicMatches())
  const support = {
    class: CLASS,
    divisions: DIVISIONS,
    badges: BADGES,
    toasts: [],
  }

  return { meta, list, getList, groupedList, support }
}

export default useMemberMatch
