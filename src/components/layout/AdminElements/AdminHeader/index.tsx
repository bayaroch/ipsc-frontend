import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import { Colors } from '@theme/colors'
import { UserData } from '@services/auth.services'
import CustomAvatar from '@components/common/Avatar'
import Link from 'next/link'

export interface AdminHeaderProps {
  open: boolean
  setOpen: (open: boolean) => void
  title?: string
  currentUser: UserData
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
  open,
  setOpen,
  title,
  currentUser,
}) => {
  return (
    <Box
      sx={{
        transition: 'all 0.24s ease-in-out',
        background: '#fff',
        flexGrow: 1,
        '& .MuiAppBar-root': {
          zIndex: 80,
          background: Colors.white,
          paddingLeft: 0,
          borderBottom: '1px solid #eee',
        },
        '& .MuiToolbar-regular': {
          minHeight: 50,
        },
      }}
    >
      <AppBar
        sx={open ? {} : {}}
        elevation={0}
        position="relative"
        color="default"
      >
        <Toolbar>
          <IconButton
            disableRipple
            onClick={() => setOpen(!open)}
            edge="start"
            sx={{ marginRight: 2 }}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ fontWeight: 600, flexGrow: 1 }} noWrap={true}>
            {title}
          </Typography>
          {currentUser && (
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Link href={`/member/profile/${currentUser.id}`}>
                  <CustomAvatar
                    src={currentUser.img_url}
                    sx={{ width: 30, height: 30 }}
                    alt={currentUser.firstname}
                  />
                </Link>
              </IconButton>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {currentUser.firstname}
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AdminHeader
