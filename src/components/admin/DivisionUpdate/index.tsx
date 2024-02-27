import { forwardRef, useEffect } from 'react'
import {
  Dialog,
  Button,
  ButtonGroup,
  Slide,
  Divider,
  Box,
  Grid,
  DialogContent,
  Typography,
  SlideProps,
} from '@mui/material'
import { Colors } from '@theme/colors'
import { DivisionItem, DivisionCreateParams } from '@services/division.services'
import CustomInput from '@components/common/Input'
import _ from 'lodash'
import { FieldValues } from 'react-hook-form'
import useUpdateForm from './useUpdateForm'
import { SupportItem } from '@services/support.services'

interface PickerProps {
  open: boolean
  initData?: DivisionItem | null
  handleClose: () => void
  submit: (data: DivisionCreateParams) => void
  badges: SupportItem[]
}

interface State {
  showPassword: boolean
  disabled: boolean
}

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const DivisionUpdate: React.FC<PickerProps> = (props) => {
  const { open, handleClose, submit, initData, badges } = props

  const { methods, Controller } = useUpdateForm()

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
    if (open && initData) {
      const formValue = Object.assign({}, initData)
      const newData = _.omit(formValue, 'id')
      reset({...newData, remark: newData.remark ? newData.remark : '',})
    }
  }, [open])

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSubmit = (data: DivisionCreateParams) => {
    if (data) {
      submit({
        ...data
      })
    }
  }

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <form id="division-update" onSubmit={handleSubmit(onSubmit)}>
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
              {'Мэдээлэл шинэчлэх'}
            </Typography>
            <Box component="section" sx={{ marginBottom: '20px' }}>
              <Grid spacing={3} container>
                <Grid item sm={12} xs={12} md={6}>
                  <Controller
                    name="shorthand"
                    control={control}
                    render={({ field: { ref, ...rest } }: FieldValues) => (
                      <CustomInput
                        {...rest}
                        inputRef={ref}
                        required={true}
                        labelPrimary="Товч"
                        type="text"
                        inputProps={{ autoComplete: 'off' }}
                        placeholder={'CL'}
                        fullWidth={true}
                        error={!!errors.shorthand}
                        helperText={
                          errors.shorthand
                            ? _.get(errors.shorthand, 'message', '')
                            : ''
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item sm={12} xs={12} md={6}>
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
                        placeholder={'Classic'}
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
              </Grid>
            </Box>
            <Box component="section" sx={{ marginBottom: '20px' }}>
              <Grid spacing={3} container>
              <Grid item sm={12} xs={12} md={6}>
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
                        placeholder={'so Classic'}
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
            </Box>
          </Box>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default DivisionUpdate
