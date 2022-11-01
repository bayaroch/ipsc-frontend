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
import {
  joinTeam as join,
  listTeam,
  leaveTeam as leave,
  createTeam,
  deleteTeam,
} from '@store/team/actions'
import { teams } from '@store/team/selectors'
import {
  TeamCreateParams,
  TeamItem,
  TeamJoinParams,
  TeamLeaveParams,
} from '@services/team.service'
import { UserData } from '@services/auth.services'
import { SquadJoinParams } from '@services/squad.services'
import { registerThenSquadJoin } from '@store/match/actions'
import {
  RoItem,
  RoJoinParams,
  RoListParams,
  RoUpdateParams,
} from '@services/ro.services'
import { roDelete, roJoin, roList, roUpdate } from '@store/ro/actions'
import { matchRo } from '@store/ro/selectors'

const { selectors, actions } = searchStore
const getDetailMeta = createMetaSelector(actions.getMatch)
const createTeamMeta = createMetaSelector(createTeam)

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
  getTeams: (id: string, dId?: string) => void
  myTeams: TeamItem[]
  allTeams: TeamItem[]
  currentUser: UserData
  joinTeam: (params: TeamJoinParams) => void
  leaveTeam: (params: TeamLeaveParams) => void
  registerThenJoin: (
    params: RegisterMatchParams,
    squadParams: SquadJoinParams
  ) => void
  teamCreate: (params: TeamCreateParams) => void
  createMeta: Meta
  teamDelete: (id: string) => void
  joinRo: (params: RoJoinParams) => void
  matchRoList: RoItem[]
  getRo: (params: RoListParams) => void
  updateRo: (params: RoUpdateParams) => void
  deleteRo: (params: number) => void
} => {
  const dispatch = useDispatch()
  const meta = useSelector(getDetailMeta)
  const createMeta = useSelector(createTeamMeta)
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
  const joinTeam = (params: TeamJoinParams) => dispatch(join(params))
  const leaveTeam = (params: TeamLeaveParams) => dispatch(leave(params))
  const updateRo = (params: RoUpdateParams) => dispatch(roUpdate(params))
  const deleteRo = (params: number) => dispatch(roDelete(params))
  const joinRo = (params: RoJoinParams) => dispatch(roJoin(params))
  const getRo = (params: RoListParams) => dispatch(roList(params))
  const matchRoList = useSelector(matchRo)
  const registerThenJoin = (
    params: RegisterMatchParams,
    squadParams: SquadJoinParams
  ) => dispatch(registerThenSquadJoin(params, squadParams))
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
  const getTeams = (id: string, dId?: string) =>
    dispatch(listTeam({ match_id: id, division_id: dId }))

  const teamCreate = (params: TeamCreateParams) => dispatch(createTeam(params))
  const teamDelete = (id: string) => dispatch(deleteTeam(id))

  void useEffect(() => {
    dispatch(actions.clearMatchData())
  }, [])

  return {
    meta,
    updateRo,
    joinRo,
    teamDelete,
    teamCreate,
    getStat,
    getRo,
    matchRoList,
    detail,
    getDetail,
    joinTeam,
    register,
    category,
    getMatchFiles,
    support,
    deleteRo,
    participantsFiltered,
    registerThenJoin,
    createMeta,
    participants,
    update,
    progress,
    stat,
    registerState,
    guest,
    waitingList,
    leaveTeam,
    scoreFiltered,
    fileList,
    getTeams,
    myTeams,
    currentUser,
    allTeams,
  }
}

export default useMatchDetail
