import { forwardRef } from 'react'
import {
  makeStyles,
  Dialog,
  Button,
  ButtonGroup,
  Slide,
  Divider,
  Box,
  DialogContent,
} from '@material-ui/core/'
import { TransitionProps } from '@material-ui/core/transitions'
import { Colors } from '@theme/colors'
import { MemberItem, UserCreateParams } from '@services/account.services'

interface PickerProps {
  open: boolean
  initData?: MemberItem
  handleClose: () => void
  onSubmit: (data: UserCreateParams) => void
  type: 'update' | 'create'
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const MemberUpsert: React.FC<PickerProps> = (props) => {
  const { open, handleClose } = props

  const classes = useStyles()

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const submit = () => {}

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
        <Button
          style={{ borderRadius: 0, borderColor: Colors.white }}
          onClick={() => submit()}
        >
          Хадгалах
        </Button>
      </ButtonGroup>
      <Divider />
      <DialogContent>
        <Box className={classes.container}>...</Box>
      </DialogContent>
    </Dialog>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    padding: 0,
  },
}))

export default MemberUpsert
