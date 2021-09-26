import React from 'react'
import { Box, Card, CardContent, Icon, Divider } from '@material-ui/core'
import { alpha, makeStyles } from '@material-ui/core/styles'

import blue from '@material-ui/core/colors/blue'
import { helper } from '@utils/helpers/common.helper'
import { MatchItem } from '@store/match/actions/types'
import _ from 'lodash'

const useStyles = makeStyles((theme) => ({
  iconView: {
    backgroundColor: alpha(blue['500'], 0.1),
    color: blue['500'],
    padding: 8,
    width: 40,
    height: 40,
    textAlign: 'center',
    borderRadius: 4,
    '&.end': {
      backgroundColor: alpha(theme.palette.warning.main, 0.1),
      color: theme.palette.warning.main,
    },
    '&.start': {
      backgroundColor: alpha(theme.palette.success.main, 0.15),
      color: theme.palette.success.dark,
    },
  },
  wordAddress: {
    wordBreak: 'break-all',
    cursor: 'pointer',
  },
  icon: {
    position: 'relative',
    top: -4,
  },
}))

interface MatchTimeBoxProps {
  detail: MatchItem
}

const TimeBox: React.FC<MatchTimeBoxProps> = ({ detail }) => {
  const match_start = _.get(detail, 'match_start', '')
  const match_end = _.get(detail, 'match_end', '')
  const registration_start = _.get(detail, 'registration_start', '')
  const registration_end = _.get(detail, 'registration_end', '')

  const classes = useStyles()
  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" mb={{ xs: 1, sm: '20px' }}>
          <Box className={`${classes.iconView} start`}>
            <Icon className={`mdi mdi-calendar-month  ${classes.icon}`} />
          </Box>
          <Box ml={5}>
            <Box component="span" fontSize={13} color="text.secondary">
              Тэмцээн эхлэх
            </Box>
            <Box
              component="p"
              className={classes.wordAddress}
              fontSize={16}
              color="text.primary"
            >
              <Box>{helper.matchDate(match_start, match_end)}</Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mb={{ xs: 1, sm: '10px' }}>
          <Box className={`${classes.iconView} end`}>
            <Icon className={`mdi mdi-calendar-month  ${classes.icon}`} />
          </Box>
          <Box ml={5}>
            <Box component="span" fontSize={13} color="text.secondary">
              Тэмцээн дуусах
            </Box>
            <Box
              component="p"
              className={classes.wordAddress}
              fontSize={16}
              color="text.primary"
            >
              <Box>{helper.matchDate(match_end, match_end)}</Box>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box mb={{ xs: 1, sm: '10px' }} />

        <Box display="flex" alignItems="center" mb={{ xs: 1, sm: '20px' }}>
          <Box className={`${classes.iconView} start`}>
            <Icon className={`mdi mdi-calendar-edit ${classes.icon}`} />
          </Box>
          <Box ml={5}>
            <Box component="span" fontSize={13} color="text.secondary">
              Бүртгэл эхлэх
            </Box>
            <Box
              component="p"
              className={classes.wordAddress}
              fontSize={16}
              color="text.primary"
            >
              {helper.registrationDate(
                registration_start,
                registration_end,
                'start'
              )}
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Box className={`${classes.iconView} end`}>
            <Icon className={`mdi mdi-calendar-edit ${classes.icon}`} />
          </Box>
          <Box ml={5}>
            <Box component="span" fontSize={13} color="text.secondary">
              Бүртгэл хаагдах
            </Box>
            <Box
              component="p"
              className={classes.wordAddress}
              fontSize={16}
              color="text.primary"
            >
              {helper.registrationDate(
                registration_end,
                registration_end,
                'end'
              )}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TimeBox
