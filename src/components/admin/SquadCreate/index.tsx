import React, { useEffect } from 'react'
import _ from 'lodash'
import { Paper, Button, Box, Grid, CircularProgress } from '@mui/material/'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import CustomInput from '@components/common/Input'
import useSquadCreate, {
  SquadCreateInputType,
  SquadValidateType,
} from './useSquadCreate'
import { Colors } from '@theme/colors'
import { SquadCreateParams } from '@services/squad.services'

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

  const { onSubmit, isEdit, editData } = props

  useEffect(() => {
    if (isEdit && editData) {
      setValue('name', editData.name)
      setValue('remark', editData.remark + '')
    }
  }, [isEdit, editData])

  const _onSubmit = (data: SquadValidateType) => {
    const params = {
      ...data,
      time_start: '',
      time_end: '',
    }
    onSubmit(params)
  }

  return (
    <Paper sx={{ padding: '16px' }}>
      <form onSubmit={handleSubmit(_onSubmit)}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container spacing={3}>
            <Grid sm={6} xs={12} md={2} item></Grid>
          </Grid>
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} sm={12} md={10}>
              <Controller
                name="name"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <CustomInput
                    {...rest}
                    inputRef={ref}
                    required={true}
                    labelPrimary="Ээлжийн нэр"
                    placeholder={'Ээлж 1, Ээлж 2 etc'}
                    fullWidth={true}
                    error={!!errors.name}
                    helperText={
                      errors.name ? _.get(errors.name, 'message', '') : ''
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
                  sx={{ height: 38, mt: 3.5 }}
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
