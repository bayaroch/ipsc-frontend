import React from 'react'
import {
  Typography,
  CardHeader,
  Card,
  CardContent,
  Grid,
  Box,
  Icon,
} from '@mui/material/'
import { MatchItem } from '@store/match/actions/types'
import _ from 'lodash'
import { MatchProgressType } from '@utils/helpers/common.helper'
import StatusChip from '@components/member/StatusChip'

interface About {
  detail: MatchItem
  progress: MatchProgressType
}

const About: React.FC<About> = ({ detail, progress }) => {
  return (
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
        title="Мэдээлэл"
      ></CardHeader>
      <CardContent>
        <section style={{ paddingTop: 15, paddingBottom: 15 }}>
          <Grid spacing={3} container>
            <Grid item sm={12} md={4}>
              <Box display="flex" flexDirection="row">
                <Icon
                  className={`mdi mdi-trophy-award`}
                  sx={{ marginRight: '20px', position: 'relative', top: -2 }}
                />
                <Box>
                  <Typography
                    variant="h2"
                    sx={{ paddingBottom: '10px', fontSize: 16 }}
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
                  sx={{ marginRight: '20px', position: 'relative', top: -2 }}
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
                  sx={{ marginRight: '20px', position: 'relative', top: -2 }}
                />
                <Box>
                  <Typography
                    variant="h2"
                    sx={{ paddingBottom: '10px', fontSize: 16 }}
                  >
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
                    className={`mdi mdi-progress-check`}
                    sx={{ marginRight: '20px', position: 'relative', top: -2 }}
                    style={{ fontSize: 16, paddingLeft: 3 }}
                  />
                  <Box display="flex" flexDirection="column">
                    <Typography
                      variant="h2"
                      sx={{ paddingBottom: '10px', fontSize: 16 }}
                    >
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
                      className={`mdi mdi-chess-queen`}
                      sx={{
                        marginRight: '20px',
                        position: 'relative',
                        top: -2,
                      }}
                      style={{ fontSize: 16, paddingLeft: 3 }}
                    />
                    <Box display="flex" flexDirection="column">
                      <Typography
                        variant="h2"
                        sx={{ paddingBottom: '10px', fontSize: 16 }}
                      >
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
