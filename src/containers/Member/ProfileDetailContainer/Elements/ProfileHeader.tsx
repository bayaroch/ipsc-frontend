import React from 'react'
import { Box, Avatar, Typography } from '@mui/material/'
import { MemberItem } from '@services/account.services'

interface ProfileHeaderProps {
  userDetail: MemberItem
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ userDetail }) => {
  const { firstname, lastname, img_url } = userDetail

  return (
    <Box
      sx={{
        position: 'relative',
        margin: '-30px -15px 0 -15px',
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 30,
        paddingBottom: 20,
      }}
    >
      <Box sx={{ width: '100%' }}></Box>
      <Box sx={{ position: 'relative', zIndex: 3 }}>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          mb={4}
        >
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems="center"
          >
            <Box mr={{ sm: 4, md: 5, lg: 6 }} mb={{ xs: 3, sm: 0 }}>
              <Avatar sx={{ width: 80, height: 80 }} src={img_url} />
            </Box>
            <Box>
              <Typography component="div" variant="h1">
                {firstname}
              </Typography>
              <Typography>{lastname}</Typography>
            </Box>
          </Box>
          <Box ml={{ sm: 'auto' }} mt={{ xs: 3, sm: 0 }}>
            asdasd
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProfileHeader
