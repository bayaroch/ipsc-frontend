import { useEffect } from 'react'
import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/match'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import { MatchItem } from '@store/match/actions/types'
import { RegisterMatchParams } from '@services/match.services'
import { user, category as cat } from '@store/auth/selectors'
import { UserData } from '@services/auth.services'
import { CATEGORY } from '@constants/user.constants'

const { selectors, actions } = searchStore
const getDetailMeta = createMetaSelector(actions.getMatch)

const useMatchDetail = (): {
  meta: Meta
  detail: MatchItem
  getDetail: (id: string) => void
  register: (params: RegisterMatchParams) => void
  userData: UserData
  category: CATEGORY
} => {
  useEffect(() => {
    dispatch(actions.clearMatchData())
  }, [])
  const dispatch = useDispatch()
  const meta = useSelector(getDetailMeta)
  const detail = useSelector(selectors.matchDetail)
  const getDetail = (id: string) => dispatch(actions.getMatch(id))
  const register = (params: RegisterMatchParams) => {
    dispatch(actions.registerMatch(params))
  }
  const userData = useSelector(user)
  const category = useSelector(cat)

  return { meta, detail, getDetail, register, userData, category }
}

export default useMatchDetail
