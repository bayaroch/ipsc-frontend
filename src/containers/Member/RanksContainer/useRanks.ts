import { createMetaSelector } from '@store/metadata/selectors'
import { Meta } from '@store/metadata/actions/types'
import { useSelector, useDispatch } from 'react-redux'
import searchStore from '@store/match'
import { fetchRanks } from '@store/match/actions'
import { rankResult } from '@store/match/selectors'
import { support as sup } from '@store/support/selectors'
import { SupportItem } from '@services/support.services'
import { CombinedItem } from '@services/match.services'

const { actions } = searchStore

const rankMeta = createMetaSelector(actions.ranksByDivisionList)

const useRanks = (): {
  list: CombinedItem[]
  ranks: () => void
  meta: Meta
  divisions: SupportItem[]
} => {
  const dispatch = useDispatch()
  const list = useSelector(rankResult)
  const meta: Meta = useSelector(rankMeta)
  const { divisions } = useSelector(sup)

  const ranks = () => {
    dispatch(fetchRanks())
  }

  return {
    meta,
    list,
    ranks,
    divisions,
  }
}

export default useRanks
