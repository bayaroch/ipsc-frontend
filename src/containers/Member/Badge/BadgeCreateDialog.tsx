import React, { forwardRef } from 'react'
import { MathSscoreBadgeParams } from '@services/badge.service'
import {
  Dialog,
  Slide,
  Box,
  SlideProps,
  MenuItem,
  ListItemText,
  DialogTitle,
  IconButton,
  Select,
  OutlinedInput,
  Checkbox
} from '@mui/material'
import _ from 'lodash'
import { LoadingButton } from '@mui/lab'
import useBadgeCreate from './useBadgeCreate'
import { Close } from '@mui/icons-material'
import { FieldValues } from 'react-hook-form'

interface BadgeCreateProps {
  create: (params: MathSscoreBadgeParams) => void
  currentId: number
  open: boolean
  handleClose: () => void
  currentBadges: string | null
}

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const BadgeCreateDialog: React.FC<BadgeCreateProps> = ({
  create,
  currentId,
  open,
  handleClose,
  currentBadges,
}) => {
  const { Controller, methods } = useBadgeCreate()

  const names = [
    {id: 1, name: 'Overall Gold'},
    {id: 2, name: 'Overall Silver'},
    {id: 3, name: 'Overall Bronze'},
    {id: 4, name: 'Lady Gold'},
    {id: 5, name: 'Lady Silver'},
    {id: 6, name: 'Lady Bronze'},
    {id: 7, name: 'Junior Gold'},
    {id: 8, name: 'Junior Silver'},
    {id: 9, name: 'Junior Bronze'},
    {id: 10, name: 'Team Gold'},
    {id: 11, name: 'Team Silver'},
    {id: 12, name: 'Team Bronze'},
  ];

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods

  if (currentBadges && currentBadges != '') {
    const badges:any = currentBadges.split(',')
    setValue(
      'badges', 
      badges
    )
  }

  // eslint-disable-next-line no-console

  const handleMulti = (event: any) => {
    const {
      target: { value },
    } = event

    setValue(
      'badges',
      typeof value === 'string' ? value.split(',') : value
    )
  }

  const renderValue = (selected: any) => {
    return (
      <>
        {selected &&
          selected.map((s: any) => {
            const name = _.find(names, { name: s.toString() })?.name
            return name ? `${name} | ` : ''
          })}
      </>
    )
  }

  const onSubmit = (values: any) => {
    const badges_string = values.badges.join(',');
    const params = {
      badges: badges_string,
      id: currentId,
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
              name="badges"
              control={control}
              render={({ field: { ref, value } }: FieldValues) => (
                <Select
                  inputRef={ref}
                  onChange={(e) => handleMulti(e)}
                  fullWidth={true}
                  value={value}
                  input={<OutlinedInput label="Tag" />}
                  label="Badges"
                  multiple
                  placeholder={'Badges'}
                  error={!!errors.badges}
                  renderValue={renderValue}
                >
                  {names.map((item) => {
                    return (
                      <MenuItem value={item.name.toString()} key={item.name}>
                        <Checkbox
                          checked={value.includes(item.name.toString())}
                        />
                        <ListItemText primary={item.name} />
                      </MenuItem>
                    )
                  })}
                </Select>
              )}
            />

            <Box sx={{ p: 1, pt: 2, textAlign: 'center' }}>
              <LoadingButton
                variant="contained"
                color="primary"
                type="submit"
              >
                Modify
              </LoadingButton>
            </Box>
          </form>
        </Box>
      </Dialog>
    </>
  )
}

export default BadgeCreateDialog
