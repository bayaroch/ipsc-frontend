import React from 'react'
import { Box } from '@mui/material/'
import { MemberItem } from '@services/account.services'
import Cover from './Cover'
import MemberInfo from './MemberInfo'
import { SupportState } from '@store/support/reducers'
import OtherInfo from './OtherInfo'

interface GeneralInfoProps {
  userDetail: MemberItem
  support: SupportState
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ userDetail, support }) => {
  return (
    <Box>
      <Box mb={4}>
        <Cover userDetail={userDetail} />
      </Box>
      <Box mb={2}>
        <MemberInfo support={support} userDetail={userDetail} />
      </Box>
      <Box>
        <OtherInfo userDetail={userDetail} />
      </Box>
    </Box>
  )
}

export default GeneralInfo
