import { useEffect, useState } from 'react'

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormGroup,
  Grid,
  MenuItem,
  InputAdornment,
  IconButton,
  Menu,
} from '@mui/material/'
import CustomSwitch from '@components/common/CustomSwitch'
import CustomInput from '@components/common/Input'
import { CustomLabel } from '@components/common/Input'
import Select from '@components/common/Select'
import { useRouter } from 'next/router'
import useCreateMatch from './useCreateMatch'
import { MatchCreateParams } from '@services/match.services'
import _ from 'lodash'
import moment from 'moment'
import { MATCH_STATUS_TEXT } from '@constants/common.constants'
import { weekly } from '@constants/match.constants'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const MatchCreateContainer: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const router = useRouter()
  const { Controller, methods, create, metadata, response } = useCreateMatch()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods

  useEffect(() => {
    if (response && !metadata.pending && metadata.loaded && !metadata.error) {
      router.push('/admin/matches')
    }
  }, [metadata, response])

  const onSubmit = (data: MatchCreateParams) => {
    const params = Object.assign({}, data, {
      match_start: moment(data.match_start).format('YYYY-MM-DD HH:mm:ss'),
      match_end: moment(data.match_end).format('YYYY-MM-DD HH:mm:ss'),
      registration_start: moment(data.registration_start).format(
        'YYYY-MM-DD HH:mm:ss'
      ),
      registration_end: moment(data.registration_end).format(
        'YYYY-MM-DD HH:mm:ss'
      ),
    })
    create(params)
  }

  const renderLoader = () => {
    if (metadata.pending && !metadata.loaded && !metadata.error) {
      return (
        <Box
          sx={{
            background: 'rgba(255,255,255,0.8)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box className="dots-flashing" />
        </Box>
      )
    }
  }

  const createTemplate = () => {
    methods.reset(weekly)
    handleClose()
  }

  return (
    <Box sx={{ position: 'relative' }}>
      {renderLoader()}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          Загвар:
          <IconButton
            aria-label="more"
            aria-controls="template-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Menu
          id="template-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={createTemplate}>Weekly</MenuItem>
        </Menu>
        <section style={{ marginBottom: '20px' }}>
          <Controller
            name="name"
            control={control}
            render={({ field: { ref, ...rest } }) => (
              <CustomInput
                {...rest}
                inputRef={ref}
                required={true}
                labelPrimary="Match Name"
                placeholder={'Тэмцээны нэр'}
                fullWidth={true}
                error={!!errors.name}
                helperText={
                  errors.name ? _.get(errors.name, 'message', '') : ''
                }
              />
            )}
          />
        </section>
        <section style={{ marginBottom: '20px' }}>
          <Grid spacing={3} container>
            <Grid item sm={12} md={6}>
              <Controller
                name="match_start"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <CustomInput
                    {...rest}
                    inputRef={ref}
                    required={true}
                    labelPrimary="Match Start"
                    inputProps={{ max: '9999-12-31T23:59' }}
                    fullWidth={true}
                    type="datetime-local"
                    placeholder={'Эхлэх огноо'}
                    error={!!errors.match_start}
                    helperText={
                      errors.match_start
                        ? _.get(errors.match_start, 'message', '')
                        : ''
                    }
                  />
                )}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Controller
                name="match_end"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <CustomInput
                    {...rest}
                    inputRef={ref}
                    required={true}
                    fullWidth={true}
                    labelPrimary="Match End"
                    inputProps={{ max: '9999-12-31T23:59' }}
                    type="datetime-local"
                    placeholder={'Дуусах огноо'}
                    error={!!errors.match_end}
                    helperText={
                      errors.match_end
                        ? _.get(errors.match_end, 'message', '')
                        : ''
                    }
                  />
                )}
              />
            </Grid>
          </Grid>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <Grid spacing={3} container>
            <Grid item sm={12} md={6}>
              <Controller
                name="registration_start"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <CustomInput
                    {...rest}
                    inputRef={ref}
                    inputProps={{ max: '9999-12-31T23:59' }}
                    fullWidth={true}
                    required={true}
                    labelPrimary="Registration Start"
                    type="datetime-local"
                    placeholder={'Бүртгэл эхлэх огноо'}
                    error={!!errors.registration_start}
                    helperText={
                      errors.registration_start
                        ? _.get(errors.registration_start, 'message', '')
                        : ''
                    }
                  />
                )}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Controller
                name="registration_end"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <CustomInput
                    {...rest}
                    fullWidth={true}
                    inputRef={ref}
                    required={true}
                    labelPrimary="Registration End"
                    inputProps={{ max: '9999-12-31T23:59' }}
                    type="datetime-local"
                    placeholder={'Бүртгэл хаагдах огноо'}
                    error={!!errors.registration_end}
                    helperText={
                      errors.registration_end
                        ? _.get(errors.registration_end, 'message', '')
                        : ''
                    }
                  />
                )}
              />
            </Grid>
          </Grid>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <FormGroup row={true}>
            <Grid spacing={3} container>
              <Grid item sm={12} md={4}>
                <Controller
                  name="lvl"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      onChange={onChange}
                      inputRef={ref}
                      required={true}
                      fullWidth={true}
                      value={value}
                      label="LvL"
                      placeholder={'Тэмцээны түвшин'}
                      error={!!errors.lvl}
                      helperText={
                        errors.lvl ? _.get(errors.lvl, 'message', '') : ''
                      }
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  )}
                />
              </Grid>
              <Grid item sm={12} md={4}>
                <Controller
                  name="point_multiplier"
                  control={control}
                  render={({ field: { ref, ...rest } }) => (
                    <CustomInput
                      {...rest}
                      inputRef={ref}
                      required={true}
                      type="number"
                      fullWidth={true}
                      labelPrimary="Point multiplier"
                      error={!!errors.point_multiplier}
                      helperText={
                        errors.point_multiplier
                          ? _.get(errors.point_multiplier, 'message', '')
                          : ''
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item sm={12} md={4}>
                <Controller
                  name="per_squad"
                  control={control}
                  render={({ field: { ref, ...rest } }) => (
                    <CustomInput
                      {...rest}
                      inputRef={ref}
                      fullWidth={true}
                      required={true}
                      type="number"
                      labelPrimary="Per Squad"
                      error={!!errors.per_squad}
                      helperText={
                        errors.per_squad
                          ? _.get(errors.per_squad, 'message', '')
                          : ''
                      }
                    />
                  )}
                />
              </Grid>
            </Grid>
          </FormGroup>
        </section>

        <Divider style={{ marginBottom: '20px 0' }} />

        <section style={{ marginBottom: '20px' }}>
          <Grid spacing={3} container>
            <Grid item sm={12} md={4}>
              <Controller
                name="tax"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <CustomInput
                    {...rest}
                    fullWidth
                    inputRef={ref}
                    labelPrimary="Tax"
                    startAdornment={
                      <InputAdornment
                        style={{ width: 30, justifyContent: 'center' }}
                        position="start"
                      >
                        ₮
                      </InputAdornment>
                    }
                    type="number"
                    placeholder={'Хураамж'}
                  />
                )}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <Controller
                name="stage_number"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <CustomInput
                    {...rest}
                    fullWidth
                    inputRef={ref}
                    type="number"
                    labelPrimary="Stage number"
                    placeholder={'Стэйжийн тоо'}
                  />
                )}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <Controller
                name="min_point"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <CustomInput
                    {...rest}
                    fullWidth
                    inputRef={ref}
                    type="number"
                    labelPrimary="Min Point"
                  />
                )}
              />
            </Grid>
          </Grid>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <Controller
            name="tax_info"
            control={control}
            render={({ field: { ref, ...rest } }) => (
              <CustomInput
                {...rest}
                inputRef={ref}
                labelPrimary="TaxInfo"
                placeholder={'Хураамжын дэлгэрэнгүй'}
                fullWidth={true}
                multiline
                minRows={3}
                maxRows={10}
              />
            )}
          />
        </section>

        <section style={{ marginBottom: '20px' }}>
          <Controller
            name="additional_info"
            control={control}
            render={({ field: { ref, ...rest } }) => (
              <CustomInput
                {...rest}
                inputRef={ref}
                labelPrimary="Additional Info"
                placeholder={'Дэлгэрэнгүй мэдээлэл'}
                multiline
                minRows={5}
                maxRows={15}
                fullWidth={true}
              />
            )}
          />
        </section>

        <section style={{ marginBottom: '20px' }}>
          <Controller
            name="sponsor_info"
            control={control}
            render={({ field: { ref, ...rest } }) => (
              <CustomInput
                {...rest}
                inputRef={ref}
                labelPrimary="Sponsor Info"
                placeholder={'Ивээн тэтгэгчийн мэдээлэл'}
                fullWidth={true}
                multiline
                minRows={5}
                maxRows={15}
              />
            )}
          />
        </section>

        <section style={{ marginBottom: '20px' }}></section>

        <section style={{ marginBottom: '20px' }}>
          <Grid container spacing={3}>
            <Grid item sm={12} md={8}>
              <Controller
                name="status"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    onChange={onChange}
                    required={true}
                    fullWidth={true}
                    value={value}
                    label="Status"
                    placeholder={'Төлөв'}
                    error={!!errors.status}
                    helperText={
                      errors.status ? _.get(errors.status, 'message', '') : ''
                    }
                  >
                    {MATCH_STATUS_TEXT.map((item, index) => {
                      if (item.id === 3) return null
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
            <Grid item sm={12} md={4}>
              <Controller
                name="is_public"
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <FormControl>
                      <CustomLabel text={'Is Public'} id={'public'} />
                      <CustomSwitch
                        handleChange={onChange}
                        checked={value}
                        name="Is Public"
                      />
                    </FormControl>
                  )
                }}
              />
            </Grid>
          </Grid>
        </section>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button
              onClick={() => router.push('/admin/matches')}
              fullWidth
              variant="contained"
              color="secondary"
            >
              Цуцлах
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Хадгалах
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default MatchCreateContainer

// "point_multiplier": 2,
// "stage_number": 6,
// "tax": 40000,
// "tax_info": "(RO free etc)",
// "min_point": "200",
// "additional_info": "-",
// "sponsor_info": "-",
// "per_squad": 6,
// "is_public": 0,
// "status": 1,
// "last_modified_by": 1
