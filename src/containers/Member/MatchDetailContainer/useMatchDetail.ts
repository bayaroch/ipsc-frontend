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
  UpdateMatchParams,
} from '@services/match.services'
import { category as cat } from '@store/auth/selectors'
import { CATEGORY } from '@constants/user.constants'
import { support as SP } from '@store/support/selectors'
import {
  DivisionScoreList,
  ParticipantSortedList,
} from '@store/match/selectors/helpers'
import { SupportState } from '@store/support/reducers'
import { registerMatch } from '@store/match/selectors'
import _ from 'lodash'
import { helper } from '@utils/helpers/common.helper'
import { MATCH_PROGRESS_STATUS } from '@constants/common.constants'

const { selectors, actions } = searchStore
const getDetailMeta = createMetaSelector(actions.getMatch)

const useMatchDetail = (): {
  meta: Meta
  detail: MatchItem
  getDetail: (id: string) => void
  register: (params: RegisterMatchParams) => void
  update: (params: UpdateMatchParams) => void
  category: CATEGORY
  support: SupportState
  participantsFiltered: ParticipantSortedList
  participants: ParticipantsItem[]
  progress: { id: MATCH_PROGRESS_STATUS; value: string }
  registerState: RegisterMatchData
  scoreFiltered: DivisionScoreList
} => {
  const dispatch = useDispatch()
  const meta = useSelector(getDetailMeta)
  const detail = useSelector(selectors.matchDetail)
  const participants = _.get(detail, 'participants', [])
  const participantsFiltered = useSelector(selectors.matchParticipants)
  const scoreFiltered = useSelector(selectors.matchScorebyDivision)
  const getDetail = (id: string) => dispatch(actions.getMatch(id))
  const register = (params: RegisterMatchParams) => {
    dispatch(actions.registerMatch(params))
  }
  const update = (params: UpdateMatchParams) => {
    dispatch(actions.updateRegisterMatch(params))
  }

  const category = useSelector(cat)
  const support = useSelector(SP)
  const registerState = useSelector(registerMatch)
  const progress = helper.matchStatusTitle(detail)

  useEffect(() => {
    dispatch(actions.clearMatchData())
  }, [])

  return {
    meta,
    detail,
    getDetail,
    register,
    category,
    support,
    participantsFiltered,
    participants,
    update,
    progress,
    registerState,
    scoreFiltered,
  }
}

export default useMatchDetail
