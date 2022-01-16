import { ChangeEvent, forwardRef, useState } from 'react'
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
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material/'
import { SupportItem } from '@services/support.services'
import { Colors } from '@theme/colors'

interface PickerProps {
  open: boolean
  divisions: SupportItem[]
  handleClose: () => void
  isRo: boolean
  onSubmit: (id: number, is_ro: number) => void
  validate?: (v: string) => void
}

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const MatchDivisionPicker: React.FC<PickerProps> = (props) => {
  const { open, divisions, handleClose, onSubmit, isRo, validate } = props
  const [selected, choose] = useState<number>(-1)
  const [roField, setRoField] = useState<number>(0)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRoField(Number(e.target.value))
  }

  const handleSubmit = () => {
    if (selected === -1) {
      validate && validate('Division сонгоно уу')
    } else {
      onSubmit(selected, roField)
    }
  }

  const renderRoSection = () => {
    if (isRo)
      return (
        <>
          <Box
            sx={{
              display: 'flex',
              padding: '20px 10px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="gender"
                name="row-radio-buttons-group"
                value={roField}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={0}
                  control={<Radio />}
                  label="Буудагчаар оролцох"
                />
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="Шүүгчээр давхар ажиллах"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Divider />
        </>
      )
  }

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
          onClick={() => handleSubmit()}
        >
          Баталгаажуулах
        </Button>
      </ButtonGroup>
      <Divider />
      {renderRoSection()}
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
