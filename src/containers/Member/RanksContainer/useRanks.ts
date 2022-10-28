import { createMetaSelector } from '@store/metadata/selectors'
import { Meta } from '@store/metadata/actions/types'
import { useSelector, useDispatch } from 'react-redux'
import searchStore from '@store/match'
import { fetchRanks } from '@store/match/actions'
import { rankResult, RanksItem } from '@store/match/selectors'
import { support as sup } from '@store/support/selectors'
import { SupportItem } from '@services/support.services'
import { DivisionScoreList } from '@store/match/selectors/helpers'
import { MatchItem } from '@store/match/actions/types'

const { selectors, actions } = searchStore

const rankMeta = createMetaSelector(actions.ranksByDivisionList)

const useRanks = (): {
  list: RanksItem[]
  ranks: () => void
  meta: Meta
  divisions: SupportItem[]
  getDetail: (id: string) => void
  classes: SupportItem[]
  scoreFiltered: DivisionScoreList
  detail: MatchItem
} => {
  const dispatch = useDispatch()
  const list = useSelector(rankResult)
  const meta: Meta = useSelector(rankMeta)
  const { divisions, classes } = useSelector(sup)
  const getDetail = (id: string) => dispatch(actions.getMatch(id))
  const scoreFiltered = useSelector(selectors.matchScorebyDivision)
  const detail = useSelector(selectors.matchDetail)

  const ranks = () => {
    dispatch(fetchRanks())
  }

  return {
    meta,
    list,
    ranks,
    divisions,
    classes,
    getDetail,
    scoreFiltered,
    detail,
  }
}

export default useRanks
