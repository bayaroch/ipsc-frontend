import React, { useEffect, useState } from 'react'
import {
  Dialog,
  Button,
  ButtonGroup,
  Divider,
  Box,
  Grid,
  DialogContent,
  Typography,
} from '@mui/material/'
import { Colors } from '@theme/colors'
import { MatchTypeCreateParams } from '@services/match-type.services'
import CustomInput from '@components/common/Input'
import _ from 'lodash'
import { FieldValues } from 'react-hook-form'
import useCreateForm from './useCreateForm'
import { SupportItem } from '@services/support.services'

interface PickerProps {
  open: boolean
  handleClose: () => void
  submit: (data: MatchTypeCreateParams) => void
  badges: SupportItem[]
}

const MatchTypeCreate: React.FC<PickerProps> = (props) => {
  const { open, handleClose, submit } = props
  const { methods, Controller, initValues } = useCreateForm()

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = methods

  useEffect(() => {
    if (!open) {
      reset()
    }
  }, [open])

  useEffect(() => {
    if (open) {
      reset(initValues)
    }
  }, [open])

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSubmit = (data: MatchTypeCreateParams) => {
    if (data) {
      submit({
        ...data
      })
    }
  }

  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <form id="matchType-create-update" onSubmit={handleSubmit(onSubmit)}>
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
          <Button
            type="submit"
            style={{ borderRadius: 0, borderColor: Colors.white }}
          >
            Хадгалах
          </Button>
        </ButtonGroup>
        <Divider style={{ marginBottom: 40 }} />
        <DialogContent>
          <Box sx={{ position: 'relative' }}>
            <Typography
              variant="h3"
              style={{ marginBottom: 40 }}
              align="center"
              component="h3"
            >
              MatchType Нэмэх
            </Typography>
            <section style={{ marginBottom: 20 }}>
              <Grid spacing={3} container>
                <Grid item sm={12} xs={12} md={12}>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field: { ref, ...rest } }: FieldValues) => (
                      <CustomInput
                        {...rest}
                        inputRef={ref}
                        required={true}
                        labelPrimary="Нэр"
                        type="text"
                        inputProps={{ autoComplete: 'off' }}
                        placeholder={'Handgun'}
                        fullWidth={true}
                        error={!!errors.name}
                        helperText={
                          errors.name
                            ? _.get(errors.name, 'message', '')
                            : ''
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item sm={12} xs={12} md={12}>
                  <Controller
                    name="remark"
                    control={control}
                    render={({ field: { ref, ...rest } }: FieldValues) => (
                      <CustomInput
                        {...rest}
                        inputRef={ref}
                        required={true}
                        labelPrimary="Тайлбар"
                        type="text"
                        inputProps={{ autoComplete: 'off' }}
                        placeholder={'Тайлбар'}
                        fullWidth={true}
                        error={!!errors.remark}
                        helperText={
                          errors.remark
                            ? _.get(errors.remark, 'message', '')
                            : ''
                        }
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </section>
          </Box>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default MatchTypeCreate
