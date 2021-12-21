import {
  OutlinedInput,
  OutlinedInputProps,
  FormHelperText,
  FormControl,
  Box,
  Typography,
} from '@mui/material/'
import { Colors } from '@theme/colors'
import { ReactElement } from 'react'

export type InputProps = {
  helperText?: string
  labelPrimary?: string
  labelSecondary?: ReactElement
  required?: boolean
}

export const CustomLabel = ({ text, id }: { text: string; id: string }) => {
  return (
    <label
      htmlFor={id}
      style={{ fontSize: 14, paddingBottom: 3, color: '#555' }}
    >
      {text}
    </label>
  )
}

const CustomInput: React.FC<OutlinedInputProps & InputProps> = ({
  helperText,
  labelPrimary,
  labelSecondary,
  required = false,
  ...rest
}) => {
  return (
    <FormControl
      sx={{ paddingBottom: '5px', marginBottom: '5px' }}
      fullWidth={rest.fullWidth ? rest.fullWidth : false}
    >
      {(labelPrimary || labelSecondary) && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ paddingBottom: 0 }}
        >
          <Box sx={{ padding: 0 }} display="flex" alignItems="center">
            <CustomLabel
              id={rest.id ? rest.id : ''}
              text={labelPrimary ? labelPrimary : ''}
            />
            {required && (
              <Typography
                component="span"
                sx={{
                  paddingLeft: (theme) => theme.spacing(1 / 2),
                  paddingRight: (theme) => theme.spacing(1 / 2),
                  height: 16,
                  fontSize: 10,
                  marginLeft: 5,
                  color: Colors.red,
                }}
              >
                *
              </Typography>
            )}
          </Box>
          {labelSecondary}
        </Box>
      )}
      <OutlinedInput
        sx={{
          border: '0 none',
          borderColor: 'transparent',
          backgroundColor: 'rgb(242, 245, 250)',
          '& .MuiOutlinedInput-inputMultiline': {
            padding: '7px 7px',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
          },
          '& .MuiOutlinedInput-input': {
            padding: '7px 7px',
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            background: 'transparent',
            borderColor: Colors.red,
          },
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
          },
        }}
        margin="dense"
        {...rest}
      />
      {helperText && (
        <FormHelperText
          sx={{
            '&.Mui-error': {
              color: Colors.red,
            },
          }}
          error
        >
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default CustomInput
