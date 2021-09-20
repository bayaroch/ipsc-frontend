import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import { useRouter } from 'next/router'
import { Hidden } from '@material-ui/core'

import { Colors } from '@theme/colors'

export interface AdminHeaderProps {
  open: boolean
  setOpen: (open: boolean) => void
  title?: string
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ open, setOpen, title }) => {
  const classes = useStyles({ open, setOpen })
  const router = useRouter()
  return (
    <div className={`${classes.root}`}>
      <AppBar
        className={`${open ? classes.open : ''}`}
        elevation={0}
        position="relative"
        color="default"
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
          <Typography className={classes.title} noWrap={true}>
            {title}
          </Typography>
          <Hidden smDown>
            <Button
              variant="contained"
              size="small"
              startIcon={<AddCircleOutline />}
              color="secondary"
              className={'hidden-sm'}
              onClick={() => router.push('/admin/matches/create')}
            >
              Тэмцээн
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
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
  },
  open: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
    flexGrow: 1,
  },
}))

export default AdminHeader
