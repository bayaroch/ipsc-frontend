import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/match'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import { MatchItem } from '@store/match/actions/types'
import { GroupedMatchListItem } from '@store/match/selectors/helpers'
import { SupportState } from '@store/support/reducers'

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
    class: [
      {
        id: 1,
        shorthand: 'U',
        name: 'Unclassified',
        remark: '(Спортыг цол, зэрэггүй)',
      },
      { id: 2, shorthand: 'M', name: 'M Class', remark: '(ОУХМастер)' },
      { id: 3, shorthand: 'A', name: 'A Class', remark: '(Спортын мастер)' },
      {
        id: 4,
        shorthand: 'B',
        name: 'B Class',
        remark: '(Спортын дэд мастер)',
      },
      { id: 5, shorthand: 'C', name: 'C Class', remark: '(Спортын 1-р зэрэг)' },
      { id: 6, shorthand: 'D', name: 'D Class', remark: '(Спортын 2-р зэрэг)' },
    ],
    divisions: [
      { id: 1, shorthand: 'OP', name: 'Open', remark: null },
      { id: 2, shorthand: 'ST', name: 'Standard', remark: null },
      { id: 3, shorthand: 'CL', name: 'Classic', remark: null },
      { id: 4, shorthand: 'PROD', name: 'Production', remark: null },
      { id: 5, shorthand: 'PO', name: 'Production Optics', remark: null },
    ],
    badges: [
      { id: 1, shorthand: 'RO', name: 'Range Officer', remark: '' },
      { id: 2, shorthand: 'CRO', name: 'Chief Range Officer', remark: '' },
      {
        id: 3,
        shorthand: 'TCI',
        name: 'Training Course Instructor',
        remark: '',
      },
      { id: 4, shorthand: 'RM', name: 'Range Master', remark: '' },
      { id: 5, shorthand: 'MD', name: 'Match Director', remark: '' },
    ],
    toasts: [],
  }

  return { meta, list, getList, groupedList, support }
}

export default useMemberMatch
