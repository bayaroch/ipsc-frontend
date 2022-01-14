import { forwardRef, useEffect, useState } from 'react'
import {
  Dialog,
  Button,
  ButtonGroup,
  Slide,
  Divider,
  Box,
  Grid,
  MenuItem,
  FormControl,
  DialogContent,
  Typography,
  InputAdornment,
  IconButton,
  SlideProps,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from '@mui/material'
import { Colors } from '@theme/colors'
import { MemberItem, UserCreateParams } from '@services/account.services'
import CustomInput from '@components/common/Input'
import _ from 'lodash'
import { CustomLabel } from '@components/common/Input'
import Select from '@components/common/Select'
import { FieldValues } from 'react-hook-form'
import { CLASS_TYPE_DATA, MEMBER_TYPE_DATA } from '@constants/common.constants'
import { GENDER_DATA } from '@constants/user.constants'
import CustomSwitch from '@components/common/CustomSwitch'
import moment from 'moment'
import useUpdateForm from './useUpdateForm'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { LockOpen, Lock, Backup } from '@mui/icons-material'
import { validation } from '@constants/text.constants'
import { useUpload } from '@containers/Providers/FileUpload'
import { SupportItem } from '@services/support.services'
import Avatar from '@components/common/Avatar'

interface PickerProps {
  open: boolean
  initData?: MemberItem | null
  handleClose: () => void
  submit: (data: UserCreateParams) => void
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

const MemberUpdate: React.FC<PickerProps> = (props) => {
  const { open, handleClose, submit, initData, badges } = props
  const [values, setValues] = useState<State>({
    showPassword: false,
    disabled: true,
  })

  const upload = useUpload()

  const { methods, Controller } = useUpdateForm()

  const {
    control,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods

  useEffect(() => {
    if (!open) {
      reset()
    }
  }, [open])

  useEffect(() => {
    if (open && initData) {
      const formValue = Object.assign({}, initData, {
        birthday: moment(initData.birthday).format('YYYY-MM-DDTHH:mm'),
      })
      const newData = _.omit(formValue, 'id')
      reset({
        ...newData,
        mo_badge: newData.mo_badge
          ? newData.mo_badge.split(',').filter(function (e) {
              return e
            })
          : [],
      })
    }
  }, [open])

  const handleUpload = () => {
    upload()
      .then((url: string) => {
        setValue('img_url', url)
      })
      .catch(() => null)
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSubmit = (data: UserCreateParams) => {
    if (data) {
      submit({
        ...data,
        mo_badge: data.mo_badge ? data.mo_badge.toString() : '',
      })
    }
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickUnlock = () => {
    setValues({ ...values, disabled: !values.disabled })
    if (!values.disabled) methods.setValue('password', '')
  }

  const handleMulti = (event: any) => {
    const {
      target: { value },
    } = event
    setValue('mo_badge', typeof value === 'string' ? value.split(',') : value)
  }

  const renderValue = (selected: any) => {
    return (
      <>
        {selected &&
          selected.map((s: string) => {
            const name = _.find(badges, { id: Number(s) })?.shorthand
            return name ? `${name} | ` : ''
          })}
      </>
    )
  }

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <form id="user-update" onSubmit={handleSubmit(onSubmit)}>
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
                        disabled={values.disabled}
                        required={true}
                        inputRef={ref}
                        labelPrimary="Нууц үг"
                        fullWidth={true}
                        inputProps={{ autoComplete: 'off' }}
                        type={values.showPassword ? 'text' : 'password'}
                        placeholder={'Нууц үг солих'}
                        error={!!errors.password}
                        helperText={
                          errors.password
                            ? _.get(errors.password, 'message', '')
                            : ''
                        }
                        startAdornment={
                          <InputAdornment position="start">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickUnlock}
                            >
                              {values.disabled ? <Lock /> : <LockOpen />}
                            </IconButton>
                          </InputAdornment>
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
                  <p style={{ fontSize: 11, fontStyle: 'italic' }}>
                    {validation.password}
                  </p>
                </Grid>
              </Grid>
            </Box>
            <Box component="section" sx={{ marginBottom: '20px' }}>
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
            </Box>
            <Box component="section" sx={{ marginBottom: '20px' }}>
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
            </Box>
            <Box component="section" sx={{ marginBottom: '20px' }}>
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
            </Box>

            <Box component="section" sx={{ marginBottom: '20px' }}>
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
                    render={({
                      field: { ref, value, ...rest },
                    }: FieldValues) => {
                      return (
                        <CustomInput
                          {...rest}
                          required={false}
                          startAdornment={
                            <Avatar
                              src={value}
                              sx={{ width: 30, height: 30, borderRadius: 1 }}
                            />
                          }
                          value={value}
                          inputRef={ref}
                          fullWidth={true}
                          labelPrimary="Зураг холбоос"
                          placeholder="https://example.com/someimage.jpg"
                          type="text"
                          error={!!errors.img_url}
                          endAdornment={
                            <IconButton onClick={handleUpload}>
                              <Backup />
                            </IconButton>
                          }
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
              <Grid item sm={12} md={6}>
                <Controller
                  name="mo_badge"
                  control={control}
                  render={({ field: { ref, value } }: FieldValues) => (
                    <Select
                      inputRef={ref}
                      onChange={(e) => handleMulti(e)}
                      fullWidth={true}
                      value={value}
                      input={<OutlinedInput label="Tag" />}
                      label="Mo Badge"
                      multiple
                      placeholder={'Төрөл'}
                      error={!!errors.mo_badge}
                      renderValue={renderValue}
                      helperText={
                        errors.mo_badge
                          ? _.get(errors.mo_badge, 'message', '')
                          : ''
                      }
                    >
                      {badges.map((item) => {
                        return (
                          <MenuItem value={item.id.toString()} key={item.id}>
                            <Checkbox
                              checked={value.includes(item.id.toString())}
                            />
                            <ListItemText primary={item.name} />
                          </MenuItem>
                        )
                      })}
                    </Select>
                  )}
                />
              </Grid>
            </Box>
          </Box>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default MemberUpdate
