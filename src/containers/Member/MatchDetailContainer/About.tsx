import React from 'react'
import {
  Typography,
  CardHeader,
  Card,
  CardContent,
  Grid,
  Box,
  Icon,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { MatchItem } from '@store/match/actions/types'
import { Colors } from '@theme/colors'
import _ from 'lodash'
import { MatchProgressType } from '@utils/helpers/common.helper'
import StatusChip from '@components/member/StatusChip'

const useStyles = makeStyles(() => ({
  cardRoot: {
    '& .Cmt-header-root': {
      paddingTop: 3,
      paddingBottom: 0,
    },
  },
  header: {
    borderBottom: '1px solid #eee',
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
  icon: {
    marginRight: 20,
    position: 'relative',
    top: -2,
  },
  section: {
    paddingTop: 15,
    paddingBottom: 15,
  },
}))

interface About {
  detail: MatchItem
  progress: MatchProgressType
}

const About: React.FC<About> = ({ detail, progress }) => {
  const classes = useStyles()

  return (
    <Card className={classes.cardRoot}>
      <CardHeader className={classes.header} title="Мэдээлэл"></CardHeader>
      <CardContent>
        <section className={classes.section}>
          <Grid spacing={3} container>
            <Grid item sm={12} md={4}>
              <Box display="flex" flexDirection="row">
                <Icon className={`mdi mdi-trophy-award ${classes.icon}`} />
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
                <Icon className={`mdi mdi-currency-usd ${classes.icon}`} />
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
                  <Typography variant="body2">{detail.stage_number}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </section>
        <>
          <section>
            <Grid spacing={3} container>
              <Grid item sm={12} md={4}>
                <Box display="flex" flexDirection="row">
                  <Icon
                    className={`mdi mdi-progress-check ${classes.icon}`}
                    style={{ fontSize: 16, paddingLeft: 3 }}
                  />
                  <Box display="flex" flexDirection="column">
                    <Typography variant="h2" className={classes.subtitle}>
                      Тэмцээний төлөв
                    </Typography>
                    <StatusChip status={progress} label={progress.value} />
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={12} md={8}>
                {!_.isEmpty(detail.sponsor_info) ? (
                  <Box display="flex" flexDirection="row">
                    <Icon
                      className={`mdi mdi-chess-queen ${classes.icon}`}
                      style={{ fontSize: 16, paddingLeft: 3 }}
                    />
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h2" className={classes.subtitle}>
                        Спонсор
                      </Typography>
                      <Typography variant="body2">
                        {detail.sponsor_info}
                      </Typography>
                    </Box>
                  </Box>
                ) : null}
              </Grid>
            </Grid>
          </section>
        </>
      </CardContent>
    </Card>
  )
}

export default About
