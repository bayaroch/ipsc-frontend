import React from 'react'
import { Box, Card, CardContent, Icon, Divider } from '@mui/material/'
import { helper } from '@utils/helpers/common.helper'
import { MatchItem } from '@store/match/actions/types'
import _ from 'lodash'

// const useStyles = makeStyles((theme) => ({
//   iconView: {
//     backgroundColor: alpha(blue['500'], 0.1),
//     color: blue['500'],
//     padding: 8,
//     width: 40,
//     height: 40,
//     textAlign: 'center',
//     borderRadius: 4,
//     '&.end': {
//       backgroundColor: alpha(theme.palette.warning.main, 0.1),
//       color: theme.palette.warning.main,
//     },
//     '&.start': {
//       backgroundColor: alpha(theme.palette.success.main, 0.15),
//       color: theme.palette.success.dark,
//     },
//   },
//   wordAddress: {
//     wordBreak: 'break-all',
//     cursor: 'pointer',
//   },
//   icon: {
//     position: 'relative',
//     top: -4,
//   },
// }))

interface MatchTimeBoxProps {
  detail: MatchItem
}

const TimeBox: React.FC<MatchTimeBoxProps> = ({ detail }) => {
  const match_start = _.get(detail, 'match_start', '')
  const match_end = _.get(detail, 'match_end', '')
  const registration_start = _.get(detail, 'registration_start', '')
  const registration_end = _.get(detail, 'registration_end', '')

  return (
    <Card
      sx={{
        '& .Cmt-header-root': {
          paddingTop: 3,
          paddingBottom: 0,
        },
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" mb={{ xs: 1, sm: '20px' }}>
          <Box
            sx={{
              padding: '8px',
              width: 40,
              height: 40,
              textAlign: 'center',
              borderRadius: 1,
              color: ' #388e3c',
              backgroundColor: 'rgba(76, 175, 80, 0.15)',
            }}
            className={`start`}
          >
            <Icon
              sx={{ position: 'relative', top: -4 }}
              className={`mdi mdi-calendar-month`}
            />
          </Box>
          <Box ml={5}>
            <Box component="span" fontSize={13} color="text.secondary">
              Тэмцээн эхлэх
            </Box>
            <Box
              component="p"
              sx={{ wordBreak: 'break-all', cursor: 'pointer' }}
              fontSize={16}
              color="text.primary"
            >
              <Box component="span">
                {helper.matchDate(match_start, match_end)}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mb={{ xs: 1, sm: '10px' }}>
          <Box
            sx={{
              padding: '8px',
              width: 40,
              height: 40,
              textAlign: 'center',
              borderRadius: 1,
              color: '#ff9800',
              backgroundColor: 'rgba(255, 152, 0, 0.1)',
            }}
            className={'end'}
          >
            <Icon
              sx={{ position: 'relative', top: -4 }}
              className={`mdi mdi-calendar-month`}
            />
          </Box>
          <Box ml={5}>
            <Box component="span" fontSize={13} color="text.secondary">
              Тэмцээн дуусах
            </Box>
            <Box
              component="p"
              sx={{ wordBreak: 'break-all', cursor: 'pointer' }}
              fontSize={16}
              color="text.primary"
            >
              <Box component="span">
                {helper.matchDate(match_end, match_end)}
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box mb={{ xs: 1, sm: '10px' }} />

        <Box display="flex" alignItems="center" mb={{ xs: 1, sm: '20px' }}>
          <Box
            sx={{
              color: ' #388e3c',
              backgroundColor: 'rgba(76, 175, 80, 0.15)',
              padding: '8px',
              width: 40,
              height: 40,
              textAlign: 'center',
              borderRadius: 1,
              // '&.end': {
              //   backgroundColor: alpha('warning.main', 0.1),
              //   color: 'warning.main',
              // },
              // '&.start': {
              //   backgroundColor: alpha('success.main', 0.15),
              //   color: 'success.dark',
              // },
            }}
            className={`start`}
          >
            <Icon
              sx={{ position: 'relative', top: -4 }}
              className={`mdi mdi-calendar-edit`}
            />
          </Box>
          <Box ml={5}>
            <Box component="span" fontSize={13} color="text.secondary">
              Бүртгэл эхлэх
            </Box>
            <Box
              component="p"
              sx={{ wordBreak: 'break-all', cursor: 'pointer' }}
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
          <Box
            sx={{
              color: '#ff9800',
              backgroundColor: 'rgba(255, 152, 0, 0.1)',
              padding: '8px',
              width: 40,
              height: 40,
              textAlign: 'center',
              borderRadius: 1,
              // '&.end': {
              //   backgroundColor: alpha('warning.main', 0.1),
              //   color: 'warning.main',
              // },
              // '&.start': {
              //   backgroundColor: alpha('success.main', 0.15),
              //   color: 'success.dark',
              // },
            }}
            className={`end`}
          >
            <Icon
              sx={{ position: 'relative', top: -4 }}
              className={`mdi mdi-calendar-edit`}
            />
          </Box>
          <Box ml={5}>
            <Box component="span" fontSize={13} color="text.secondary">
              Бүртгэл хаагдах
            </Box>
            <Box
              component="p"
              sx={{ wordBreak: 'break-all', cursor: 'pointer' }}
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
