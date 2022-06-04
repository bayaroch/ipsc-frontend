import { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  TableRow,
  TableCell,
} from '@mui/material/'
import useMatchDetail from './useMatchDetail'
import _ from 'lodash'
import ContentBox from '@components/admin/ContentBox'
import { Colors } from '@theme/colors'
import MatchDivisionPicker from '@components/member/MatchDivisionPicker'
import ParticipantsTable from '@components/member/ParticipantsTable'
import { useRouter } from 'next/router'
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

interface MatchDetailProps {
  id: string
  userData: UserData
}

const MatchDetail: React.FC<MatchDetailProps> = ({ id, userData }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [member, setMember] = useState<boolean>(false)
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
    guest,
    scoreFiltered,
    progress,
    update,
    registerState,
  } = useMatchDetail()

  const isRegistered = participants.find(
    (user) => user?.user?.id === userData?.id
  )
  const isRo = !_.isEmpty(userData && userData.mo_badge)
  const isAdmin = userData?.usertype === USER_TYPE.USER_ADMIN

  const { addToast } = useToast()

  const isRegisterActive = helper.isRegisterActive(
    _.get(detail, 'registration_start', ''),
    _.get(detail, 'registration_end', '')
  )

  const isSquadRegister = helper.isRegisterActive(
    _.get(detail, 'registration_start', ''),
    _.get(detail, 'match_start', '')
  )

  const isBeforeMatch = helper.isBeforeMatch(_.get(detail, 'match_start', ''))

  const isOpenOnly = !isRegisterActive && isBeforeMatch

  const router = useRouter()

  useEffect(() => {
    if (id) {
      getDetail(id)
      getStat(id)
    }
  }, [id])

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

  const handleRegister = (division: number, is_ro: number) => {
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
      }
      register(params)
    }
  }

  const handleUpdate = (division: number, is_ro: number) => {
    setOpen(false)
    if (id && userData.class_id && isRegistered) {
      const params = {
        data: {
          match_id: Number(id),
          user_id: userData.id,
          division_id: division,
          category_id: category,
          class_id: userData.class_id,
          is_ro: is_ro,
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

  const renderSquadButton = () => {
    if (isRegistered && isSquadRegister) {
      return (
        <Button
          onClick={() => router.push(`/member/squad/${id}`)}
          variant="contained"
          color="secondary"
        >
          Ээлж сонгох
        </Button>
      )
    }
    return null
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

  // eslint-disable-next-line no-console
  console.log(guest)

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
          <MatchDivisionPicker
            isRo={isRo}
            validate={(v) => addToast({ message: v, severity: 'warning' })}
            open={open}
            divisions={support.divisions}
            isOpenOnly={isOpenOnly}
            onSubmit={
              _.isEmpty(participants) || !isRegistered
                ? handleRegister
                : handleUpdate
            }
            handleClose={handleClose}
          />
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
                            title="Спонсор"
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
                      {isRo || isAdmin ? <DownloadCSV id={id} /> : null}
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={8}>
                    <Box mb={6}>
                      <Paper>
                        {!_.isEmpty(detail.additional_info) ? (
                          <Info
                            detail={detail.additional_info}
                            title="Нэмэлт мэдээлэл"
                          />
                        ) : null}
                      </Paper>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </section>
            {_.isEmpty(scoreFiltered) ? (
              <>
                <ParticipantsTable
                  classData={support.class}
                  divisions={support.divisions}
                  data={participantsFiltered}
                />
              </>
            ) : null}

            {_.isEmpty(scoreFiltered) ? (
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

            {isAdmin || isRo ? (
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

            <Box
              display="flex"
              justifyContent="space-between"
              mt={5}
              alignItems="center"
            >
              {renderRegisterButton()}
              {renderSquadButton()}
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
      </>
    </Box>
  )
}

export default MatchDetail
