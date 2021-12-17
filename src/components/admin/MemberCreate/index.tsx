import { useEffect, useState } from 'react'
import {
  Dialog,
  Button,
  ButtonGroup,
  Divider,
  Box,
  Grid,
  MenuItem,
  FormControl,
  DialogContent,
  InputAdornment,
  IconButton,
  Typography,
} from '@mui/material/'
import { Colors } from '@theme/colors'
import { UserCreateParams } from '@services/account.services'
import CustomInput from '@components/common/Input'
import _ from 'lodash'
import { CustomLabel } from '@components/common/Input'
import Select from '@components/common/Select'
import { FieldValues } from 'react-hook-form'
import { CLASS_TYPE_DATA, MEMBER_TYPE_DATA } from '@constants/common.constants'
import { GENDER_DATA } from '@constants/user.constants'
import CustomSwitch from '@components/common/CustomSwitch'
import useCreateForm from './useCreateForm'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface PickerProps {
  open: boolean
  handleClose: () => void
  submit: (data: UserCreateParams) => void
}

interface State {
  showPassword: boolean
}

const MemberCreate: React.FC<PickerProps> = (props) => {
  const { open, handleClose, submit } = props
  const { methods, Controller, initValues } = useCreateForm()
  const [values, setValues] = useState<State>({
    showPassword: false,
  })

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
  const onSubmit = (data: UserCreateParams) => {
    if (data) {
      submit(data)
    }
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <form id="user-create-update" onSubmit={handleSubmit(onSubmit)}>
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
              Хэрэглэгч Нэмэх
            </Typography>
            <section style={{ marginBottom: 20 }}>
              <Grid spacing={3} container>
                <Grid item sm={12} md={6}>
                  <Controller
                    name="usercode"
                    control={control}
                    render={({ field: { ref, ...rest } }: FieldValues) => (
                      <CustomInput
                        {...rest}
                        inputRef={ref}
                        required={true}
                        labelPrimary="Код"
                        type="text"
                        inputProps={{ autoComplete: 'off' }}
                        placeholder={'001...'}
                        fullWidth={true}
                        error={!!errors.usercode}
                        helperText={
                          errors.usercode
                            ? _.get(errors.usercode, 'message', '')
                            : ''
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field: { ref, ...rest } }: FieldValues) => (
                      <CustomInput
                        {...rest}
                        required={true}
                        inputRef={ref}
                        labelPrimary="Нууц үг"
                        fullWidth={true}
                        inputProps={{ autoComplete: 'off' }}
                        type={values.showPassword ? 'text' : 'password'}
                        placeholder={'Эхлэх огноо'}
                        error={!!errors.password}
                        helperText={
                          errors.password
                            ? _.get(errors.password, 'message', '')
                            : ''
                        }
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                            >
                              {values.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </section>
            <section style={{ marginBottom: 20 }}>
              <Grid spacing={3} container>
                <Grid item sm={12} md={6}>
                  <Controller
                    name="firstname"
                    control={control}
                    render={({ field: { ref, ...rest } }: FieldValues) => (
                      <CustomInput
                        {...rest}
                        inputRef={ref}
                        required={true}
                        fullWidth={true}
                        labelPrimary="Нэр"
                        type="text"
                        placeholder={''}
                        error={!!errors.firstname}
                        helperText={
                          errors.firstname
                            ? _.get(errors.firstname, 'message', '')
                            : ''
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                  <Controller
                    name="lastname"
                    control={control}
                    render={({ field: { ref, ...rest } }: FieldValues) => (
                      <CustomInput
                        {...rest}
                        required={true}
                        inputRef={ref}
                        fullWidth={true}
                        labelPrimary="Овог"
                        type="text"
                        placeholder={''}
                        error={!!errors.firstname}
                        helperText={
                          errors.firstname
                            ? _.get(errors.firstname, 'message', '')
                            : ''
                        }
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </section>
            <section style={{ marginBottom: 20 }}>
              <Grid spacing={3} container>
                <Grid item sm={12} md={6}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field: { ref, ...rest } }: FieldValues) => (
                      <CustomInput
                        {...rest}
                        required={true}
                        inputRef={ref}
                        fullWidth={true}
                        labelPrimary="И-мэйл"
                        type="email"
                        placeholder={'@'}
                        error={!!errors.firstname}
                        helperText={
                          errors.firstname
                            ? _.get(errors.firstname, 'message', '')
                            : ''
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                  <Controller
                    name="usertype"
                    control={control}
                    render={({
                      field: { ref, onChange, value },
                    }: FieldValues) => (
                      <Select
                        onChange={onChange}
                        required={true}
                        fullWidth={true}
                        value={value}
                        inputRef={ref}
                        label="Хэрэглэгчийн төрөл"
                        placeholder={'Төлөв'}
                        error={!!errors.usertype}
                        helperText={
                          errors.usertype
                            ? _.get(errors.usertype, 'message', '')
                            : ''
                        }
                      >
                        {MEMBER_TYPE_DATA.map((item, index) => {
                          return (
                            <MenuItem value={item.id} key={index}>
                              {item.value}
                            </MenuItem>
                          )
                        })}
                      </Select>
                    )}
                  />
                </Grid>
              </Grid>
            </section>
            <section style={{ marginBottom: 20 }}>
              <Grid spacing={3} container>
                <Grid item sm={12} md={6}>
                  <Controller
                    name="gender"
                    control={control}
                    render={({
                      field: { ref, onChange, value },
                    }: FieldValues) => (
                      <Select
                        onChange={onChange}
                        required={true}
                        fullWidth={true}
                        inputRef={ref}
                        value={value}
                        label="Хүйс"
                        placeholder={'Төлөв'}
                        error={!!errors.gender}
                        helperText={
                          errors.gender
                            ? _.get(errors.gender, 'message', '')
                            : ''
                        }
                      >
                        {GENDER_DATA.map((item, index) => {
                          return (
                            <MenuItem value={item.id} key={index}>
                              {item.value}
                            </MenuItem>
                          )
                        })}
                      </Select>
                    )}
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                  <Controller
                    name="birthday"
                    control={control}
                    render={({ field: { ref, ...rest } }: FieldValues) => (
                      <CustomInput
                        {...rest}
                        required={true}
                        inputRef={ref}
                        fullWidth={true}
                        labelPrimary="Төрсөн өдөр"
                        inputProps={{ max: '9999-12-31T23:59' }}
                        type="date"
                        error={!!errors.birthday}
                        helperText={
                          errors.birthday
                            ? _.get(errors.birthday, 'message', '')
                            : ''
                        }
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </section>

            <section style={{ marginBottom: 20 }}>
              <Grid spacing={3} container>
                <Grid item sm={12} md={6}>
                  <Controller
                    name="class_id"
                    control={control}
                    render={({
                      field: { ref, onChange, value },
                    }: FieldValues) => (
                      <Select
                        inputRef={ref}
                        onChange={onChange}
                        required={true}
                        fullWidth={true}
                        value={value}
                        label="Класс"
                        placeholder={'Төлөв'}
                        error={!!errors.class_id}
                        helperText={
                          errors.class_id
                            ? _.get(errors.class_id, 'message', '')
                            : ''
                        }
                      >
                        {CLASS_TYPE_DATA.map((item, index) => {
                          return (
                            <MenuItem value={item.id} key={index}>
                              {item.name}
                            </MenuItem>
                          )
                        })}
                      </Select>
                    )}
                  />
                </Grid>
                <Grid item sm={12} md={3}>
                  <Controller
                    name="img_url"
                    control={control}
                    render={({ field: { ref, ...rest } }: FieldValues) => {
                      return (
                        <CustomInput
                          {...rest}
                          required={false}
                          inputRef={ref}
                          fullWidth={true}
                          labelPrimary="Зураг холбоос"
                          placeholder="https://example.com/someimage.jpg"
                          type="text"
                          error={!!errors.img_url}
                          helperText={
                            errors.img_url
                              ? _.get(errors.img_url, 'message', '')
                              : ''
                          }
                        />
                      )
                    }}
                  />
                </Grid>
                <Grid item sm={12} md={3}>
                  <Controller
                    name="enabled"
                    control={control}
                    render={({ field: { onChange, value } }: FieldValues) => {
                      return (
                        <FormControl>
                          <CustomLabel
                            text={'Төлөв (Идэвхижүүлэх)'}
                            id={'status'}
                          />
                          <CustomSwitch
                            handleChange={onChange}
                            checked={value}
                            name="enabled"
                          />
                          <p>
                            {errors.enabled
                              ? _.get(errors.enabled, 'message', '')
                              : ''}
                          </p>
                        </FormControl>
                      )
                    }}
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

export default MemberCreate
