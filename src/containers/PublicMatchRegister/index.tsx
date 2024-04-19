/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import {
  Divider,
  Box,
  Grid,
  MenuItem,
  FormControlLabel,
  Typography,
  RadioGroup,
  Radio,
} from '@mui/material/'

import CustomInput from '@components/common/Input'
import _ from 'lodash'
import Select from '@components/common/Select'
import { FieldValues } from 'react-hook-form'
import { CATEGORIES, CLASS } from '@constants/common.constants'
import { GENDER_DATA } from '@constants/user.constants'
import usePublicMatchRegister from './usePublicMatchRegister'
import { Alert, LoadingButton } from '@mui/lab'
import { useDispatch, useSelector } from 'react-redux'
import { registerPublicMatch } from '@store/match/actions'
import { createMetaSelector } from '@store/metadata/selectors'
import { RegisterPublicMatchParams, UserDetail } from '@services/match.services'
import { DivisionsItem } from '@services/match.services'

interface PublicMatchRegisterProps {
  id: string
  title: string
  match_divisions: DivisionsItem[]
}

const registerPublicMeta = createMetaSelector(registerPublicMatch)

const PublicMatchRegister: React.FC<PublicMatchRegisterProps> = ({
  id,
  title,
  match_divisions,
}) => {
  const { methods, Controller } = usePublicMatchRegister()

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isDirty, isValid },
  } = methods

  console.log(errors)
  const dispatch = useDispatch()
  const meta = useSelector(registerPublicMeta)
  const [catIds, setCatIds] = useState<string[]>([])

  useEffect(() => {
    if (id) {
      setValue('match_id', Number(id))
    }
  }, [id])

  const onSubmit = (values: any) => {
    if (_.isEmpty(errors)) {
      const UserData = _.omit(values, [
        'match_id',
        'division_id',
        'category_id',
        'remark',
        'is_main_club',
      ])

      const params: RegisterPublicMatchParams = {
        match_id: values.match_id,
        division_id: values.division_id,
        category_id: values.category_id,
        class_id: values.class_id,
        remark: values.remark,
        guest: UserData as UserDetail,
      }
      dispatch(registerPublicMatch(params))
    }
  }

  const isMainClub = watch('is_main_club')

  // eslint-disable-next-line no-console
  console.log(isMainClub)

  return (
    <form id="user-create-update" onSubmit={handleSubmit(onSubmit)}>
      {meta.error ? (
        <Alert sx={{ mb: 1 }} severity="warning">
          Алдаа гарлаа бүртгэл амжилтгүй
        </Alert>
      ) : null}
      {!_.isEmpty(errors) ? (
        <Alert sx={{ mb: 1 }} severity="warning">
          Талбар дутуу
        </Alert>
      ) : null}
      <Box sx={{ position: 'relative' }}>
        <Typography
          variant="h3"
          style={{ marginBottom: 40 }}
          align="center"
          component="h3"
        >
          {title}
        </Typography>
        <section style={{ marginBottom: 20 }}>
          <Box>
            <Controller
              name="match_id"
              control={control}
              render={({ field: { ref, ...rest } }: FieldValues) => (
                <CustomInput
                  {...rest}
                  inputRef={ref}
                  required={true}
                  readOnly
                  hidden={true}
                  sx={{ display: 'none' }}
                  type="text"
                  inputProps={{ autoComplete: 'off' }}
                  placeholder={'001...'}
                  fullWidth={true}
                  error={!!errors.match_id}
                  helperText={
                    errors.match_id ? _.get(errors.match_id, 'message', '') : ''
                  }
                />
              )}
            />
            <Box sx={{ mb: 2 }}>
              <Controller
                name="is_main_club"
                control={control}
                render={({ field }: FieldValues) => {
                  return (
                    <>
                      <Typography>Гишүүнчлэлийн ангилал</Typography>
                      <RadioGroup {...field}>
                        <FormControlLabel
                          value={1}
                          control={<Radio />}
                          label="МПБХ Төв клуб"
                        />
                        <FormControlLabel
                          value={0}
                          control={<Radio />}
                          label="Бусад"
                        />
                      </RadioGroup>
                    </>
                  )
                }}
              />
            </Box>
            {isMainClub == 0 ? (
              <>
                <Box sx={{}}>
                  <Controller
                    name="remark_other"
                    control={control}
                    render={({ field: { ref, ...rest } }: FieldValues) => {
                      return (
                        <CustomInput
                          {...rest}
                          inputRef={ref}
                          required={true}
                          labelPrimary="Бусад"
                          type="text"
                          inputProps={{ autoComplete: 'off' }}
                          placeholder={''}
                          fullWidth={true}
                          error={!!errors.remark_other}
                          helperText={
                            errors.remark_other
                              ? _.get(errors.remark_other, 'message', '')
                              : ''
                          }
                        />
                      )
                    }}
                  />
                </Box>
                <Divider sx={{ mb: 2 }} />
              </>
            ) : null}
            <Box>
              <Controller
                name="usercode"
                control={control}
                render={({ field: { ref, ...rest } }: FieldValues) => (
                  <CustomInput
                    {...rest}
                    inputRef={ref}
                    required={true}
                    labelPrimary="Гишүүнчлэлийн дугаар"
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
              <Typography>
                Төв клубын гишүүдийн хувьд хатуу үнэмлэх дээр хэвлэгдсэн 4
                оронтой гишүүнчлэлийн дугаарыг заавал оруулна.
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item sm={12} xs={12} md={6}>
                <Controller
                  name="lastname"
                  control={control}
                  render={({ field: { ref, ...rest } }: FieldValues) => (
                    <CustomInput
                      {...rest}
                      inputRef={ref}
                      required={true}
                      labelPrimary="Овог"
                      type="text"
                      inputProps={{ autoComplete: 'off' }}
                      fullWidth={true}
                      error={!!errors.lastname}
                      helperText={
                        errors.lastname
                          ? _.get(errors.lastname, 'message', '')
                          : ''
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item sm={12} xs={12} md={6}>
                <Controller
                  name="firstname"
                  control={control}
                  render={({ field: { ref, ...rest } }: FieldValues) => (
                    <CustomInput
                      {...rest}
                      inputRef={ref}
                      required={true}
                      labelPrimary="Нэр"
                      type="text"
                      inputProps={{ autoComplete: 'off' }}
                      fullWidth={true}
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
            <Grid container spacing={2}>
              <Grid item sm={12} xs={12} md={6}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { ref, ...rest } }: FieldValues) => (
                    <CustomInput
                      {...rest}
                      inputRef={ref}
                      required={true}
                      labelPrimary="И-мэйл"
                      type="text"
                      inputProps={{ autoComplete: 'off' }}
                      fullWidth={true}
                      error={!!errors.email}
                      helperText={
                        errors.email ? _.get(errors.email, 'message', '') : ''
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item sm={12} xs={12} md={6}>
                <Controller
                  name="phone_no"
                  control={control}
                  render={({ field: { ref, ...rest } }: FieldValues) => (
                    <CustomInput
                      {...rest}
                      inputRef={ref}
                      required={true}
                      labelPrimary="Утас"
                      type="text"
                      inputProps={{ autoComplete: 'off' }}
                      fullWidth={true}
                      error={!!errors.phone_no}
                      helperText={
                        errors.phone_no
                          ? _.get(errors.phone_no, 'message', '')
                          : ''
                      }
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={12} xs={12} md={6}>
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

              <Grid item sm={12} xs={12} md={6}>
                <Controller
                  name="gender"
                  control={control}
                  render={({
                    field: { ref, onChange, value },
                  }: FieldValues) => (
                    <Select
                      onChange={onChange}
                      fullWidth={true}
                      inputRef={ref}
                      value={value}
                      label="Хүйс"
                      placeholder={'Төлөв'}
                      error={!!errors.gender}
                      helperText={
                        errors.gender ? _.get(errors.gender, 'message', '') : ''
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
            </Grid>
            <Box>
              <Controller
                name="register_no"
                control={control}
                render={({ field: { ref, ...rest } }: FieldValues) => (
                  <CustomInput
                    {...rest}
                    required={true}
                    inputRef={ref}
                    fullWidth={true}
                    labelPrimary="Регистр"
                    placeholder="UY987654321"
                    error={!!errors.register_no}
                    helperText={
                      errors.birthday
                        ? _.get(errors.register_no, 'message', '')
                        : ''
                    }
                  />
                )}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Controller
                name="division_id"
                control={control}
                render={({ field: { ref, onChange, value } }: FieldValues) => (
                  <Select
                    onChange={onChange}
                    onBlur={() => {
                      const ids = match_divisions.find((item) => item.division_id == value)?.categories
                      if (ids) {
                        setCatIds(ids)
                      }
                    }}
                    fullWidth={true}
                    value={value}
                    inputRef={ref}
                    label="Тэмцээнд оролцох ангилал"
                    placeholder={'Төлөв'}
                    error={!!errors.division_id}
                    helperText={
                      errors.division_id
                        ? _.get(errors.division_id, 'message', '')
                        : ''
                    }
                  >
                    {match_divisions.map((item, index) => {
                      return (
                        <MenuItem value={item.division_id} key={index}>
                          {item.name}
                        </MenuItem>
                      )
                    })}
                  </Select>
                )}
              />
            </Box>
            <Box sx={{ mb: 1 }}>
              <Controller
                name="category_id"
                control={control}
                render={({ field: { ref, onChange, value } }: FieldValues) => (
                  <Select
                    onChange={onChange}
                    fullWidth={true}
                    value={value}
                    inputRef={ref}
                    label="Тэмцээнд оролцох категори"
                    placeholder={'Төлөв'}
                    error={!!errors.category_id}
                    helperText={
                      errors.category_id
                        ? _.get(errors.category_id, 'message', '')
                        : ''
                    }
                  >
                    {CATEGORIES.filter(item => catIds.includes(item.id.toString())).map((item, index) => {
                      return (
                        <MenuItem value={item.id} key={index}>
                          {item.name}
                        </MenuItem>
                      )
                    })}
                  </Select>
                )}
              />
              <Typography>
                Ямар ч категорид харьяалагдахгүй бол Uncategorized сонголтыг
                сонгоно.
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Controller
                name="class_id"
                control={control}
                render={({ field: { ref, onChange, value } }: FieldValues) => (
                  <Select
                    onChange={onChange}
                    fullWidth={true}
                    value={value}
                    inputRef={ref}
                    label="Спортын цол, зэрэг (Class)"
                    placeholder={'Төлөв'}
                    error={!!errors.class_id}
                    helperText={
                      errors.usertype
                        ? _.get(errors.class_id, 'message', '')
                        : ''
                    }
                  >
                    {CLASS.map((item, index) => {
                      return (
                        <MenuItem value={item.id} key={index}>
                          {item.name}
                        </MenuItem>
                      )
                    })}
                  </Select>
                )}
              />
              <Typography>
                Практик буудлагын спортын цол, зэрэггүй бол Unclassified
                сонголтыг сонгоно.
              </Typography>
            </Box>
          </Box>
          <Box>
            <LoadingButton
              loading={meta.pending}
              disabled={meta.pending || !isDirty || !isValid}
              type="submit"
              variant="contained"
              sx={{ height: '36px' }}
            >
              Бүртгүүлэх
            </LoadingButton>
          </Box>
        </section>
      </Box>
    </form>
  )
}

export default PublicMatchRegister
