import React from 'react'
import { Popover } from '@mui/material/'

export interface PopOverMenuProps {
  id: string
  open: boolean
  anchorEl: HTMLElement | null
  handleClose: () => void
}

const PopOverMenu: React.FC<PopOverMenuProps> = ({
  id,
  open,
  anchorEl,
  handleClose,
  children,
}) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      sx={{
        paper: {
          background: '#fff',
          WebkitBoxShadow: '0 20px 60px 0 rgb(0 0 0 / 15%)',
          boxShadow: '0 20px 60px 0 rgb(0 0 0 / 15%)',
          border: '0 none',
          borderRadius: '12px',
          padding: '0',
        },
      }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      {children}
    </Popover>
  )
}

// const useStyles = makeStyles(() => ({
//   popoverPaper: {
//     background: '#fff',
//     WebkitBoxShadow: '0 20px 60px 0 rgb(0 0 0 / 15%)',
//     boxShadow: '0 20px 60px 0 rgb(0 0 0 / 15%)',
//     border: '0 none',
//     borderRadius: '12px',
//     padding: '0',
//   },
// }))

export default PopOverMenu
