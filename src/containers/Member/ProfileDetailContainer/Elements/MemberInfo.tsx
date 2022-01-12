import React from 'react'
import { Box, Typography } from '@mui/material/'
import { MemberItem } from '@services/account.services'
import { BoxProps } from '@mui/system'
import _ from 'lodash'
import { helper } from '@utils/helpers/common.helper'
import { SupportState } from '@store/support/reducers'

interface GeneralInfoProps {
  userDetail: MemberItem
  support: SupportState
}

const StatItem = (props: BoxProps) => (
  <Box
    sx={{
      paddingLeft: 1.2,
      paddingRight: 1.2,
      width: '33.33%',
    }}
  >
    {props.children}
  </Box>
)

const MemberInfo: React.FC<GeneralInfoProps> = ({ userDetail, support }) => {
  const { birthday, gender, class_id, usertype } = userDetail
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        borderBottom: `1px solid #eee`,
        paddingBottom: 3,
      }}
    >
      <StatItem>
        <Typography component="div" variant="h3" sx={{ minHeight: 20 }}>
          {_.get(helper.categoryTitleHelper(birthday, gender), 'name', '')}
        </Typography>
        <Box component="span" color="text.secondary" fontSize={12}>
          Категори
        </Box>
      </StatItem>
      <StatItem>
        <Typography component="div" variant="h3">
          {_.get(
            helper.classTitleHelper(class_id, _.get(support, 'class', [])),
            'name',
            ''
          )}
        </Typography>
        <Box component="span" color="text.secondary" fontSize={12}>
          Класс
        </Box>
      </StatItem>
      <StatItem>
        <Typography component="div" variant="h3">
          {helper.memberTypeTitleHelper(usertype)}
        </Typography>
        <Box component="span" color="text.secondary" fontSize={12}>
          Төрөл
        </Box>
      </StatItem>
    </Box>
  )
}

export default MemberInfo
