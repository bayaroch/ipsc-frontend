import React from 'react'
import moment from 'moment'
import { Box, makeStyles } from '@material-ui/core'

interface ButtonProps {
  timeStart: string
  timeEnd: string
}

const TimeRange: React.FC<ButtonProps> = ({ timeStart, timeEnd }) => {
  const classes = useStyles()
  const title = moment(timeStart).format('YYYY-MM-DD, dddd')
  const ts = moment(timeStart).format('hh:mm')
  const te = moment(timeEnd).format('hh:mm')

  return (
    <Box>
      <Box className={classes.title}>{title}</Box>
      <Box className={classes.range}>
        {ts} - {te}
      </Box>
    </Box>
  )
}

TimeRange.defaultProps = {}

const useStyles = makeStyles({
  title: {
    fontSize: 11,
  },
  range: {},
})

export default TimeRange
