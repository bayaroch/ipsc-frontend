import React, { forwardRef } from 'react'
import { TeamCreateParams } from '@services/team.service'
import {
  Dialog,
  Slide,
  Box,
  SlideProps,
  MenuItem,
  ListItemText,
  DialogTitle,
  IconButton,
} from '@mui/material'
import _ from 'lodash'
import CustomInput from '@components/common/Input'
import { LoadingButton } from '@mui/lab'
import { SupportItem } from '@services/support.services'
import useTeamCreate from './useTeamCreate'
import ESSelect from '@components/common/Select'
import { Meta } from '@store/metadata/actions/types'
import { Close, Refresh } from '@mui/icons-material'

interface TeamCreateProps {
  create: (params: TeamCreateParams) => void
  divisions: SupportItem[]
  currentId: number
  open: boolean
  handleClose: () => void
  createMeta: Meta
}

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const TeamCreateDialog: React.FC<TeamCreateProps> = ({
  create,
  divisions,
  currentId,
  open,
  createMeta,
  handleClose,
}) => {
  const { Controller, methods } = useTeamCreate()

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = methods

  // eslint-disable-next-line no-console
  console.log(errors)

  const makeId = (length: number) => {
    let result = ''
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    setValue('code', result, { shouldDirty: true })
  }

  const onSubmit = (values: any) => {
    const params = {
      name: values.name,
      code: values.code,
      division_id: values.division_id,
      user_id: currentId,
    }
    create(params)
    handleClose()
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <Box sx={{ p: 2, width: 400 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              render={({ field: { ref, ...rest } }) => (
                <CustomInput
                  {...rest}
                  inputRef={ref}
                  required={true}
                  labelPrimary="Багын нэр"
                  placeholder={'Багын нэр'}
                  fullWidth={true}
                  error={!!errors.name}
                  helperText={
                    errors.name ? _.get(errors.name, 'message', '') : ''
                  }
                />
              )}
            />

            <Controller
              name="code"
              control={control}
              render={({ field: { ref, ...rest } }) => (
                <CustomInput
                  {...rest}
                  inputRef={ref}
                  required={true}
                  labelPrimary="Код"
                  endAdornment={
                    <IconButton onClick={() => makeId(6)}>
                      <Refresh />
                    </IconButton>
                  }
                  placeholder={'Код'}
                  fullWidth={true}
                  error={!!errors.code}
                  helperText={
                    errors.code ? _.get(errors.code, 'message', '') : ''
                  }
                />
              )}
            />

            <Controller
              name="division_id"
              control={control}
              render={({ field: { ref, onChange, value } }) => (
                <ESSelect
                  onChange={onChange}
                  inputRef={ref}
                  required={true}
                  fullWidth={true}
                  value={value}
                  label="Ангилал"
                  error={!!errors.division_id}
                  helperText={
                    errors.division_id
                      ? _.get(errors.division_id, 'message', '')
                      : ''
                  }
                >
                  <MenuItem key={0} value={0}>
                    <ListItemText primary={''} />
                  </MenuItem>
                  {divisions.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      <ListItemText primary={item.name} />
                    </MenuItem>
                  ))}
                </ESSelect>
              )}
            />
            <Box sx={{ p: 1, pt: 2, textAlign: 'center' }}>
              <LoadingButton
                variant="contained"
                color="primary"
                type="submit"
                disabled={!isValid}
                loading={createMeta.pending}
              >
                Үүсгэх
              </LoadingButton>
            </Box>
          </form>
        </Box>
      </Dialog>
    </>
  )
}

export default TeamCreateDialog
