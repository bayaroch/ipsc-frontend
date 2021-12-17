import React from 'react'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import PersonIcon from '@mui/icons-material/Person'
import { blue } from '@mui/material/colors'
import { SquadListMembers } from '@services/squad.services'

export interface SimpleDialogProps {
  open: boolean
  onClose: () => void
  members: SquadListMembers[]
  title: string
}

const ListDialog = (props: SimpleDialogProps) => {
  const { onClose, members, open, title } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
      <List>
        {members.map((item) => (
          <ListItem button key={item.id}>
            <ListItemAvatar>
              <Avatar
                sx={{
                  backgroundColor: blue[100],
                  color: blue[600],
                }}
              >
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.user.firstname} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

export default ListDialog

// export default function SimpleDialogDemo() {
//   const [open, setOpen] = React.useState(false)
//   const [selectedValue, setSelectedValue] = React.useState(emails[1])

//   const handleClickOpen = () => {
//     setOpen(true)
//   }

//   const handleClose = (value: string) => {
//     setOpen(false)
//     setSelectedValue(value)
//   }

//   return (
//     <div>
//       <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
//       <br />
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Open simple dialog
//       </Button>
//       <SimpleDialog
//         selectedValue={selectedValue}
//         open={open}
//         onClose={handleClose}
//       />
//     </div>
//   )
// }
