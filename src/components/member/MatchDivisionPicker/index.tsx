import { forwardRef, useState } from 'react'
import {
  Dialog,
  List,
  ListItem,
  ListItemText,
  Button,
  ButtonGroup,
  Slide,
  Divider,
  SlideProps,
  Box,
} from '@mui/material/'
import { SupportItem } from '@services/support.services'
import { Colors } from '@theme/colors'

interface PickerProps {
  open: boolean
  divisions: SupportItem[]
  handleClose: () => void
  onSubmit: (id: number) => void
}

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const MatchDivisionPicker: React.FC<PickerProps> = (props) => {
  const { open, divisions, handleClose, onSubmit } = props
  const [selected, choose] = useState<number>(-1)

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
          onClick={() => onSubmit(selected)}
        >
          Баталгаажуулах
        </Button>
      </ButtonGroup>
      <Divider />
      <List>
        {divisions.map((item, i) => {
          return (
            <Box key={i}>
              <ListItem
                button
                selected={item.id === selected ? true : false}
                onClick={() => {
                  choose(item.id)
                }}
              >
                <ListItemText primary={item.name} secondary={item.shorthand} />
              </ListItem>
              <Divider />
            </Box>
          )
        })}
      </List>
    </Dialog>
  )
}

export default MatchDivisionPicker
