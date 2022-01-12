import React from 'react'
import { Box, Paper, Typography, alpha } from '@mui/material/'
import { MemberItem } from '@services/account.services'
import { Colors } from '@theme/colors'
import CustomAvatar from '@components/common/Avatar'

interface GeneralInfoProps {
  userDetail: MemberItem
}

const Cover: React.FC<GeneralInfoProps> = ({ userDetail }) => {
  const { firstname, lastname, img_url, usercode } = userDetail

  return (
    <Paper
      sx={{
        overflow: 'hidden',
        borderRadius: 1,
        position: 'relative',
        minHeight: '300px',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/images/intro/slide5.jpg") no-repeat top center',
          backgroundSize: 'cover',
        }}
      >
        {/* <img
          src="/images/og-image.jpg"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          alt="aaa"
        /> */}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          backgroundImage:
            'linear-gradient(180deg,rgba(0,0,0,.01) 0,rgba(0,0,0,.65))',
          padding: {
            xl: '18px 20px',
            lg: '10px',
            md: '10px',
            sm: '10px',
            xs: '10px',
          },
        }}
      >
        <Box mr={3}>
          <CustomAvatar
            sx={{ width: 56, height: 56 }}
            src={img_url}
            alt={firstname}
          />
        </Box>
        <Box flex={1}>
          <Typography
            sx={{
              color: Colors.white,
              marginBottom: '3px',
            }}
            component="div"
            variant="h3"
          >
            {lastname} {firstname}
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              color: alpha(Colors.white, 0.74),
            }}
          >
            #{usercode}
          </Typography>
        </Box>
      </Box>
    </Paper>
  )
}

export default Cover
