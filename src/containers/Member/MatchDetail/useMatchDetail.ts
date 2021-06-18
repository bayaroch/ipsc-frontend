import { useEffect } from 'react'
import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/match'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import { MatchItem } from '@store/match/actions/types'

const { selectors, actions } = searchStore
const getDetailMeta = createMetaSelector(actions.getMatch)

const useMatchDetail = (): {
  meta: Meta
  detail: MatchItem
  getDetail: (id: string) => void
} => {
  useEffect(() => {
    dispatch(actions.clearMatchData())
  }, [])
  const dispatch = useDispatch()
  const meta = useSelector(getDetailMeta)
  const detail = useSelector(selectors.matchDetail)
  const getDetail = (id: string) => dispatch(actions.getMatch(id))

  return { meta, detail, getDetail }
}

export default useMatchDetail
