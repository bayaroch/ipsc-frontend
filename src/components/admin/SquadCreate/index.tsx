import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import _ from 'lodash'
import { Paper, Button, Box } from '@material-ui/core'
import { SquadCreateParams } from '@services/squad.services'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import TimeRange from '@components/common/TimeRange'

export interface SquadCreateProps {
  onSubmit: (params: SquadCreateParams) => void
}

const SquadCreate: React.FC<SquadCreateProps> = (props) => {
  const { onSubmit } = props

  const [timeStart, setTimeStart] = useState<Date | string>(
    new Date('2014-08-18T21:11:54')
  )

  const [timeEnd, setTimeEnd] = useState<Date | string>(
    new Date('2014-08-18T21:11:54')
  )

  const handleDateChangeStart = (date: Date | null) => {
    if (date) setTimeStart(date)
  }

  const handleDateChangeEnd = (date: Date | null) => {
    if (date) setTimeEnd(date)
  }

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setTimeStart(date)
      setTimeEnd(date)
    }
  }

  console.log(timeStart, timeEnd)

  return (
    <Paper>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box>
          <TimeRange timeStart={timeStart} timeEnd={timeEnd} />
        </Box>
        <Box></Box>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Өдөр"
          format="MM/dd/yyyy"
          value={timeStart}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="starttime-picker"
          label="Эхлэх цаг"
          value={timeStart}
          onChange={handleDateChangeStart}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="endtime-picker"
          label="Дуусах цаг"
          value={timeEnd}
          onChange={handleDateChangeEnd}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </MuiPickersUtilsProvider>
    </Paper>
  )
}

const useStyles = makeStyles({})

export default SquadCreate
