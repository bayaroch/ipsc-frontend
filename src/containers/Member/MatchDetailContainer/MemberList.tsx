import { forwardRef } from 'react'
import {
  Dialog,
  List,
  ListItem,
  ListItemText,
  Button,
  ButtonGroup,
  Slide,
  SlideProps,
  Divider,
  Box,
  ListItemAvatar,
} from '@mui/material/'
import { Colors } from '@theme/colors'
import _ from 'lodash'
import CustomAvatar from '@components/common/Avatar'
import { ParticipantsItem } from '@services/match.services'

interface PickerProps {
  open: boolean
  members: ParticipantsItem[]
  handleClose: () => void
}

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const MemberList: React.FC<PickerProps> = (props) => {
  const { open, members, handleClose } = props

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
      <List sx={{ padding: 0 }}>
        {!_.isEmpty(members) &&
          members.map((item, i) => {
            return (
              <Box key={i}>
                <ListItem>
                  <ListItemAvatar>
                    <CustomAvatar
                      src={item.user.img_url}
                      alt={item.user.firstname}
                    />
                  </ListItemAvatar>
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

export default MemberList
