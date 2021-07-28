import { useEffect } from 'react'
import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/match'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import { MatchItem } from '@store/match/actions/types'
import { ParticipantsItem, RegisterMatchParams } from '@services/match.services'
import { user, category as cat } from '@store/auth/selectors'
import { UserData } from '@services/auth.services'
import { CATEGORY } from '@constants/user.constants'
import { support as SP } from '@store/support/selectors'
import { ParticipantSortedList } from '@store/match/selectors/helpers'
import { SupportState } from '@store/support/reducers'

const { selectors, actions } = searchStore
const getDetailMeta = createMetaSelector(actions.getMatch)

const useMatchDetail = (): {
  meta: Meta
  detail: MatchItem
  getDetail: (id: string) => void
  register: (params: RegisterMatchParams) => void
  userData: UserData
  category: CATEGORY
  support: SupportState
  participantsFiltered: ParticipantSortedList
  participants: ParticipantsItem[]
} => {
  useEffect(() => {
    dispatch(actions.clearMatchData())
  }, [])
  const dispatch = useDispatch()
  const meta = useSelector(getDetailMeta)
  const detail = useSelector(selectors.matchDetail)
  const participants = detail.participants
  const participantsFiltered = useSelector(selectors.matchParticipants)
  const getDetail = (id: string) => dispatch(actions.getMatch(id))
  const register = (params: RegisterMatchParams) => {
    dispatch(actions.registerMatch(params))
  }
  const userData = useSelector(user)
  const category = useSelector(cat)
  const support = useSelector(SP)

  return {
    meta,
    detail,
    getDetail,
    register,
    userData,
    category,
    support,
    participantsFiltered,
    participants,
  }
}

export default useMatchDetail
