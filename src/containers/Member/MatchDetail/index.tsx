import { useEffect, useState } from 'react'
import {
  makeStyles,
  Box,
  Typography,
  Grid,
  Icon,
  Divider,
  Paper,
  Button,
} from '@material-ui/core/'
import useMatchDetail from './useMatchDetail'
import _ from 'lodash'
import ContentBox from '@components/admin/ContentBox'
import { Colors } from '@theme/colors'
import moment from 'moment'
import MatchDivisionPicker from '@components/member/MatchDivisionPicker'

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
    divisions,
  } = useMatchDetail()
  const [params, setParams] = useState()

  useEffect(() => {
    if (id) {
      getDetail(id)
    }
  }, [id])

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
        remark: '#DVC',
      }
      register(params)
    }
  }

  const renderLoader = () => {
    if (!meta.loaded && meta.pending && !meta.error) {
      return <>Loading</>
    }
    return null
  }

  const renderContent = () => {
    if (!meta.pending && !meta.error && meta.loaded && detail) {
      return (
        <>
          <MatchDivisionPicker
            open={open}
            divisions={divisions}
            onSubmit={handleRegister}
            handleClose={handleClose}
          />
          <Box className={classes.header}>
            <Typography variant="h2" className={classes.title} align="center">
              {detail.name}
            </Typography>
          </Box>
          <ContentBox>
            <Paper className={classes.paper}>
              {!_.isEmpty(detail.additional_info) ? (
                <>
                  <section className={classes.section}>
                    <Typography align="center" variant="body1">
                      {detail.additional_info}
                    </Typography>
                  </section>
                </>
              ) : null}
              <section className={classes.section}>
                <Grid spacing={3} container>
                  <Grid item sm={12} md={6}>
                    <Box display="flex" flexDirection="row">
                      <Icon
                        className={`mdi mdi-calendar-month ${classes.icon}`}
                      />
                      <Box>
                        <Typography variant="h2" className={classes.subtitle}>
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
                        className={`mdi mdi-calendar-month ${classes.icon}`}
                      />
                      <Box>
                        <Typography variant="h2" className={classes.subtitle}>
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
                        className={`mdi mdi-calendar-edit ${classes.icon}`}
                      />
                      <Box>
                        <Typography variant="h2" className={classes.subtitle}>
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
                        className={`mdi mdi-calendar-edit ${classes.icon}`}
                      />
                      <Box>
                        <Typography variant="h2" className={classes.subtitle}>
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
              <Divider className={classes.divider} />
              <section className={classes.section}>
                <Grid spacing={3} container>
                  <Grid item sm={12} md={4}>
                    <Box display="flex" flexDirection="row">
                      <Icon
                        className={`mdi mdi-trophy-award ${classes.icon}`}
                      />
                      <Box>
                        <Typography variant="h2" className={classes.subtitle}>
                          Түвшин
                        </Typography>
                        <Typography variant="body2">{detail.lvl}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={4}>
                    <Box display="flex" flexDirection="row">
                      <Icon
                        className={`mdi mdi-currency-usd ${classes.icon}`}
                      />
                      <Box>
                        <Typography variant="h2" className={classes.subtitle}>
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
                      <Icon className={`mdi mdi-target ${classes.icon}`} />
                      <Box>
                        <Typography variant="h2" className={classes.subtitle}>
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
                  <Divider className={classes.divider} />
                  <section>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <Typography variant="h2" className={classes.subtitle}>
                        Спонсор
                      </Typography>
                      <Typography variant="body2">
                        {detail.stage_number}
                      </Typography>
                    </Box>
                  </section>
                </>
              ) : null}
            </Paper>
            <Box
              display="flex"
              justifyContent="center"
              mt={5}
              alignItems="center"
            >
              <Button
                type="submit"
                onClick={() => handleClickOpen()}
                variant="contained"
                color="primary"
              >
                Бүртгүүлэх
              </Button>
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
  section: {
    paddingTop: 15,
    paddingBottom: 15,
  },
}))

export default MatchDetail
