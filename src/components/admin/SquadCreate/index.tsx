import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import {
  Paper,
  Button,
  Box,
  Grid,
  CircularProgress,
  TextField,
} from '@mui/material/'
import { TimePicker, DatePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import TimeRange from '@components/common/TimeRange'
import CustomInput from '@components/common/Input'
import useSquadCreate, {
  SquadCreateInputType,
  SquadValidateType,
} from './useSquadCreate'
import { Colors } from '@theme/colors'
import { SquadCreateParams } from '@services/squad.services'
import moment from 'moment'

export interface SquadCreateProps {
  onSubmit: (params: SquadCreateInputType) => void
  isDisabled?: boolean
  isEdit?: boolean
  editData?: SquadCreateParams
  matchStart: string
}

const SquadCreate: React.FC<SquadCreateProps> = (props) => {
  const { Controller, methods } = useSquadCreate()

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods

  const { onSubmit, isEdit, editData, matchStart } = props

  const [timeStart, setTimeStart] = useState<Date | string>(
    new Date(matchStart)
  )

  const [timeEnd, setTimeEnd] = useState<Date | string>(new Date(matchStart))

  const handleDateChangeStart = (date: Date | null) => {
    if (date) setTimeStart(date)
  }

  const handleDateChangeEnd = (date: Date | null) => {
    if (date) setTimeEnd(date)
  }

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const start = moment(timeStart)
      const end = moment(timeEnd)
      const current = moment(date)
      start.date(current.date())
      end.date(current.date())
      setTimeStart(start.toDate())
      setTimeEnd(end.toDate())
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
    const params: SquadCreateInputType = {
      ...data,
      time_start: timeStart as string,
      time_end: timeEnd as string,
    }
    onSubmit(params)
  }

  return (
    <Paper sx={{ padding: '16px' }}>
      <form onSubmit={handleSubmit(_onSubmit)}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container spacing={3}>
            <Grid sm={6} xs={12} md={2} item>
              <Box display="flex" alignItems="center" flex={1} height={'100%'}>
                <TimeRange timeStart={timeStart} timeEnd={timeEnd} />
              </Box>
            </Grid>
            <Grid sm={6} xs={12} md={4} item>
              <DatePicker
                label="Өдөр"
                value={timeStart}
                renderInput={(props) => <TextField fullWidth {...props} />}
                onChange={handleDateChange}
              />
            </Grid>
            <Grid sm={6} xs={12} md={3} item>
              <TimePicker
                label="Эхлэх цаг"
                value={timeStart}
                ampm={false}
                renderInput={(props) => <TextField fullWidth {...props} />}
                onChange={handleDateChangeStart}
              />
            </Grid>
            <Grid sm={6} xs={12} md={3} item>
              <TimePicker
                label="Дуусах цаг"
                ampm={false}
                value={timeEnd}
                renderInput={(props) => <TextField fullWidth {...props} />}
                onChange={handleDateChangeEnd}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} sm={12} md={5}>
              <Controller
                name="name"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <CustomInput
                    {...rest}
                    inputRef={ref}
                    required={true}
                    labelPrimary=""
                    placeholder={'Ээлжийн нэр (тайлбар) '}
                    fullWidth={true}
                    error={!!errors.name}
                    helperText={
                      errors.name ? _.get(errors.name, 'message', '') : ''
                    }
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
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
                    placeholder={'Group ID #day1, #Friday #Sunday etc'}
                    fullWidth={true}
                    error={!!errors.remark}
                    helperText={
                      errors.remark ? _.get(errors.remark, 'message', '') : ''
                    }
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
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
        </LocalizationProvider>
      </form>
    </Paper>
  )
}

SquadCreate.defaultProps = {
  isDisabled: false,
  isEdit: false,
}

export default SquadCreate
