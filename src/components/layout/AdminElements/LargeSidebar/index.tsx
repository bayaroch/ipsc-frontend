import React from 'react'
import {
  Box,
  ListItemIcon,
  ListItem,
  Typography,
  IconButton,
} from '@mui/material/'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Close, Dashboard } from '@mui/icons-material'
import { ADMIN_MENU_LARGE, MEMBER_MENU_LARGE } from '@constants/admin.constants'
import { memberType } from '@store/auth/selectors'
import { useSelector } from 'react-redux'
import { USER_TYPE } from '@constants/user.constants'

interface LargeSideBarProps {
  onCloseClick?: () => void
}

const LargeSideBar: React.FC<LargeSideBarProps> = ({ onCloseClick }) => {
  const router = useRouter()
  const userType = useSelector(memberType)

  return (
    <Box
      id="sidebar-main"
      className={`sidebar-main`}
      sx={{
        position: 'fixed',
        top: '0',
        bottom: '0',
        paddingLeft: { xs: 0, sm: 0, md: '70px', lg: '70px', xl: '70px' },
        WebkitBoxSizing: 'border-box',
        boxSizing: 'border-box',
        width: '320px',
        background: 'transparent',
        display: 'flex',
        height: '100%',
        WebkitBoxOrient: 'vertical',
        WebkitBoxDirection: 'normal',
        msFlexDirection: 'column',
        flexDirection: 'column',
        left: 'calc(-290px - 20px)',
        zIndex: 90,
        willChange: 'auto',
        visibility: 'hidden',
        opacity: 0,
      }}
    >
      <Box
        sx={{
          listStyle: 'none',
          width: '100%',
          height: '100%',
          display: 'none',
          margin: '0',
        }}
        className={`navigation-content`}
      >
        <Box
          sx={{
            display: { sm: 'block', xs: 'block', md: 'none', lg: 'none' },
            position: 'absolute',
            right: 5,
            top: 5,
            zIndex: 100,
          }}
        >
          <IconButton
            onClick={(e) => {
              e.stopPropagation()
              onCloseClick && onCloseClick()
            }}
          >
            <Close />
          </IconButton>
        </Box>
        <Box sx={{ position: 'relative', margin: '20px 15px' }}>
          <Link href={'/admin'} passHref>
            <ListItem
              sx={{
                paddingLeft: '20px',
                paddingRight: '20px',
                cursor: 'pointer',
                color: '#768191',
                textDecoration: 'none',
                padding: '12px 40px 12px 18px',
                position: 'relative',
                fontSize: '13px',
                fontWeight: 500,
                '&:hover .MuiSvgIcon-root': {
                  color: (theme) => theme.palette.primary.main,
                  transition: 'all 0.3s ease',
                },
                '&:hover': {
                  color: (theme) => theme.palette.primary.main,
                  fontWeight: 700,
                  transition: 'all 0.3s ease',
                },
              }}
              selected={router.pathname === '/admin'}
            >
              <ListItemIcon
                sx={{
                  minWidth: 30,
                  '& .MuiSvgIcon-root': {
                    fontSize: 18,
                  },
                }}
              >
                <Dashboard sx={{ fontSize: 16 }} />
              </ListItemIcon>
              <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
                Эхлэл
              </Typography>
            </ListItem>
          </Link>
        </Box>
        {userType === USER_TYPE.USER_ADMIN ? (
          <Box sx={{ position: 'relative', margin: '20px 15px' }}>
            <Box
              sx={{
                position: 'relative',
                color: '#b6bfcc',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                padding: '16px 50px 16px 24px',
              }}
            >
              Aдмин цэс
            </Box>
            {ADMIN_MENU_LARGE.map((i) => {
              return (
                <Link key={i.id} href={i.route} passHref>
                  <ListItem
                    sx={{
                      paddingLeft: '20px',
                      paddingRight: '20px',
                      cursor: 'pointer',
                      color: '#768191',
                      textDecoration: 'none',
                      padding: '12px 40px 12px 18px',
                      position: 'relative',
                      fontSize: '13px',
                      fontWeight: 500,
                      '&:hover .MuiSvgIcon-root': {
                        color: (theme) => theme.palette.primary.main,
                        transition: 'all 0.3s ease',
                      },
                      '&:hover': {
                        color: (theme) => theme.palette.primary.main,
                        fontWeight: 700,
                        transition: 'all 0.3s ease',
                      },
                    }}
                    selected={router.pathname === i.route}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 30,
                        '& .MuiSvgIcon-root': {
                          fontSize: 18,
                        },
                      }}
                    >
                      {React.createElement(i.icon)}
                    </ListItemIcon>
                    <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
                      {i.name}
                    </Typography>
                  </ListItem>
                </Link>
              )
            })}
          </Box>
        ) : null}
        <Box sx={{ position: 'relative', margin: '20px 15px' }}>
          <Box
            sx={{
              position: 'relative',
              color: '#b6bfcc',
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              padding: '16px 50px 16px 24px',
            }}
          >
            Гишүүдийн цэс
          </Box>
          {MEMBER_MENU_LARGE.map((i) => {
            return (
              <Link key={i.id} href={i.route} passHref>
                <ListItem
                  sx={{
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    cursor: 'pointer',
                    color: '#768191',
                    textDecoration: 'none',
                    padding: '12px 40px 12px 18px',
                    position: 'relative',
                    fontSize: '13px',
                    fontWeight: 500,
                    '&:hover .MuiSvgIcon-root': {
                      color: (theme) => theme.palette.primary.main,
                      transition: 'all 0.3s ease',
                    },
                    '&:hover': {
                      color: (theme) => theme.palette.primary.main,
                      fontWeight: 700,
                      transition: 'all 0.3s ease',
                    },
                  }}
                  selected={router.pathname === i.route}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 30,
                      '& .MuiSvgIcon-root': {
                        fontSize: 18,
                      },
                    }}
                  >
                    {React.createElement(i.icon)}
                  </ListItemIcon>
                  <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
                    {i.name}
                  </Typography>
                </ListItem>
              </Link>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

// const useStyles = makeStyles((theme) => ({
//   icon: {
//     fontSize: 16,
//   },
//   iconItem: {
//     minWidth: 30,
//     '& .MuiSvgIcon-root': {
//       fontSize: 18,
//     },
//   },
//   boxTitle: {
//     position: 'relative',
//     color: '#b6bfcc',
//     fontSize: '11px',
//     fontWeight: 600,
//     textTransform: 'uppercase',
//     padding: '16px 50px 16px 24px',
//   },
//   sidebar: {
//     position: 'fixed',
//     top: '0',
//     bottom: '0',
//     paddingLeft: '70px',
//     WebkitBoxSizing: 'border-box',
//     boxSizing: 'border-box',
//     width: '320px',
//     background: 'transparent',
//     display: 'flex',
//     height: '100%',
//     WebkitBoxOrient: 'vertical',
//     WebkitBoxDirection: 'normal',
//     msFlexDirection: 'column',
//     flexDirection: 'column',
//     left: 'calc(-290px - 20px)',
//     zIndex: 90,
//     willChange: 'auto',
//     visibility: 'hidden',
//     opacity: 0,
//     WebkitTransition: '0.3s',
//     transition: '0.3s',
//   },
//   listItem: {
//     paddingLeft: 20,
//     paddingRight: 20,
//     cursor: 'pointer',
//     color: '#768191',
//     textDecoration: 'none',
//     padding: '12px 40px 12px 18px',
//     position: 'relative',
//     fontSize: '13px',
//     fontWeight: 500,
//     '&:hover .MuiSvgIcon-root': {
//       color: theme.palette.primary.main,
//       transition: 'all 0.3s ease',
//     },
//     '&:hover': {
//       color: theme.palette.primary.main,
//       fontWeight: 700,
//       transition: 'all 0.3s ease',
//     },
//   },
//   navigationContent: {
//     listStyle: 'none',
//     width: '100%',
//     height: '100%',
//     display: 'none',
//     margin: '0',
//   },
//   menuBox: {
//     position: 'relative',
//     margin: '20px 15px',
//   },
//   text: {
//     fontWeight: 500,
//     fontSize: 14,
//   },
// }))

export default LargeSideBar
