import React, { useState } from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle'
import SettingsIcon from '@material-ui/icons/Settings'
import {
  makeStyles,
  Box,
  Tooltip,
  Divider,
  MenuItem,
  Popover,
  ListItemIcon,
} from '@material-ui/core'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import { Home } from '@material-ui/icons'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface AdminHeaderProps {}

const AdminSideBar: React.FC<AdminHeaderProps> = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const classes = useStyles()
  const router = useRouter()

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : ''
  return (
    <Box className={classes.primaryMenu}>
      <Box className={classes.primaryLinks}>
        <Box className={classes.linkItem}>
          <Link href={'/admin/matches'} passHref>
            <a
              className={`${classes.link} ${
                router.pathname == '/admin/matches' ? classes.activeLink : ''
              }`}
            >
              <Tooltip title={'Тэмцээн'} placement={'right'}>
                <Box className={classes.linkItemInner}>
                  <Home className={classes.icon} />
                </Box>
              </Tooltip>
            </a>
          </Link>
        </Box>
        <Box className={classes.linkItem}>
          <Link href={'/member/matches'} passHref>
            <a
              className={`${classes.link} ${
                router.pathname == '/member/matches' ? classes.activeLink : ''
              }`}
            >
              <Tooltip title={'Тэмцээн'} placement={'right'}>
                <Box className={classes.linkItemInner}>
                  <Home className={classes.icon} />
                </Box>
              </Tooltip>
            </a>
          </Link>
        </Box>
      </Box>
      <Box className={classes.primaryFooter}>
        <Box className={classes.linkItem}>
          <a className={`${classes.link}`} onClick={handleClick}>
            <Box className={classes.linkItemInner}>
              <SettingsIcon className={classes.icon} />
            </Box>
          </a>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            classes={{ paper: classes.popoverPaper }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            Settings
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon className={classes.menuIcon}>
                <EmojiFlagsIcon fontSize="small" />
              </ListItemIcon>
              Back to Website
            </MenuItem>
            <MenuItem onClick={handleClose}>Guide</MenuItem>
          </Popover>
        </Box>
        <Box className={classes.linkItem}>
          <Link href={'/admin/matches'} passHref>
            <a className={`${classes.link} `}>
              <Tooltip title={'Тэмцээн'} placement={'right'}>
                <Box className={classes.linkItemInner}></Box>
              </Tooltip>
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  primaryMenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'inline-block',
    width: '70px',
    height: '100%',
    verticalAlign: 'top',
    willChange: 'transform',
    zIndex: 1000,
    webkitTransition: '-webkit-transform 0.6s',
    transition: '-webkit-transform 0.6s',
    background: '#2b50ed',
  },
  menuIcon: {
    minWidth: 30,
  },
  popoverPaper: {
    background: '#fff',
    WebkitBoxShadow: '0 20px 60px 0 rgb(0 0 0 / 15%)',
    boxShadow: '0 20px 60px 0 rgb(0 0 0 / 15%)',
    border: '0 none',
    borderRadius: '12px',
    padding: '0',
  },
  link: {
    position: 'relative',
    display: 'block',
    height: '70px',
    lineHeight: '70px',
    whiteSpace: 'nowrap',
    background: 'transparent',
    border: '0 none',
  },
  primaryLinks: {
    position: 'absolute',
    top: '50%',
    right: 0,
    left: 0,
    webkittransform: 'translate3d(0, -50%, 0)',
    transform: 'translate3d(0, -50%, 0)',
  },
  linkItem: {
    textAlign: 'center',
  },
  linkItemInner: {
    position: 'relative',
    display: 'flex',
    width: '40px',
    height: '40px',
    lineHeight: '40px',
    margin: '0 15px',
    color: '#fff',
    borderRadius: '12px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
  },
  activeLink: {
    '& $linkItemInner': {
      color: '#fff',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  primaryFooter: {
    position: 'absolute',
    right: '0',
    bottom: '0',
    left: '0',
  },
}))

export default AdminSideBar
