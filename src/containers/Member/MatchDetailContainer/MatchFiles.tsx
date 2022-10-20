import { forwardRef, useState } from 'react'
import {
  Dialog,
  List,
  ListItem,
  ListItemText,
  Button,
  ButtonGroup,
  Slide,
  Stack,
  SlideProps,
  Divider,
  Box,
  ListItemSecondaryAction,
} from '@mui/material/'
import { Colors } from '@theme/colors'
import _ from 'lodash'
import { MatchFile } from '@services/match.services'
import { ArrowBack, Visibility } from '@mui/icons-material'
import HTMLParser from '@components/common/HtmlParser'

interface PickerProps {
  open: boolean
  files: MatchFile[]
  handleClose: () => void
}

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const MatchFiles: React.FC<PickerProps> = (props) => {
  const { open, files, handleClose } = props
  const [view, setView] = useState<string | null>(null)

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
      {view !== null ? (
        <Box sx={{ p: 1 }}>
          <Button
            startIcon={<ArrowBack />}
            style={{ borderRadius: 0, borderColor: Colors.white }}
            onClick={() => setView(null)}
          >
            Жагсаалтруу буцах
          </Button>
        </Box>
      ) : null}
      <Box>
        {view !== null ? (
          <Box sx={{ pt: 5, pb: 5 }}>
            <HTMLParser html={view} />
          </Box>
        ) : null}
      </Box>
      {view === null ? (
        <List sx={{ padding: 0 }}>
          {!_.isEmpty(files) &&
            files.map((item, i) => {
              return (
                <Box key={i}>
                  <ListItem>
                    <ListItemText primary={_.defaultTo(item.filename, '')} />
                    <ListItemSecondaryAction>
                      <Stack direction="row" spacing={3}>
                        <Button
                          onClick={() => setView(item.data)}
                          variant="outlined"
                          startIcon={<Visibility />}
                        >
                          Харах
                        </Button>
                        {/* <Button variant="outlined" startIcon={<FileCopy />}>
                          Татах
                        </Button> */}
                      </Stack>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </Box>
              )
            })}
        </List>
      ) : null}
    </Dialog>
  )
}

export default MatchFiles
