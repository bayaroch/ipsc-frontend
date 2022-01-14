import React from 'react'
import { Box, Tooltip, MenuItem, ListItemIcon } from '@mui/material/'
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
} from '@mui/icons-material'
import { logOut } from '@store/auth/actions'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { UserData } from '@services/auth.services'

interface AdminSideBarProps {
  currentUser: UserData
}

const AdminSideBar: React.FC<AdminSideBarProps> = ({ currentUser }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [userEl, setUserEl] = React.useState<null | HTMLElement>(null)

  const router = useRouter()
  const dispatch = useDispatch()

  const handleClick = (event: React.MouseEvent<HTMLElement>, type: string) => {
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
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'inline-block',
        width: '70px',
        height: '100%',
        verticalAlign: 'top',
        willChange: 'transform',
        zIndex: 1000,
        transition: '-webkit-transform 0.6s',
        background: '#2b50ed',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          marginTop: '8px',
          top: '0',
          right: '0',
          left: '0',
          display: 'inline-block',
          height: '90px',
          whiteSpace: 'nowrap',
          padding: '10px',
        }}
      >
        <Link href={'/admin/'} passHref>
          <Box
            component="a"
            sx={{
              position: 'relative',
              height: '70px',
              lineHeight: '70px',
              whiteSpace: 'nowrap',
              background: 'transparent',
              border: '0 none',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
            // className={`${classes.link} ${
            //   router.pathname == '/admin' ? classes.activeLink : ''
            // }`}
          >
            <img src="/images/logo-dvc.png" />
          </Box>
        </Link>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          left: 0,
          transform: 'translate3d(0, -50%, 0)',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Link href={'/admin/'} passHref>
            <Box
              component="a"
              sx={{
                position: 'relative',
                height: '70px',
                lineHeight: '70px',
                whiteSpace: 'nowrap',
                background: 'transparent',
                border: '0 none',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <Tooltip title={'Эхлэл'} placement={'right'}>
                <Box
                  sx={{
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
                  }}
                  style={{
                    backgroundColor:
                      router.pathname === '/admin'
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'transparent',
                  }}
                >
                  <Home sx={{ fontSize: 20 }} />
                </Box>
              </Tooltip>
            </Box>
          </Link>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Link href={'/admin/matches'} passHref>
            <Box
              component="a"
              sx={{
                position: 'relative',
                height: '70px',
                lineHeight: '70px',
                whiteSpace: 'nowrap',
                background: 'transparent',
                border: '0 none',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <Tooltip title={'Тэмцээн'} placement={'right'}>
                <Box
                  sx={{
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
                  }}
                  style={{
                    backgroundColor:
                      router.pathname === '/admin/matches'
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'transparent',
                  }}
                >
                  <Layers sx={{ fontSize: 20 }} />
                </Box>
              </Tooltip>
            </Box>
          </Link>
        </Box>
      </Box>
      <Box sx={{ position: 'absolute', right: '0', bottom: '0', left: '0' }}>
        <Box
          sx={{
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Box
            component="a"
            sx={{
              position: 'relative',
              height: '70px',
              lineHeight: '70px',
              whiteSpace: 'nowrap',
              background: 'transparent',
              border: '0 none',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
            id={'settings-menu'}
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              handleClick(event, 'settings')
            }
          >
            <Box
              sx={{
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
              }}
            >
              <Settings sx={{ fontSize: 20 }} />
            </Box>
          </Box>
          <PopOverMenu
            id={id}
            open={open}
            handleClose={handleClose}
            anchorEl={anchorEl}
          >
            <Box
              component="span"
              sx={{
                display: 'block',
                fontSize: '12px',
                padding: '8px 18px',
                color: '#999',
                borderBottom: '1px solid #ececec',
                lineHeight: '20px',
              }}
            >
              Туслах цэс
            </Box>
            <Link href={'/'} passHref>
              <MenuItem onClick={handleClose}>
                <ListItemIcon sx={{ minWidth: 26 }}>
                  <Language fontSize="small" />
                </ListItemIcon>
                Үндсэн веб хуудас
              </MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>
              <ListItemIcon sx={{ minWidth: 26 }}>
                <Help fontSize="small" />
              </ListItemIcon>
              Заавар
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon sx={{ minWidth: 26 }}>
                <Info fontSize="small" />
              </ListItemIcon>
              Тухай
            </MenuItem>
          </PopOverMenu>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Box
            component="a"
            sx={{
              position: 'relative',
              height: '70px',
              lineHeight: '70px',
              whiteSpace: 'nowrap',
              background: 'transparent',
              border: '0 none',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
            id={'user-menu'}
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              handleClick(event, 'user')
            }
          >
            <Box
              sx={{
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
              }}
            >
              <AccountCircle sx={{ fontSize: 20 }} />
            </Box>
          </Box>
          <PopOverMenu
            id={userId}
            open={openUser}
            handleClose={handleClose}
            anchorEl={userEl}
          >
            <Box
              component="span"
              sx={{
                display: 'block',
                fontSize: '12px',
                padding: '8px 18px',
                color: '#999',
                borderBottom: '1px solid #ececec',
                lineHeight: '20px',
              }}
            >
              Хэрэглэгчийн цэс
            </Box>
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
          </PopOverMenu>
        </Box>
      </Box>
    </Box>
  )
}

// const useStyles = makeStyles(() => ({
//   primaryLogo: {
//     position: 'absolute',
//     marginTop: '8px',
//     top: '0',
//     right: '0',
//     left: '0',
//     display: 'inline-block',
//     height: '90px',
//     whiteSpace: 'nowrap',
//     padding: '10px',
//   },
//   primaryMenu: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     display: 'inline-block',
//     width: '70px',
//     height: '100%',
//     verticalAlign: 'top',
//     willChange: 'transform',
//     zIndex: 1000,
//     webkitTransition: '-webkit-transform 0.6s',
//     transition: '-webkit-transform 0.6s',
//     background: '#2b50ed',
//   },
//   menuIcon: {
//     minWidth: 26,
//   },
//   dropDownTitle: {
//     display: 'block',
//     fontSize: '12px',
//     padding: '8px 18px',
//     color: '#999',
//     borderBottom: '1px solid #ececec',
//     lineHeight: '20px',
//   },
//   link: {
//     position: 'relative',
//     height: '70px',
//     lineHeight: '70px',
//     whiteSpace: 'nowrap',
//     background: 'transparent',
//     border: '0 none',
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     display: 'flex',
//   },
//   primaryLinks: {
//     position: 'absolute',
//     top: '50%',
//     right: 0,
//     left: 0,
//     webkittransform: 'translate3d(0, -50%, 0)',
//     transform: 'translate3d(0, -50%, 0)',
//   },
//   linkItem: {
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     display: 'flex',
//   },
//   linkItemInner: {
//     position: 'relative',
//     display: 'flex',
//     width: '40px',
//     height: '40px',
//     lineHeight: '40px',
//     margin: '0 15px',
//     color: '#fff',
//     borderRadius: '12px',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     fontSize: 20,
//   },
//   activeLink: {
//     '& $linkItemInner': {
//       color: '#fff',
//       backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     },
//   },
//   primaryFooter: {
//     position: 'absolute',
//     right: '0',
//     bottom: '0',
//     left: '0',
//   },
// }))

export default AdminSideBar
