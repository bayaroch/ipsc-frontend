import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import PersonIcon from '@material-ui/icons/Person'
import { blue } from '@material-ui/core/colors'
import { SquadListMembers } from '@services/squad.services'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
})

export interface SimpleDialogProps {
  open: boolean
  onClose: () => void
  members: SquadListMembers[]
  title: string
}

const ListDialog = (props: SimpleDialogProps) => {
  const classes = useStyles()
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
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} />
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
