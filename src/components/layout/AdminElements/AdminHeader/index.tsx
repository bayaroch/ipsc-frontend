import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { makeStyles } from '@material-ui/core/styles'

export interface AdminHeaderProps {
  open: boolean
  setOpen: (open: boolean) => void
  title?: string
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ open, setOpen, title }) => {
  const classes = useStyles({ open, setOpen })
  const [anchorEl, setAnchorEl] = useState(null)

  const subOpen = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  return (
    <div className={`${classes.root}`}>
      <AppBar
        position="fixed"
        className={`${open ? classes.open : ''}`}
        color="secondary"
        elevation={1}
      >
        <Toolbar>
          <IconButton
            disableRipple
            onClick={() => setOpen(!open)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title}>{title}</Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              anchorEl={anchorEl}
              open={subOpen}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiAppBar-root': {
      zIndex: 80,
      paddingLeft: 0,
      tranistion: 'all 0.3s ease',
    },
    '& .MuiAppBar-colorSecondary': {
      background: '#fff',
    },
    '& .MuiToolbar-regular': {
      minHeight: 50,
    },
  },
  open: {
    paddingLeft: '100px !important',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
    flexGrow: 1,
  },
}))

export default AdminHeader
