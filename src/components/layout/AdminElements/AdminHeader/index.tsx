import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'

import { Colors } from '@theme/colors'

export interface AdminHeaderProps {
  open: boolean
  setOpen: (open: boolean) => void
  title?: string
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ open, setOpen, title }) => {
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
        </Toolbar>
      </AppBar>
    </Box>
  )
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     transition: 'all 0.24s ease-in-out',
//     background: '#fff',
//     flexGrow: 1,
//     '& .MuiAppBar-root': {
//       zIndex: 80,
//       background: Colors.white,
//       paddingLeft: 0,
//       borderBottom: '1px solid #eee',
//     },
//     '& .MuiToolbar-regular': {
//       minHeight: 50,
//     },
//   },
//   open: {},
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     fontWeight: 600,
//     flexGrow: 1,
//   },
// }))

export default AdminHeader
