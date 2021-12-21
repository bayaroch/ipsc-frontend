import {
  Select,
  SelectProps,
  FormControl,
  FormHelperText,
  Box,
  Typography,
} from '@mui/material/'
import { Colors } from '@theme/colors'
import { CustomLabel } from '@components/common/Input'
import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/material/styles'

type Props = {
  helperText?: string
  label?: string
  required?: boolean
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '&.MuiInputBase-root': {
    padding: 0,
  },
  '& .MuiInputBase-input': {
    borderRadius: 2,
    position: 'relative',
    backgroundColor: 'rgb(242, 245, 250)',
    border: '0 none',
    fontSize: 16,
    padding: '10px 26px 10px 14px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))

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
        input={<BootstrapInput />}
      />
      {helperText && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default ESSelect
