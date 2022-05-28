import { createMetaSelector } from '@store/metadata/selectors'
import { Meta } from '@store/metadata/actions/types'
import { useSelector, useDispatch } from 'react-redux'
import searchStore from '@store/match'
import { fetchRanks } from '@store/match/actions'
import { rankResultByUser } from '@store/match/selectors'
import { support as sup } from '@store/support/selectors'
import { SupportItem } from '@services/support.services'
import { GroupedRankItem } from '@store/match/selectors/helpers'

const { actions } = searchStore

const rankMeta = createMetaSelector(actions.ranksByDivisionList)

const useRanks = (): {
  list: GroupedRankItem[]
  ranks: (division_id: string) => void
  meta: Meta
  divisions: SupportItem[]
} => {
  const dispatch = useDispatch()
  const list = useSelector(rankResultByUser)
  const meta: Meta = useSelector(rankMeta)
  const { divisions } = useSelector(sup)

  const ranks = (division_id: string) => {
    dispatch(fetchRanks(division_id))
  }

  return {
    meta,
    list,
    ranks,
    divisions,
  }
}

export default useRanks
