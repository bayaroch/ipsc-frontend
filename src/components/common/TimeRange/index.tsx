import React from 'react'
import moment from 'moment'
import { Box } from '@mui/material/'

interface ButtonProps {
  timeStart: string | Date
  timeEnd: string | Date
}

const TimeRange: React.FC<ButtonProps> = ({ timeStart, timeEnd }) => {
  const title = moment(timeStart).format('YYYY-MM-DD, dddd')
  const ts = moment(timeStart).format('HH:mm')
  const te = moment(timeEnd).format('HH:mm')

  return (
    <Box>
      <Box sx={{ fontSize: 11 }}>{title}</Box>
      <Box>
        {ts} - {te}
      </Box>
    </Box>
  )
}

TimeRange.defaultProps = {}

export default TimeRange
