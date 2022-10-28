import { forwardRef } from 'react'
import {
  Dialog,
  Button,
  ButtonGroup,
  Slide,
  SlideProps,
  Divider,
  Typography,
  Box,
} from '@mui/material/'
import { Colors } from '@theme/colors'
import Score from '../MatchDetailContainer/Scores'
import { SupportItem } from '@services/support.services'
import { DivisionScoreList } from '@store/match/selectors/helpers'
import { MatchItem } from '@store/match/actions/types'
import _ from 'lodash'
import { helper } from '@utils/helpers/common.helper'

interface PickerProps {
  open: null | { match_id: number; user_id: number; division_id: number }
  handleClose: () => void
  divisions: SupportItem[]
  classData: SupportItem[]
  data: DivisionScoreList
  detail: MatchItem
}

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const MatchScorePopup: React.FC<PickerProps> = (props) => {
  const { open, handleClose, divisions, classData, data, detail } = props

  const count =
    detail && open
      ? _.filter(
          detail?.match_scores,
          (s) => s.division_id === open.division_id
        ).length
      : ''

  return (
    <Dialog
      fullScreen
      open={open ? true : false}
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
      <Box>
        {open !== null ? (
          <Box sx={{ p: 5 }}>
            <Box>
              <Typography variant="h2" align="center">
                {detail.name}
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body1" align="center">
                Оролцогчдын тоо {detail?.match_scores.length} ,{' '}
                {_.get(
                  helper.groupTitleHelper(open.division_id, divisions),
                  'name',
                  ''
                )}{' '}
                {count}
              </Typography>
            </Box>
            <Score data={data} divisions={divisions} classData={classData} />
          </Box>
        ) : null}
      </Box>
    </Dialog>
  )
}

export default MatchScorePopup
