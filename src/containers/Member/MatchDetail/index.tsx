import { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  Icon,
  Divider,
  Paper,
  Button,
  Chip,
} from '@mui/material/'
import useMatchDetail from './useMatchDetail'
import _ from 'lodash'
import ContentBox from '@components/admin/ContentBox'
import { Colors } from '@theme/colors'
import moment from 'moment'
import MatchDivisionPicker from '@components/member/MatchDivisionPicker'
import ParticipantsTable from '@components/member/ParticipantsTable'
import { useRouter } from 'next/router'
import { helper } from '@utils/helpers/common.helper'

interface MatchDetailProps {
  id: string
}

const MatchDetail: React.FC<MatchDetailProps> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false)
  const {
    detail,
    meta,
    getDetail,
    register,
    userData,
    category,
    participantsFiltered,
    support,
    participants,
    progress,
    update,
    registerState,
  } = useMatchDetail()

  const isRegistered = participants.find((user) => user.user.id === userData.id)

  const isRegisterActive = helper.isRegisterActive(
    _.get(detail, 'registration_start', ''),
    _.get(detail, 'registration_end', '')
  )

  const isSquadRegister = helper.isRegisterActive(
    _.get(detail, 'registration_start', ''),
    _.get(detail, 'match_start', '')
  )

  const router = useRouter()

  useEffect(() => {
    if (id) {
      getDetail(id)
    }
  }, [id])

  useEffect(() => {
    if (id) {
      getDetail(id)
    }
  }, [registerState])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleRegister = (division: number) => {
    setOpen(false)
    if (id && userData.class_id) {
      const params = {
        match_id: Number(id),
        user_id: userData.id,
        division_id: division,
        category_id: category,
        class_id: userData.class_id,
        is_ro: 0,
        remark: null,
      }
      register(params)
    }
  }

  const handleUpdate = (division: number) => {
    setOpen(false)
    if (id && userData.class_id && isRegistered) {
      const params = {
        data: {
          match_id: Number(id),
          user_id: userData.id,
          division_id: division,
          category_id: category,
          class_id: userData.class_id,
          is_ro: 0,
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
    } else if (isRegistered && !_.isEmpty(participants) && isRegisterActive) {
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
            open={open}
            divisions={support.divisions}
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
              height: 120,
              backgroundColor: '#eee',
              background: "url('/images/placeholder.png')",
              backgroundSize: 'cover',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
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
              sx={{ color: Colors.white, position: 'relative', zIndex: 100 }}
              align="center"
            >
              {detail.name}
            </Typography>
            <br />
            {!_.isEmpty(progress.value) ? (
              <Box>
                <Chip label={progress.value} />
              </Box>
            ) : null}
          </Box>
          <ContentBox>
            <Paper sx={{ padding: 20 }}>
              {!_.isEmpty(detail.additional_info) ? (
                <>
                  <section style={{ paddingTop: 15, paddingBottom: 15 }}>
                    <Typography align="center" variant="body1">
                      {detail.additional_info}
                    </Typography>
                  </section>
                </>
              ) : null}
              <section style={{ paddingTop: 15, paddingBottom: 15 }}>
                <Grid spacing={3} container>
                  <Grid item sm={12} md={6}>
                    <Box display="flex" flexDirection="row">
                      <Icon
                        className={`mdi mdi-calendar-month`}
                        sx={{
                          color: Colors.secondary,
                          marginRight: 20,
                          position: 'relative',
                          top: -2,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h2"
                          sx={{ paddingBottom: '10px', fontSize: 16 }}
                        >
                          Эхлэх
                        </Typography>
                        <Typography variant="body2">
                          {moment(detail.match_start).format(
                            'YYYY-MM-DD HH:mm'
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box display="flex" flexDirection="row">
                      <Icon
                        className={`mdi mdi-calendar-month`}
                        sx={{
                          color: Colors.secondary,
                          marginRight: 20,
                          position: 'relative',
                          top: -2,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h2"
                          sx={{ paddingBottom: '10px', fontSize: 16 }}
                        >
                          Дуусах
                        </Typography>
                        <Typography variant="body2">
                          {moment(detail.match_end).format('YYYY-MM-DD HH:mm')}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Grid spacing={3} container>
                  <Grid item sm={12} md={6}>
                    <Box display="flex" flexDirection="row">
                      <Icon
                        className={`mdi mdi-calendar-edit`}
                        sx={{
                          color: Colors.secondary,
                          marginRight: 20,
                          position: 'relative',
                          top: -2,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h2"
                          sx={{ paddingBottom: '10px', fontSize: 16 }}
                        >
                          Бүртгэл эхлэх
                        </Typography>
                        <Typography variant="body2">
                          {moment(detail.registration_start).format(
                            'YYYY-MM-DD HH:mm'
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box display="flex" flexDirection="row">
                      <Icon
                        className={`mdi mdi-calendar-edit`}
                        sx={{
                          color: Colors.secondary,
                          marginRight: 20,
                          position: 'relative',
                          top: -2,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h2"
                          sx={{ paddingBottom: '10px', fontSize: 16 }}
                        >
                          Бүртгэл хаагдах
                        </Typography>
                        <Typography variant="body2">
                          {moment(detail.registration_end).format(
                            'YYYY-MM-DD HH:mm'
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </section>
              <Divider style={{ marginTop: 20, marginBottom: 20 }} />
              <section style={{ paddingTop: 15, paddingBottom: 15 }}>
                <Grid spacing={3} container>
                  <Grid item sm={12} md={4}>
                    <Box display="flex" flexDirection="row">
                      <Icon
                        className={`mdi mdi-trophy-award`}
                        sx={{
                          color: Colors.secondary,
                          marginRight: 20,
                          position: 'relative',
                          top: -2,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h2"
                          sx={{ paddingBottom: 10, fontSize: 16 }}
                        >
                          Түвшин
                        </Typography>
                        <Typography variant="body2">{detail.lvl}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={4}>
                    <Box display="flex" flexDirection="row">
                      <Icon
                        className={`mdi mdi-currency-usd`}
                        sx={{
                          color: Colors.secondary,
                          marginRight: 20,
                          position: 'relative',
                          top: -2,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h2"
                          sx={{ paddingBottom: '10px', fontSize: 16 }}
                        >
                          Хураамж
                        </Typography>
                        <Typography variant="body2">
                          {detail.tax === 0 ? 'FREE' : detail.tax + '₮'}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={4}>
                    <Box display="flex" flexDirection="row">
                      <Icon
                        className={`mdi mdi-target`}
                        sx={{
                          color: Colors.secondary,
                          marginRight: 20,
                          position: 'relative',
                          top: -2,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h2"
                          sx={{ paddingBottom: '10px', fontSize: 16 }}
                        >
                          Стэйжийн тоо
                        </Typography>
                        <Typography variant="body2">
                          {detail.stage_number}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </section>
              {!_.isEmpty(detail.sponsor_info) ? (
                <>
                  <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                  <section>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <Typography
                        variant="h2"
                        sx={{ paddingBottom: '10px', fontSize: 16 }}
                      >
                        mdi-chess-queen
                      </Typography>
                      <Typography variant="body2">
                        {detail.stage_number}
                      </Typography>
                    </Box>
                  </section>
                </>
              ) : null}
            </Paper>

            <ParticipantsTable
              classData={support.class}
              divisions={support.divisions}
              data={participantsFiltered}
            />
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
      {renderLoader()}
      {renderContent()}
    </Box>
  )
}

export default MatchDetail
