import { useEffect } from 'react'
import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/match'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import { MatchItem } from '@store/match/actions/types'
import {
  MatchFile,
  ParticipantsItem,
  RegisterMatchData,
  RegisterMatchParams,
  UpdateMatchParams,
} from '@services/match.services'
import { category as cat, user } from '@store/auth/selectors'
import { CATEGORY } from '@constants/user.constants'
import { support as SP } from '@store/support/selectors'
import {
  DivisionScoreList,
  ParticipantSortedList,
} from '@store/match/selectors/helpers'
import { SupportState } from '@store/support/reducers'
import {
  matchHTMLFiles,
  matchPublicGuests,
  registerMatch,
} from '@store/match/selectors'
import _ from 'lodash'
import { helper } from '@utils/helpers/common.helper'
import { MATCH_PROGRESS_STATUS } from '@constants/common.constants'
import { participantsStat } from '@store/participants/selectors'
import { StatItem } from '@services/participant.service'
import { getParticipantsStat } from '@store/participants/actions'
import { joinTeam, listTeam } from '@store/team/actions'
import { teams } from '@store/team/selectors'
import { TeamItem, TeamJoinParams } from '@services/team.service'
import { UserData } from '@services/auth.services'

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
  waitingList: ParticipantsItem[]
  stat: StatItem[]
  getStat: (id: string) => void
  guest: ParticipantsItem[]
  getMatchFiles: (id: string) => void
  fileList: MatchFile[]
  getTeams: (id: string) => void
  myTeams: TeamItem[]
  allTeams: TeamItem[]
  currentUser: UserData
  join: (params: TeamJoinParams) => void
} => {
  const dispatch = useDispatch()
  const meta = useSelector(getDetailMeta)
  const detail = useSelector(selectors.matchDetail)
  const participants = _.get(detail, 'participants', [])
  const participantsFiltered = useSelector(selectors.matchParticipants)
  const waitingList = useSelector(selectors.waitingList)
  const scoreFiltered = useSelector(selectors.matchScorebyDivision)
  const getDetail = (id: string) => dispatch(actions.getMatch(id))
  const getStat = (id: string) => dispatch(getParticipantsStat(id))
  const register = (params: RegisterMatchParams) => {
    dispatch(actions.registerMatch(params))
  }
  const join = (params: TeamJoinParams) => dispatch(joinTeam(params))
  const currentUser = useSelector(user)
  const allTeams = useSelector(teams)
  const myTeams = allTeams
    ? _.filter(allTeams, (t: TeamItem) => {
        return _.find(t.team_members, { user: { id: currentUser.id } })
          ? true
          : false
      })
    : []
  const fileList = useSelector(matchHTMLFiles)

  const update = (params: UpdateMatchParams) => {
    dispatch(actions.updateRegisterMatch(params))
  }

  const getMatchFiles = (id: string) => {
    dispatch(actions.getMatchFileList(id))
  }

  const category = useSelector(cat)
  const support = useSelector(SP)
  const registerState = useSelector(registerMatch)
  const progress = helper.matchStatusTitle(detail)
  const stat = useSelector(participantsStat)
  const guest = useSelector(matchPublicGuests)
  const getTeams = (id: string) => dispatch(listTeam({ match_id: id }))

  useEffect(() => {
    dispatch(actions.clearMatchData())
  }, [])

  return {
    meta,
    getStat,
    detail,
    getDetail,
    join,
    register,
    category,
    getMatchFiles,
    support,
    participantsFiltered,
    participants,
    update,
    progress,
    stat,
    registerState,
    guest,
    waitingList,
    scoreFiltered,
    fileList,
    getTeams,
    myTeams,
    currentUser,
    allTeams,
  }
}

export default useMatchDetail
