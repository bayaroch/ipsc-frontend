import { Chip, ChipProps, makeStyles } from '@material-ui/core'
import { MatchProgressType } from '@utils/helpers/common.helper'

import { orange, green, grey } from '@material-ui/core/colors'
import { MATCH_PROGRESS_STATUS } from '@constants/common.constants'
import _ from 'lodash'

const colors = [
  { id: MATCH_PROGRESS_STATUS.READY, value: grey[100] },
  {
    id: MATCH_PROGRESS_STATUS.REGISTERING,
    value: green[100],
  },
  {
    id: MATCH_PROGRESS_STATUS.REGISTERING_CLOSED,
    value: orange[900],
  },
  {
    id: MATCH_PROGRESS_STATUS.IN_PROGRESS,
    value: green[100],
  },
  {
    id: MATCH_PROGRESS_STATUS.COMPLETED,
    value: green[100],
  },
  {
    id: MATCH_PROGRESS_STATUS.CANCELLED,
    value: grey[100],
  },
]

const useStyles = makeStyles(() => ({
  root: {
    padding: 2,
    height: 30,
    '& .MuiChip-label': {
      color: '#fff',
    },
  },
}))

export interface StatusChip extends ChipProps {
  status: MatchProgressType
}

const StatusChip: React.FC<StatusChip> = ({ status, ...rest }) => {
  const classes = useStyles()
  const bgColor = _.filter(colors, (c) => c.id === status.id)[0].value
  return (
    <Chip
      className={classes.root}
      style={{ backgroundColor: bgColor }}
      {...rest}
    />
  )
}

export default StatusChip
