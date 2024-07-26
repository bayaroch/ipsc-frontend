/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  TableRow,
  Card,
  CardContent,
  CardHeader,
  TableCell,
} from '@mui/material/'
import useMatchDetail from './useMatchDetail'
import _ from 'lodash'
import ContentBox from '@components/admin/ContentBox'
import { Colors } from '@theme/colors'
import MatchRegistration from '@components/member/MatchRegistration'
import ParticipantsTable from '@components/member/ParticipantsTable'
import { helper } from '@utils/helpers/common.helper'
import About from './About'
import Info from './Info'
import TimeBox from './TimeBox'
import Participants from './Participants'
import DownloadCSV from './DownloadCSV'
import { USER_TYPE } from '@constants/user.constants'
import { UserData } from '@services/auth.services'
import useToast from '@utils/hooks/useToast'
import MemberList from './MemberList'
import Score from './Scores'
import HTMLParser from '@components/common/HtmlParser'
import WaitingTable from '@components/member/ParticipantsTable/WaitingTable'
import StatTable from '@components/member/ParticipantsTable/StatTable'
import PaperTable from '@components/common/PaperTable'
import { ParticipantsItem } from '@services/match.services'
import MatchFiles from './MatchFiles'
import Teams from './Teams'
import useSquadJoin from '../SquadJoinContainer/useSquadJoin'
import { SquadChangeParams, SquadJoinParams } from '@services/squad.services'
import TeamCreateDialog from '../Team/TeamCreateDialog'
import SquadList from '@components/admin/SquadList'
import RoList from './RoList'
import { SquadHelper } from '@store/squads/reducers/helpers'
import { useConfirm } from 'material-ui-confirm'

interface MatchDetailProps {
  id: string
  userData: UserData
}

const MatchDetail: React.FC<MatchDetailProps> = ({ id, userData }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [openTeam, setTeamCreate] = useState<boolean>(false)
  const [member, setMember] = useState<boolean>(false)
  const [fileOpen, setFileOpen] = useState<boolean>(false)
  const {
    detail,
    meta,
    getDetail,
    register,
    category,
    participantsFiltered,
    waitingList,
    support,
    stat,
    getStat,
    participants,
    getTeams,
    leaveTeam,
    guest,
    scoreFiltered,
    progress,
    joinTeam,
    getMatchFiles,
    getRo,
    joinRo,
    updateRo,
    matchRoList,
    createMeta,
    teamCreate,
    fileList,
    teamDelete,
    update,
    registerState,
    allTeams,
    currentUser,
    myTeams,
    deleteRo,
    registerThenJoin,
  } = useMatchDetail()

  const { listMeta, join, change, list } = useSquadJoin(id)
  const confirm = useConfirm()
  const isRegistered = participants.find(
    (user) => user?.user?.id === userData?.id
  )
  const verifiedParticipants = participants.filter(
    (item) => item.is_verified === true
  )
  const isRo = !_.isEmpty(userData && userData.mo_badge)
  const isAdmin = userData?.usertype === USER_TYPE.USER_ADMIN

  const { addToast } = useToast()

  const isRegisterActive = helper.isRegisterActive(
    _.get(detail, 'registration_start', ''),
    _.get(detail, 'registration_end', '')
  )

  // const isSquadRegister = helper.isRegisterActive(
  //   _.get(detail, 'registration_start', ''),
  //   _.get(detail, 'match_start', '')
  // )

  const isBeforeMatch = helper.isBeforeMatch(_.get(detail, 'match_start', ''))
  const isJoinActive =
    isBeforeMatch && matchRoList
      ? !matchRoList.find((m) => m.user_id === currentUser.id)
        ? true
        : false
      : true
  const isOpenOnly = !isRegisterActive && isBeforeMatch

  const myRegistration = _.find(participants, (p) => p.user_id === userData.id)

  const myDivisionId = myRegistration?.division_id

  useEffect(() => {
    if (id) {
      getDetail(id)
      getStat(id)
      getMatchFiles(id)
      getRo({
        id: Number(id),
      })
    }
  }, [id])

  useEffect(() => {
    if (myDivisionId && id) {
      getTeams(id)
    }
  }, [myDivisionId])

  useEffect(() => {
    if (registerState && id) {
      getDetail(id)
      getStat(id)
    }
  }, [registerState])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const renderSquadList = () => {
    if (
      !_.isEmpty(list) &&
      !listMeta.pending &&
      listMeta.loaded &&
      !listMeta.error &&
      listMeta
    ) {
      return (
        <Box>
          <SquadList
            isEdit={isRegisterActive && isRegistered?.is_verified == 1}
            userId={userData.id}
            onSelectChange={(id) => onSelectChange(id)}
            onExpandMembers={() => null}
            list={list}
            filteredBy={verifiedParticipants}
          />
        </Box>
      )
    }
    return null
  }

  const onSelectChange = (id: number) => {
    const existSquad = SquadHelper.isExist(list, userData.id)

    const existInThis = SquadHelper.isExistInThis(list, userData.id, id)
    // const selected = _.filter(list, (s) => s.id == id)[0].squad_members
    const selected = verifiedParticipants && verifiedParticipants.length> 0 ?  _.filter(list, (s) => s.id == id)[0].squad_members.filter((item) => verifiedParticipants.map((item) => item.user_id).includes(item.user_id)) : _.filter(list, (s) => s.id == id)[0].squad_members
    const max = selected.length >= detail.per_squad

    if (!existInThis && !max) {
      confirm({
        title: 'Скуад сонголт',
        description: existSquad
          ? 'Та скуад өөрчлөх гэж байна.'
          : 'Та шинээр скуад сонгож байна',
        confirmationText: 'Тийм',
        cancellationText: 'Үгүй',
      })
        .then(() => {
          if (existSquad) {
            const params: SquadChangeParams = {
              data: {
                squad_id: id,
                user_id: userData.id,
                is_rm: false,
                is_ro: false,
                notify_squad_id: null,
              },
              id: existSquad,
            }

            change(params)
          }
        })
        .catch(() => {
          // setSelectedData(undefined)
        })
    } else if (max && !existInThis) {
      confirm({
        title: 'Скуад дүүрсэн байна.',
        description: `Тэмцээний нэг скуадад орох оролцогчдын хязгаар: ${detail.per_squad}.`,
        confirmationText: 'Ок',
        cancellationText: null,
      })
        .then(() => null)
        .catch(() => {
          // setSelectedData(undefined)
        })
    }
  }

  const handleRegister = (
    division: number,
    is_ro: number,
    team_id: number | null
  ) => {
    setOpen(false)
    if (id && userData.class_id) {
      const params = {
        match_id: Number(id),
        user_id: userData.id,
        division_id: division,
        category_id: category,
        class_id: userData.class_id,
        is_ro: is_ro,
        remark: null,
        is_verified: detail.is_practice === true ? true : false,
        team_id: team_id,
      }
      register(params)
    }
  }

  const handleRegisterThenJoin = (
    division: number,
    category_id: number,
    is_ro: number,
    team_id: number | null,
    squadParams: SquadJoinParams
  ) => {
    setOpen(false)
    // eslint-disable-next-line no-console
    if (id && userData.class_id) {
      const params = {
        match_id: Number(id),
        user_id: userData.id,
        division_id: division,
        category_id: category_id ? category_id : category,
        class_id: userData.class_id,
        is_ro: is_ro,
        remark: null,
        is_verified: detail.is_practice === true ? true : false,
        team_id: team_id,
      }
      registerThenJoin(params, squadParams)
    }
  }

  const handleUpdate = (
    division: number,
    category_id: number,
    is_ro: number,
    team_id: number | null
  ) => {
    setOpen(false)
    if (id && userData.class_id && isRegistered) {
      const params = {
        data: {
          match_id: Number(id),
          user_id: userData.id,
          division_id: division,
          category_id: category_id ? category_id : category,
          class_id: userData.class_id,
          is_ro: is_ro,
          team_id: team_id,
        },
        id: isRegistered.id,
      }
      update(params)
    }
  }

  const renderLoader = () => {
    if (!meta.loaded && meta.pending && !meta.error) {
      return (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 300,
          }}
        >
          <Box className="dot-flashing" />
        </Box>
      )
    }
    return null
  }

  const renderRegisterButton = () => {
    if (
      (_.isEmpty(participants) && isRegisterActive) ||
      (!isRegistered && isRegisterActive)
    ) {
      return (
        <Button
          type="submit"
          onClick={() => handleClickOpen()}
          variant="contained"
          color="primary"
        >
          Бүртгүүлэх
        </Button>
      )
    } else if (isRegistered && !_.isEmpty(participants) && isBeforeMatch) {
      return (
        <Button
          type="submit"
          onClick={() => handleClickOpen()}
          variant="contained"
          color="primary"
        >
          Бүртгэл Өөрчлөх
        </Button>
      )
    }
    return <Box></Box>
  }

  const renderTeamCreateButton = () => {
    if (
      !meta.pending &&
      !meta.error &&
      support.divisions
    ) {
      return (
        support.divisions.filter(div => detail.match_divisions.filter(item => item.is_team_result == true).map((item) => item.division_id).includes(div.id)).length > 0 ?
        <Button
          type="submit"
          onClick={() => setTeamCreate(true)}
          variant="contained"
          color="secondary"
        >
          Баг үүсгэх
        </Button> : null
      )
    }
  }

  const renderGuestRow = (data: ParticipantsItem, index: number) => {
    const { user } = data
    return (
      <TableRow key={index}>
        <TableCell>{user.usercode}</TableCell>
        <TableCell>
          {user.lastname} {user.firstname}
        </TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.phone_no}</TableCell>
        <TableCell>{user.register_no}</TableCell>
        <TableCell>{user.is_main_club === 1 ? 'Төв клуб' : ''}</TableCell>
        <TableCell>{user.remark_other}</TableCell>
      </TableRow>
    )
  }

  const renderContent = () => {
    if (
      !meta.pending &&
      !meta.error &&
      meta.loaded &&
      detail &&
      support.divisions &&
      support.class
    ) {
      return (
        <>
          <MatchRegistration
            userData={userData}
            maxSquad={detail.per_squad}
            change={change}
            join={join}
            myTeams={myTeams}
            isRegsiterActive={isRegisterActive}
            myRegistration={myRegistration}
            id={id}
            isRo={isRo}
            validate={(v) => addToast({ message: v, severity: 'warning' })}
            open={open}
            divisions={support.divisions}
            match_divisions={detail.match_divisions}
            squadList={list}
            squadMeta={listMeta}
            isOpenOnly={isOpenOnly}
            isRegistered={isRegistered ? true : false}
            filteredBy={verifiedParticipants}
            onRegister={handleRegister}
            onRegisterThenJoin={handleRegisterThenJoin}
            onUpdate={handleUpdate}
            handleClose={handleClose}
          />
          {openTeam && (
            <TeamCreateDialog
              currentMatch={Number(id)}
              handleClose={() => setTeamCreate(false)}
              create={teamCreate}
              createMeta={createMeta}
              open={openTeam}
              divisions={
                support.divisions.filter(div => detail.match_divisions.filter(item => item.is_team_result == true).map((item) => item.division_id).includes(div.id))
              }
              currentId={currentUser.id}
            />
          )}

          <Box
            sx={{
              width: '100%',
              position: 'relative',
              zIndex: 100,
              backgroundColor: '#eee',
              background: "url('/images/placeholder.png')",
              backgroundSize: 'cover',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              padding: {
                xl: '0',
                lg: '20px 0 20px 0',
                sm: '70px 0 10px 0',
                xs: '70px 0 10px 0',
              },
              '&:after': {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                content: "''",
                position: 'absolute',
                zIndex: 10,
                backgroundColor: 'rgba(43, 80, 237, 0.5)',
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: Colors.white,
                position: 'relative',
                zIndex: 100,
                padding: '30px 0',
              }}
              align="center"
            >
              {detail.name}
            </Typography>
            <br />
          </Box>
          <ContentBox>
            <section style={{ paddingTop: 15, paddingBottom: 15 }}>
              <Box sx={{ width: '100%' }}>
                <Grid container spacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}>
                  <Grid item xs={12} lg={4}>
                    <Box mb={6}>
                      <TimeBox detail={detail} />
                    </Box>
                    <Box mb={6}>
                      <About detail={detail} progress={progress} />
                    </Box>
                    <Box mb={6}>
                      <Participants
                        openList={() => {
                          setMember(true)
                        }}
                        detail={detail}
                      />
                    </Box>
                    <Box mb={6}>
                      <Paper>
                        {!_.isEmpty(detail.sponsor_info) ? (
                          <Info
                            detail={
                              <Typography>{detail.sponsor_info}</Typography>
                            }
                            title="Скуад"
                          />
                        ) : null}
                      </Paper>
                    </Box>
                    <Box mb={6}>
                      <Paper>
                        {!_.isEmpty(detail.tax_info) ? (
                          <Info
                            detail={
                              <Typography component="span">
                                <HTMLParser
                                  html={detail.tax_info ? detail.tax_info : ''}
                                />
                              </Typography>
                            }
                            title="Tax Info"
                          />
                        ) : null}
                      </Paper>
                    </Box>
                    <Box mb={6}>
                      {isRo || isAdmin ? (
                        <DownloadCSV
                          currentUser={currentUser}
                          joinAsRo={(params) => {
                            if (isRo || isAdmin) {
                              joinRo(params)
                            }
                          }}
                          isJoinActive={isJoinActive}
                          id={id}
                        />
                      ) : null}
                    </Box>
                    <Box>
                      {!_.isEmpty(fileList) ? (
                        <Card
                          sx={{
                            '& .Cmt-header-root': {
                              paddingTop: 3,
                              paddingBottom: 0,
                            },
                          }}
                        >
                          <CardHeader
                            sx={{ borderBottom: '1px solid #eee' }}
                            title="Тэмцээний онооны файлууд"
                          ></CardHeader>
                          <CardContent>
                            <Box>
                              <Button
                                variant="outlined"
                                fullWidth
                                onClick={() => setFileOpen(true)}
                              >
                                Тэмцээний онооны файлууд харах
                              </Button>
                            </Box>
                          </CardContent>
                        </Card>
                      ) : null}
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={8}>
                    <Box mb={6}>
                      <Paper>
                        {!_.isEmpty(detail.additional_info) ? (
                          <Info
                            detail={
                              <Typography component="span">
                                <HTMLParser
                                  html={detail.additional_info ? detail.additional_info : ''}
                                />
                              </Typography>
                            }
                            title="Нэмэлт мэдээлэл"
                          />
                        ) : null}
                      </Paper>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </section>

            {!_.isEmpty(matchRoList) ? (
              <>
                <RoList
                  roData={matchRoList}
                  update={updateRo}
                  isAdmin={isAdmin}
                  deleteRo={deleteRo}
                />
              </>
            ) : null}

            {!_.isEmpty(participantsFiltered) ? (
              <>
                <ParticipantsTable
                  classData={support.class}
                  divisions={support.divisions}
                  data={participantsFiltered}
                />
              </>
            ) : null}

            {!_.isEmpty(waitingList) ? (
              <>
                <Box
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  padding={3}
                >
                  <Typography variant="h3">Хүлээлгийн жагсаалт</Typography>
                </Box>
                <WaitingTable
                  data={waitingList}
                  classData={support.class}
                  divisions={support.divisions}
                />
              </>
            ) : null}

            {!_.isEmpty(scoreFiltered) ? (
              <Score
                classData={support.class}
                divisions={support.divisions}
                data={scoreFiltered}
                isAdmin={isAdmin}
              />
            ) : null}

            {!_.isEmpty(stat) ? (
              <>
                <Box
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                  padding={3}
                >
                  <Typography variant="h3">Оролцогчдын мэдээлэл</Typography>
                  <Typography>/хүлээлгийн жагсаалт хамаарахгүй/</Typography>
                </Box>
                <StatTable data={stat} />
              </>
            ) : null}

            {(isAdmin && detail.is_public) || (isRo && detail.is_public) ? (
              <>
                <Box
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  padding={3}
                >
                  <Typography variant="h3">Зочин оролцогчид</Typography>
                </Box>
                <PaperTable
                  tableProps={{
                    sx: {
                      minWidth: 1100,
                      '& .MuiTableCell-root': {
                        p: 1,
                        borderLeft: '1px solid rgba(224, 224, 224, 1)',
                        maxWidth: 90,
                        fontSize: 13,
                      },
                    },
                  }}
                  head={
                    <>
                      <TableRow>
                        <TableCell sx={{ width: 40 }} align="center">
                          ID
                        </TableCell>
                        <TableCell align="center">Нэр</TableCell>
                        <TableCell align="center">Имэйл</TableCell>
                        <TableCell align="center">Утас</TableCell>
                        <TableCell align="center">Регистр</TableCell>
                        <TableCell align="center">Төв клуб</TableCell>
                        <TableCell align="center">Бусад</TableCell>
                      </TableRow>
                    </>
                  }
                  renderRow={renderGuestRow}
                  data={guest}
                />
              </>
            ) : null}

            {support && currentUser && allTeams && (
              <>
                <Box
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  padding={3}
                >
                  <Typography variant="h3">Багууд</Typography>
                </Box>
                <Teams
                  leaveTeam={leaveTeam}
                  currentUser={currentUser}
                  teams={allTeams}
                  myDivisionId={myDivisionId}
                  deleteTeam={teamDelete}
                  joinTeam={joinTeam}
                />
              </>
            )}

            {renderSquadList()}

            <Box
              display="flex"
              justifyContent="space-between"
              mt={5}
              alignItems="center"
            >
              {renderRegisterButton()}
              {renderTeamCreateButton()}
            </Box>
          </ContentBox>
        </>
      )
    }
  }

  return (
    <Box>
      <>
        {renderLoader()}
        {renderContent()}

        {detail && (
          <MemberList
            handleClose={() => setMember(false)}
            members={detail.participants}
            open={member}
          />
        )}
        {!_.isEmpty(fileList) && (
          <MatchFiles
            handleClose={() => setFileOpen(false)}
            files={fileList}
            open={fileOpen}
          />
        )}
      </>
    </Box>
  )
}

export default MatchDetail
