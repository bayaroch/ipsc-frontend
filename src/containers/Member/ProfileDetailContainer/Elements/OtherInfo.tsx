import React, { ReactElement } from 'react'
import { Box, Typography, Paper, alpha } from '@mui/material'
import { EmailOutlined, CakeOutlined, LocalPolice } from '@mui/icons-material'
import { MemberItem } from '@services/account.services'
import { blue } from '@mui/material/colors'
import moment from 'moment'
import { Colors } from '@theme/colors'
import BadgeChips from '@components/member/BadgeChips'
import { SupportState } from '@store/support/reducers'
import _ from 'lodash'

interface OtherInfoProps {
  userDetail: MemberItem
  support?: SupportState
}

interface InfoItemProps {
  title: string
  icon: ReactElement
  value: ReactElement | string
}

const InfoItem = ({ title, value, icon }: InfoItemProps) => (
  <Box
    display="flex"
    alignItems="center"
    sx={{
      '&:last-child': {
        margin: 0,
      },
    }}
    mb={{ xs: 1, sm: 2 }}
  >
    <Box
      sx={{
        backgroundColor: alpha(blue['500'], 0.1),
        color: blue['500'],
        padding: 1,
        borderRadius: 1,
        '& .MuiSvgIcon-root': {
          display: 'block',
        },
      }}
    >
      {icon}
    </Box>
    <Box ml={5}>
      <Box component="span" fontSize={12} color="text.primary">
        {title}
      </Box>
      <Box sx={{}} fontSize={15}>
        {value}
      </Box>
    </Box>
  </Box>
)

const OtherInfo: React.FC<OtherInfoProps> = ({ userDetail, support }) => {
  const { birthday, email } = userDetail
  return (
    <Paper sx={{ padding: 2 }}>
      {userDetail && support && !_.isEmpty(userDetail.mo_badge) ? (
        <InfoItem
          title=""
          icon={<LocalPolice />}
          value={
            <BadgeChips
              badgesData={support && support.badges ? support.badges : []}
              data={userDetail}
            />
          }
        />
      ) : (
        ''
      )}
      <InfoItem
        title="Имэйл"
        icon={<EmailOutlined />}
        value={
          <Box
            component="a"
            sx={{ color: Colors.primary }}
            href={`mailto:${email}`}
          >
            {email}
          </Box>
        }
      />
      <InfoItem
        title="Төрсөн өдөр"
        icon={<CakeOutlined />}
        value={<Typography>{moment(birthday).format('MMMM DD')}</Typography>}
      />
    </Paper>
  )
}

export default OtherInfo
