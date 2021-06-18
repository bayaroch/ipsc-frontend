import React from 'react'
import {
  makeStyles,
  Box,
  Tooltip,
  MenuItem,
  ListItemIcon,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import PopOverMenu from './PopOverMenu'
import Link from 'next/link'
import {
  AccountCircle,
  Settings,
  Home,
  Person,
  ExitToApp,
  Language,
  Help,
  Info,
  Layers,
} from '@material-ui/icons'
import { logOut } from '@store/auth/actions'
import { useDispatch } from 'react-redux'

interface AdminHeaderProps {}

const AdminSideBar: React.FC<AdminHeaderProps> = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [userEl, setUserEl] = React.useState<null | HTMLElement>(null)
  const classes = useStyles()
  const router = useRouter()
  const dispatch = useDispatch()

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    type: string
  ) => {
    if (type === 'user') {
      setUserEl(event.currentTarget)
    } else {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
    setUserEl(null)
  }

  const handleLogOut = () => {
    dispatch(logOut())
    handleClose()
  }

  const open = Boolean(anchorEl)
  const id = open ? 'settings-menu' : ''

  const openUser = Boolean(userEl)
  const userId = openUser ? 'user-menu' : ''

  return (
    <Box className={classes.primaryMenu}>
      <Box className={classes.primaryLogo}>
        <Link href={'/admin/'} passHref>
          <a
            className={`${classes.link} ${
              router.pathname == '/admin' ? classes.activeLink : ''
            }`}
          >
            <img src="/images/logo-dvc.png" />
          </a>
        </Link>
      </Box>
      <Box className={classes.primaryLinks}>
        <Box className={classes.linkItem}>
          <Link href={'/admin/'} passHref>
            <a
              className={`${classes.link} ${
                router.pathname == '/admin' ? classes.activeLink : ''
              }`}
            >
              <Tooltip title={'Эхлэл'} placement={'right'}>
                <Box className={classes.linkItemInner}>
                  <Home className={classes.icon} />
                </Box>
              </Tooltip>
            </a>
          </Link>
        </Box>
        <Box className={classes.linkItem}>
          <Link href={'/admin/matches'} passHref>
            <a
              className={`${classes.link} ${
                router.pathname == '/admin/matches' ? classes.activeLink : ''
              }`}
            >
              <Tooltip title={'Тэмцээн'} placement={'right'}>
                <Box className={classes.linkItemInner}>
                  <Layers className={classes.icon} />
                </Box>
              </Tooltip>
            </a>
          </Link>
        </Box>
      </Box>
      <Box className={classes.primaryFooter}>
        <Box className={classes.linkItem}>
          <a
            className={`${classes.link}`}
            id={'settings-menu'}
            onClick={(event) => handleClick(event, 'settings')}
          >
            <Box className={classes.linkItemInner}>
              <Settings className={classes.icon} />
            </Box>
          </a>
          <PopOverMenu
            id={id}
            open={open}
            handleClose={handleClose}
            anchorEl={anchorEl}
          >
            <span className={classes.dropDownTitle}>Туслах цэс</span>
            <Link href={'/'} passHref>
              <MenuItem onClick={handleClose}>
                <ListItemIcon className={classes.menuIcon}>
                  <Language fontSize="small" />
                </ListItemIcon>
                Үнвсэн вэб хуудас
              </MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>
              <ListItemIcon className={classes.menuIcon}>
                <Help fontSize="small" />
              </ListItemIcon>
              Заавар
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon className={classes.menuIcon}>
                <Info fontSize="small" />
              </ListItemIcon>
              Тухай
            </MenuItem>
          </PopOverMenu>
        </Box>
        <Box className={classes.linkItem}>
          <a
            className={`${classes.link} `}
            id={'user-menu'}
            onClick={(event) => handleClick(event, 'user')}
          >
            <Box className={classes.linkItemInner}>
              <AccountCircle className={classes.icon} />
            </Box>
          </a>
          <PopOverMenu
            id={userId}
            open={openUser}
            handleClose={handleClose}
            anchorEl={userEl}
          >
            <span className={classes.dropDownTitle}>Хэглэгчийн цэс</span>
            <MenuItem onClick={handleClose}>
              <ListItemIcon className={classes.menuIcon}>
                <Person fontSize="small" />
              </ListItemIcon>
              Профайл
            </MenuItem>
            <MenuItem onClick={handleLogOut}>
              <ListItemIcon className={classes.menuIcon}>
                <ExitToApp fontSize="small" />
              </ListItemIcon>
              Гарах
            </MenuItem>
          </PopOverMenu>
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  primaryLogo: {
    position: 'absolute',
    marginTop: '8px',
    top: '0',
    right: '0',
    left: '0',
    display: 'inline-block',
    height: '90px',
    whiteSpace: 'nowrap',
    padding: '10px',
  },
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
    minWidth: 26,
  },
  dropDownTitle: {
    display: 'block',
    fontSize: '12px',
    padding: '8px 18px',
    color: '#999',
    borderBottom: '1px solid #ececec',
    lineHeight: '20px',
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
