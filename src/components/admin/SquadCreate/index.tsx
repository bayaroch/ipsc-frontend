import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { Paper, Button, Box, Grid, CircularProgress } from '@mui/material/'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import TimeRange from '@components/common/TimeRange'
import CustomInput from '@components/common/Input'
import useSquadCreate, {
  SquadCreateInputType,
  SquadValidateType,
} from './useSquadCreate'
import moment from 'moment'
import { Colors } from '@theme/colors'
import { SquadCreateParams } from '@services/squad.services'

export interface SquadCreateProps {
  onSubmit: (params: SquadCreateInputType) => void
  isDisabled?: boolean
  isEdit?: boolean
  editData?: SquadCreateParams
}

const SquadCreate: React.FC<SquadCreateProps> = (props) => {
  const { Controller, methods } = useSquadCreate()

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods

  const { onSubmit, isEdit, editData } = props

  const [timeStart, setTimeStart] = useState<Date | string>(new Date())

  const [timeEnd, setTimeEnd] = useState<Date | string>(new Date())

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

  useEffect(() => {
    if (isEdit && editData) {
      setTimeStart(editData?.time_start)
      setTimeEnd(editData?.time_end)
      setValue('name', editData.name)
      setValue('remark', editData.remark + '')
    }
  }, [isEdit, editData])

  const _onSubmit = (data: SquadValidateType) => {
    const params: SquadCreateInputType = Object.assign({}, data, {
      time_start: moment(timeStart).format('YYYY-MM-DD HH:mm'),
      time_end: moment(timeEnd).format('YYYY-MM-DD HH:mm'),
    })
    onSubmit(params)
  }

  return (
    <Paper sx={{ padding: '16px' }}>
      <form onSubmit={handleSubmit(_onSubmit)}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container spacing={3}>
            <Grid sm={6} md={2} item>
              <Box display="flex" alignItems="center" flex={1} height={'100%'}>
                <TimeRange timeStart={timeStart} timeEnd={timeEnd} />
              </Box>
            </Grid>
            <Grid sm={6} md={4} item>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Өдөр"
                fullWidth
                format="MM/dd/yyyy"
                value={timeStart}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
            <Grid sm={6} md={3} item>
              <KeyboardTimePicker
                margin="normal"
                id="time_start"
                name="time_start"
                fullWidth
                label="Эхлэх цаг"
                value={timeStart}
                onChange={handleDateChangeStart}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </Grid>
            <Grid sm={6} md={3} item>
              <KeyboardTimePicker
                margin="normal"
                id="time_end"
                label="Дуусах цаг"
                fullWidth
                name="time_end"
                value={timeEnd}
                onChange={handleDateChangeEnd}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} mt={1}>
            <Grid item sm={12} md={5}>
              <Controller
                name="name"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <CustomInput
                    {...rest}
                    inputRef={ref}
                    required={true}
                    labelPrimary=""
                    placeholder={'Ээлжийн нэр'}
                    fullWidth={true}
                    error={!!errors.name}
                    helperText={
                      errors.name ? _.get(errors.name, 'message', '') : ''
                    }
                  />
                )}
              />
            </Grid>
            <Grid item sm={12} md={5}>
              <Controller
                name="remark"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <CustomInput
                    {...rest}
                    name="remark"
                    inputRef={ref}
                    required={false}
                    labelPrimary=""
                    placeholder={'Нэмэлт тайлбар'}
                    fullWidth={true}
                    error={!!errors.remark}
                    helperText={
                      errors.remark ? _.get(errors.remark, 'message', '') : ''
                    }
                  />
                )}
              />
            </Grid>
            <Grid item sm={12} md={2}>
              <Box display="flex">
                <Button
                  variant="contained"
                  disabled={props.isDisabled}
                  fullWidth
                  sx={{ height: 38 }}
                  color={isEdit ? 'secondary' : 'primary'}
                  type="submit"
                >
                  {props.isDisabled ? (
                    <CircularProgress
                      style={{ height: 22, width: 22, color: Colors.white }}
                    />
                  ) : (
                    <> {isEdit ? 'Засах' : 'Үүсгэх'}</>
                  )}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
      </form>
    </Paper>
  )
}

SquadCreate.defaultProps = {
  isDisabled: false,
  isEdit: false,
}

export default SquadCreate
