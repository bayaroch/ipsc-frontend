import React from 'react'
import { Box, Paper, Typography, alpha } from '@mui/material/'
import { MemberItem } from '@services/account.services'
import { Colors } from '@theme/colors'
import CustomAvatar from '@components/common/Avatar'
import { SupportState } from '@store/support/reducers'

interface CoverProps {
  userDetail: MemberItem
  support?: SupportState
}

const Cover: React.FC<CoverProps> = ({ userDetail }) => {
  const { firstname, lastname, img_url, usercode } = userDetail

  return (
    <Paper
      sx={{
        overflow: 'hidden',
        borderRadius: 1,
        position: 'relative',
        paddingTop: '100%',
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
          backgroundColor: '#f2f2f2',
          opacity: 1,
          // filter: 'grayscale(90%)',
        }}
      >
        <object
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            mixBlendMode: 'multiply',
            opacity: 1,
          }}
        >
          <img
            src={img_url}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              opacity: 1,
            }}
          />
        </object>
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
            'linear-gradient(180deg,rgba(0,0,0,.01) 0,rgba(0,0,0,.75))',
          padding: {
            xl: '22px 20px',
            lg: '12px',
            md: '12px',
            sm: '12px',
            xs: '12px',
          },
        }}
      >
        <Box mr={3}>
          <CustomAvatar
            sx={{ width: 56, height: 56, boxShadow: 2 }}
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
