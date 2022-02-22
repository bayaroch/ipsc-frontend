import React from 'react'
import moment from 'moment'
import { Box, BoxProps } from '@mui/material/'
import { Colors } from '@theme/colors'

interface ButtonProps extends BoxProps {
  timeStart: string | Date
  timeEnd: string | Date
}

const TimeRange: React.FC<ButtonProps> = ({ timeStart, timeEnd, ...rest }) => {
  const title = moment(timeStart).format('YYYY-MM-DD, dddd')
  // const titleEnd = moment(timeEnd).format('YYYY-MM-DD, dddd')
  const ts = moment(timeStart).format('HH:mm')
  const te = moment(timeEnd).format('HH:mm')

  return (
    <Box {...rest}>
      <Box sx={{ fontSize: 12, fontWeight: 600, color: Colors.primary }}>
        {title}
      </Box>
      <Box sx={{ fontWeight: 500 }}>
        {ts} - {te}
      </Box>
    </Box>
  )
}

TimeRange.defaultProps = {}

export default TimeRange
