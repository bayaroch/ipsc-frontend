import { useEffect } from 'react'
import { Box, IconButton, Alert, Divider, Avatar, Button } from '@mui/material'
import { MemberItem, UserCreateParams } from '@services/account.services'
import CustomInput from '@components/common/Input'
import _ from 'lodash'
import { FieldValues } from 'react-hook-form'
import { Backup } from '@mui/icons-material'
import { useUpload } from '@containers/Providers/FileUpload'
import { SupportState } from '@store/support/reducers'
import { UserData } from '@services/auth.services'
import useUpdateForm from '@components/admin/MemberUpdate/useUpdateForm'

interface EditInfoProps {
  userDetail: MemberItem
  support?: SupportState
  current: UserData
  onUpdate?: (data: UserCreateParams) => void
}

const EditInfo: React.FC<EditInfoProps> = ({
  userDetail,
  current,
  onUpdate,
}) => {
  const { Controller, methods } = useUpdateForm()

  const upload = useUpload()

  const {
    control,
    reset,
    handleSubmit,
    setValue,
    formState: { errors, dirtyFields },
  } = methods

  useEffect(() => {
    if (!open) {
      reset()
    }
  }, [open])

  useEffect(() => {
    if (userDetail) {
      const newData = _.omit(userDetail, 'id')
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
        setValue('img_url', url, { shouldDirty: true })
      })
      .catch(() => null)
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSubmit = (data: UserCreateParams) => {
    if (userDetail.id === current.id) {
      onUpdate && onUpdate(data)
    }
  }

  return (
    <Box>
      <Alert severity="info">
        Бусад мэлээллийг зөвхөн Арслантай холгогдож шинэчлүүлэх боломжтой
      </Alert>
      <form id="user-update" onSubmit={handleSubmit(onSubmit)}>
        <Box mt={3}>
          <Controller
            name="img_url"
            control={control}
            render={({ field: { ref, value, ...rest } }: FieldValues) => {
              return (
                <>
                  <CustomInput
                    {...rest}
                    required={false}
                    inputRef={ref}
                    value={value}
                    fullWidth={true}
                    startAdornment={
                      <Avatar
                        src={value}
                        sx={{ width: 30, height: 30, borderRadius: 1 }}
                      />
                    }
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
                      errors.img_url ? _.get(errors.img_url, 'message', '') : ''
                    }
                  />
                </>
              )
            }}
          />
        </Box>
        <Divider />
        <Box mt={2}>
          <Button
            variant="contained"
            disabled={_.isEmpty(dirtyFields)}
            type="submit"
          >
            Шинэчлэх
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default EditInfo
