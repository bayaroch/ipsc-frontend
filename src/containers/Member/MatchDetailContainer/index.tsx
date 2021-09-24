import { useEffect, useState } from 'react'
import {
  makeStyles,
  Box,
  Typography,
  Grid,
  Paper,
  Button,
} from '@material-ui/core/'
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

interface MatchDetailProps {
  id: string
}

const MatchDetail: React.FC<MatchDetailProps> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false)
  const classes = useStyles()
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
        <Box className={classes.loaderBox}>
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
          <Box className={classes.header}>
            <Typography variant="h2" className={classes.title} align="center">
              {detail.name}
            </Typography>
            <br />
          </Box>
          <ContentBox>
            <section className={classes.section}>
              <Box className={classes.pageFull}>
                <Grid container spacing={6}>
                  <Grid item xs={12} lg={4} className={classes.profileSidebar}>
                    <Box mb={6}>
                      <Paper>
                        <TimeBox detail={detail} />
                      </Paper>
                    </Box>
                    <Box mb={6}>
                      <Participants detail={detail} />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={8}
                    className={classes.profileMainContent}
                  >
                    <Box mb={6}>
                      <About detail={detail} progress={progress} />
                    </Box>
                    <Box mb={6}>
                      <Paper>
                        {!_.isEmpty(detail.additional_info) ? (
                          <Info detail={detail} />
                        ) : null}
                      </Paper>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </section>
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

const useStyles = makeStyles(() => ({
  pageFull: {
    width: '100%',
  },
  profileSidebar: {
    '@media screen and (min-width: 1280px) and (max-width: 1499px)': {
      flexBasis: '100%',
      maxWidth: '100%',
    },
  },
  profileMainContent: {
    '@media screen and (min-width: 1280px) and (max-width: 1499px)': {
      flexBasis: '100%',
      maxWidth: '100%',
    },
  },
  //
  paper: {
    padding: 20,
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  icon: {
    color: Colors.secondary,
    marginRight: 20,
    position: 'relative',
    top: -2,
  },
  title: {
    color: Colors.white,
    position: 'relative',
    zIndex: 100,
  },
  subtitle: {
    paddingBottom: 10,
    fontSize: 16,
  },
  header: {
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
  },
  loader: {
    fontSize: 12,
  },
  loaderBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
  section: {
    paddingTop: 15,
    paddingBottom: 15,
  },
}))

export default MatchDetail
