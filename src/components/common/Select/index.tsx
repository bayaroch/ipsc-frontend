import {
  Select,
  SelectProps,
  FormControl,
  FormHelperText,
  Box,
  Typography,
  OutlinedInput,
} from '@mui/material/'
import { Colors } from '@theme/colors'
import { CustomLabel } from '@components/common/Input'

type Props = {
  helperText?: string
  label?: string
  required?: boolean
}

const ESSelect: React.FC<SelectProps & Props> = ({
  helperText,
  label,
  required = false,
  ...rest
}) => {
  return (
    <FormControl fullWidth={rest.fullWidth ? rest.fullWidth : false}>
      {label && (
        <Box display="flex" alignItems="center">
          <CustomLabel id={rest.id ? rest.id : ''} text={label ? label : ''} />
          {required && (
            <Typography
              component="span"
              sx={{
                required: {
                  paddingLeft: (theme) => theme.spacing(1 / 2),
                  paddingRight: (theme) => theme.spacing(1 / 2),
                  height: 16,
                  fontSize: 10,
                  marginLeft: 5,
                  color: Colors.red,
                },
              }}
            >
              *
            </Typography>
          )}
        </Box>
      )}
      <Select
        variant="outlined"
        margin="dense"
        sx={{ border: '0 none' }}
        inputProps={{ 'aria-label': 'Without label' }}
        {...rest}
        input={
          <OutlinedInput
            sx={{
              root: {
                padding: '4px 4px',
                borderColor: 'transparent',
                backgroundColor: 'rgb(242, 245, 250)',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: '0 none',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderWidth: 1,
                  borderColor: Colors.white,
                },
              },
            }}
          />
        }
      />
      {helperText && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default ESSelect
