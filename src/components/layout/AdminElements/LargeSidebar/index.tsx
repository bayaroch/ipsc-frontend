import React from 'react'
import {
  makeStyles,
  Box,
  ListItemIcon,
  ListItem,
  Typography,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Dashboard } from '@material-ui/icons'
import { ADMIN_MENU_LARGE, MEMBER_MENU_LARGE } from '@constants/admin.constants'
import { memberType } from '@store/auth/selectors'
import { useSelector } from 'react-redux'
import { USER_TYPE } from '@constants/user.constants'

interface AdminHeaderProps {}

const LargeSideBar: React.FC<AdminHeaderProps> = () => {
  const classes = useStyles()
  const router = useRouter()
  const userType = useSelector(memberType)

  return (
    <Box id="sidebar-main" className={`${classes.sidebar} sidebar-main`}>
      <Box className={`${classes.navigationContent} navigation-content`}>
        <section className={`${classes.menuSection}`}>
          <Link href={'/admin'} passHref>
            <ListItem
              className={classes.listItem}
              selected={router.pathname === '/admin'}
            >
              <ListItemIcon className={classes.iconItem}>
                <Dashboard className={classes.icon} />
              </ListItemIcon>
              <Typography className={classes.text}>DashBoard</Typography>
            </ListItem>
          </Link>
        </section>
        {userType === USER_TYPE.USER_ADMIN ? (
          <section className={classes.menuSection}>
            <Box className={classes.sectionTitle}>Aдмин цэс</Box>
            {ADMIN_MENU_LARGE.map((i) => {
              return (
                <Link key={i.id} href={i.route} passHref>
                  <ListItem
                    className={classes.listItem}
                    selected={router.pathname === i.route}
                  >
                    <ListItemIcon className={classes.iconItem}>
                      {React.createElement(i.icon)}
                    </ListItemIcon>
                    <Typography className={classes.text}>{i.name}</Typography>
                  </ListItem>
                </Link>
              )
            })}
          </section>
        ) : null}
        <section className={classes.menuSection}>
          <Box className={classes.sectionTitle}>Гишүүдийн цэс</Box>
          {MEMBER_MENU_LARGE.map((i) => {
            return (
              <Link key={i.id} href={i.route} passHref>
                <ListItem
                  className={classes.listItem}
                  selected={router.pathname === i.route}
                >
                  <ListItemIcon className={classes.iconItem}>
                    {React.createElement(i.icon)}
                  </ListItemIcon>
                  <Typography className={classes.text}>{i.name}</Typography>
                </ListItem>
              </Link>
            )
          })}
        </section>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 16,
  },
  iconItem: {
    minWidth: 30,
    '& .MuiSvgIcon-root': {
      fontSize: 18,
    },
  },
  sectionTitle: {
    position: 'relative',
    color: '#b6bfcc',
    fontSize: '11px',
    fontWeight: 500,
    textTransform: 'uppercase',
    padding: '16px 50px 16px 24px',
  },
  sidebar: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    paddingLeft: '70px',
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
    WebkitTransition: '0.3s',
    transition: '0.3s',
  },
  listItem: {
    paddingLeft: 20,
    paddingRight: 20,
    cursor: 'pointer',
    color: '#768191',
    textDecoration: 'none',
    padding: '12px 40px 12px 18px',
    position: 'relative',
    fontSize: '13px',
    fontWeight: 500,
    '&:hover .MuiSvgIcon-root': {
      color: theme.palette.primary.main,
      transition: 'all 0.3s ease',
    },
    '&:hover': {
      color: theme.palette.primary.main,
      fontWeight: 700,
      transition: 'all 0.3s ease',
    },
  },
  navigationContent: {
    listStyle: 'none',
    width: '100%',
    height: '100%',
    display: 'none',
    margin: '0',
  },
  menuSection: {
    position: 'relative',
    margin: '20px 15px',
  },
  text: {
    fontWeight: 500,
    fontSize: 13,
  },
}))

export default LargeSideBar
