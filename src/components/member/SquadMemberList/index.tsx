import { forwardRef } from 'react'
import {
  makeStyles,
  Dialog,
  List,
  ListItem,
  ListItemText,
  Button,
  ButtonGroup,
  Slide,
  Divider,
  Box,
} from '@material-ui/core/'
import { TransitionProps } from '@material-ui/core/transitions'
import { SquadListMembers } from '@services/squad.services'
import { Colors } from '@theme/colors'
import _ from 'lodash'

interface PickerProps {
  open: boolean
  members: SquadListMembers[]
  handleClose: () => void
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const SquadMemberList: React.FC<PickerProps> = (props) => {
  const { open, members, handleClose } = props

  const classes = useStyles()

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <ButtonGroup
        fullWidth
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
      >
        <Button
          style={{ borderRadius: 0, borderColor: Colors.white }}
          onClick={handleClose}
        >
          Буцах
        </Button>
      </ButtonGroup>
      <Divider />
      <List className={classes.container}>
        {!_.isEmpty(members) &&
          members.map((item, i) => {
            return (
              <Box key={i}>
                <ListItem button>
                  <ListItemText
                    primary={_.defaultTo(item.user.firstname, '')}
                    secondary={_.defaultTo(item.user.usercode, '')}
                  />
                </ListItem>
                <Divider />
              </Box>
            )
          })}
      </List>
    </Dialog>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    padding: 0,
  },
}))

export default SquadMemberList
