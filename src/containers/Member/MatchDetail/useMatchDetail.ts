import { useEffect } from 'react'
import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/match'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import { MatchItem } from '@store/match/actions/types'
import {
  ParticipantsItem,
  RegisterMatchData,
  RegisterMatchParams,
} from '@services/match.services'
import { user, category as cat } from '@store/auth/selectors'
import { UserData } from '@services/auth.services'
import { CATEGORY } from '@constants/user.constants'
import { support as SP } from '@store/support/selectors'
import { ParticipantSortedList } from '@store/match/selectors/helpers'
import { SupportState } from '@store/support/reducers'
import { registerMatch } from '@store/match/selectors'
import _ from 'lodash'

const { selectors, actions } = searchStore
const getDetailMeta = createMetaSelector(actions.getMatch)

const useMatchDetail = (): {
  meta: Meta
  detail: MatchItem
  getDetail: (id: string) => void
  register: (params: RegisterMatchParams) => void
  update: (params: RegisterMatchParams) => void
  userData: UserData
  category: CATEGORY
  support: SupportState
  participantsFiltered: ParticipantSortedList
  participants: ParticipantsItem[]
  registerState: RegisterMatchData
} => {
  useEffect(() => {
    dispatch(actions.clearMatchData())
  }, [])
  const dispatch = useDispatch()
  const meta = useSelector(getDetailMeta)
  const detail = useSelector(selectors.matchDetail)
  const participants = _.get(detail, 'participants', [])
  const participantsFiltered = useSelector(selectors.matchParticipants)
  const getDetail = (id: string) => dispatch(actions.getMatch(id))
  const register = (params: RegisterMatchParams) => {
    dispatch(actions.registerMatch(params))
  }
  const update = (params: RegisterMatchParams) => {
    dispatch(actions.updateRegisterMatch(params))
  }
  const userData = useSelector(user)
  const category = useSelector(cat)
  const support = useSelector(SP)
  const registerState = useSelector(registerMatch)

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
    update,
    registerState,
  }
}

export default useMatchDetail