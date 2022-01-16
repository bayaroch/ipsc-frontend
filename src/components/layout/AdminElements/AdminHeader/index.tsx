import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import { Colors } from '@theme/colors'
import { UserData } from '@services/auth.services'
import Link from 'next/link'
import MoreIcon from '@mui/icons-material/MoreVert'
import { ExitToApp, Person } from '@mui/icons-material'
import { MenuItem, ListItemIcon, Menu } from '@mui/material'

export interface AdminHeaderProps {
  open: boolean
  setOpen: (open: boolean) => void
  title?: string
  currentUser: UserData
  handleLogOut: () => void
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
  open,
  setOpen,
  title,
  currentUser,
  handleLogOut,
}) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const isMenuOpen = Boolean(anchorEl)

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const menuId = 'primary-search-account-menu'

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleClose}
    >
      <Link href={`/member/profile/${currentUser?.id}`} passHref>
        <MenuItem onClick={handleClose}>
          <ListItemIcon sx={{ minWidth: 26 }}>
            <Person fontSize="small" />
          </ListItemIcon>
          Профайл
        </MenuItem>
      </Link>
      <MenuItem onClick={handleLogOut}>
        <ListItemIcon sx={{ minWidth: 26 }}>
          <ExitToApp fontSize="small" />
        </ListItemIcon>
        Гарах
      </MenuItem>
    </Menu>
  )

  return (
    <Box
      sx={{
        transition: 'all 0.24s ease-in-out',
        background: '#fff',
        flexGrow: 1,
        '& .MuiAppBar-root': {
          zIndex: 900,
          background: Colors.white,
          paddingLeft: 0,
          borderBottom: '1px solid #eee',
          '@media screen and (min-width:600px) and (max-width:900px) ': {
            '& .MuiAppBar-root': {
              paddingLeft: '70px !important',
            },
          },
        },
        '& .MuiToolbar-regular': {
          minHeight: 50,
        },
      }}
    >
      <AppBar elevation={0} position="relative" color="default">
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
            <>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                <Link href={`/member/profile/${currentUser.id}`} passHref>
                  <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                    Сайн уу!
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: Colors.primary, fontWeight: 600, ml: 1 }}
                    >
                      {currentUser.firstname}
                    </Typography>
                  </Typography>
                </Link>
              </Box>
              <IconButton
                onClick={handleProfileMenuOpen}
                aria-controls={menuId}
                size="large"
                aria-label="display more actions"
                edge="end"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  )
}

export default AdminHeader
