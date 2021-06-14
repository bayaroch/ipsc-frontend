import {
  makeStyles,
  Box,
  Button,
  Divider,
  FormControl,
} from '@material-ui/core/'
import CustomSwitch from '@components/common/CustomSwitch'
import CustomInput from '@components/common/Input'
import { CustomLabel } from '@components/common/Input'
import { useRouter } from 'next/router'
import useCreateMatch from './useCreateMatch'
import { MatchCreateParams } from '@services/match.services'
import _ from 'lodash'
import moment from 'moment'

const MatchCreateContainer: React.FC = () => {
  const classes = useStyles()
  const router = useRouter()
  const { Controller, methods } = useCreateMatch()
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods

  console.log(watch())

  const onSubmit = (data: MatchCreateParams) => {
    const params = Object.assign({}, data, {
      is_public: Number(data.is_public),
      match_start: moment(data.match_start).format('YYYY-MM-DD HH:mm:ss'),
      match_end: moment(data.match_end).format('YYYY-MM-DD HH:mm:ss'),
      registration_start: moment(data.registration_start).format(
        'YYYY-MM-DD HH:mm:ss'
      ),
      registration_end: moment(data.registration_end).format(
        'YYYY-MM-DD HH:mm:ss'
      ),
    })

    console.log('params', params)
  }

  return (
    <Box className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field: { ref, ...rest } }) => (
            <CustomInput
              {...rest}
              inputRef={ref}
              required={true}
              labelPrimary="Match Name"
              placeholder={'Тэмцээны нэр'}
              fullWidth={true}
              error={!!errors.name}
              helperText={errors.name ? errors.name?.message : ''}
            />
          )}
        />

        <Controller
          name="match_start"
          control={control}
          defaultValue=""
          render={({ field: { ref, ...rest } }) => (
            <CustomInput
              {...rest}
              inputRef={ref}
              required={true}
              labelPrimary="Match Start"
              type="datetime-local"
              placeholder={'Эхлэх огноо'}
              fullWidth={true}
              error={!!errors.match_start}
              helperText={errors.match_start ? errors.match_start?.message : ''}
            />
          )}
        />

        <Controller
          name="match_end"
          control={control}
          defaultValue=""
          render={({ field: { ref, ...rest } }) => (
            <CustomInput
              {...rest}
              inputRef={ref}
              required={true}
              labelPrimary="Match End"
              type="datetime-local"
              placeholder={'Дуусах огноо'}
              fullWidth={true}
              error={!!errors.match_end}
              helperText={errors.match_end ? errors.match_end?.message : ''}
            />
          )}
        />

        <Controller
          name="registration_start"
          control={control}
          defaultValue=""
          render={({ field: { ref, ...rest } }) => (
            <CustomInput
              {...rest}
              inputRef={ref}
              required={true}
              labelPrimary="Registration Start"
              type="datetime-local"
              placeholder={'Бүртгэл эхлэх огноо'}
              fullWidth={true}
              error={!!errors.registration_start}
              helperText={
                errors.registration_start
                  ? errors.registration_start?.message
                  : ''
              }
            />
          )}
        />

        <Controller
          name="registration_end"
          control={control}
          defaultValue=""
          render={({ field: { ref, ...rest } }) => (
            <CustomInput
              {...rest}
              inputRef={ref}
              required={true}
              labelPrimary="Registration End"
              type="datetime-local"
              placeholder={'Бүртгэл хаагдах огноо'}
              fullWidth={true}
              error={!!errors.registration_end}
              helperText={
                errors.registration_end ? errors.registration_end?.message : ''
              }
            />
          )}
        />

        <Controller
          name="lvl"
          defaultValue={1}
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <CustomInput
              {...rest}
              inputRef={ref}
              required={true}
              labelPrimary="LvL"
              placeholder={'Тэмцээны lvl'}
              fullWidth={true}
              error={!!errors.lvl}
              helperText={errors.lvl ? errors.lvl?.message : ''}
            />
          )}
        />

        <Controller
          name="point_multiplier"
          control={control}
          defaultValue={1}
          render={({ field: { ref, ...rest } }) => (
            <CustomInput
              {...rest}
              inputRef={ref}
              required={true}
              labelPrimary="Point multiplier"
              placeholder={'Тэмцээны нэр'}
              fullWidth={true}
              error={!!errors.point_multiplier}
              helperText={
                errors.point_multiplier ? errors.point_multiplier?.message : ''
              }
            />
          )}
        />

        <Controller
          name="per_squad"
          control={control}
          defaultValue={1}
          render={({ field: { ref, ...rest } }) => (
            <CustomInput
              {...rest}
              inputRef={ref}
              required={true}
              labelPrimary="Per Squad"
              placeholder={'Тэмцээны нэр'}
              fullWidth={true}
              error={!!errors.per_squad}
              helperText={errors.per_squad ? errors.per_squad?.message : ''}
            />
          )}
        />

        <Divider className={classes.divider} />

        <Controller
          name="tax"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <CustomInput
              {...rest}
              inputRef={ref}
              labelPrimary="Tax"
              type="number"
              placeholder={'Тэмцээны нэр'}
              fullWidth={true}
            />
          )}
        />

        <Controller
          name="tax_info"
          control={control}
          defaultValue=""
          render={({ field: { ref, ...rest } }) => (
            <CustomInput
              {...rest}
              inputRef={ref}
              labelPrimary="TaxInfo"
              placeholder={'Тэмцээны нэр'}
              fullWidth={true}
              multiline
              rows={3}
              rowsMax={10}
            />
          )}
        />

        <Controller
          name="stage_number"
          control={control}
          defaultValue={0}
          render={({ field: { ref, ...rest } }) => (
            <CustomInput
              {...rest}
              inputRef={ref}
              type="number"
              labelPrimary="Stage number"
              placeholder={'Тэмцээны нэр'}
              fullWidth={true}
            />
          )}
        />

        <Controller
          name="min_point"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <CustomInput
              {...rest}
              inputRef={ref}
              type="number"
              labelPrimary="Min Point"
              placeholder={'Тэмцээны нэр'}
              fullWidth={true}
            />
          )}
        />

        <Controller
          name="additional_info"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <CustomInput
              {...rest}
              inputRef={ref}
              labelPrimary="Additional Info"
              placeholder={'Тэмцээны нэр'}
              multiline
              rows={3}
              rowsMax={10}
              fullWidth={true}
            />
          )}
        />

        <Controller
          name="sponsor_info"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <CustomInput
              {...rest}
              inputRef={ref}
              labelPrimary="Sponsor Info"
              placeholder={'Тэмцээны нэр'}
              fullWidth={true}
              multiline
              rows={3}
              rowsMax={10}
            />
          )}
        />

        <Controller
          name="is_public"
          control={control}
          defaultValue={false}
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

        <Controller
          name="status"
          control={control}
          defaultValue={0}
          render={({ field: { ref, ...rest } }) => (
            <CustomInput
              {...rest}
              inputRef={ref}
              labelPrimary="Status"
              placeholder={'Тэмцээны нэр'}
              fullWidth={true}
            />
          )}
        />

        <Button type="submit" variant="contained">
          Save
        </Button>
      </form>
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  container: {},
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
}))

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
