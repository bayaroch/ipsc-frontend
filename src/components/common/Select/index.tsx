import {
  Select,
  SelectProps,
  FormControl,
  FormHelperText,
  Box,
  Typography,
  withStyles,
  OutlinedInput,
} from '@material-ui/core'
import { Colors } from '@theme/colors'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
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
  const classes = useStyles()
  return (
    <FormControl
      fullWidth={rest.fullWidth ? rest.fullWidth : false}
      className={classes.formPadding}
    >
      {label && (
        <Box display="flex" alignItems="center">
          <CustomLabel id={rest.id ? rest.id : ''} text={label ? label : ''} />
          {required && (
            <Typography component="span" className={classes.required}>
              *
            </Typography>
          )}
        </Box>
      )}
      <Select
        variant="outlined"
        margin="dense"
        className={classes.root}
        inputProps={{ 'aria-label': 'Without label' }}
        {...rest}
        input={<Input />}
      />
      {helperText && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  )
}

const Input = withStyles(() =>
  createStyles({
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
  })
)(OutlinedInput)

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: '0 none',
  },
  formPadding: {},
  required: {
    paddingLeft: theme.spacing(1 / 2),
    paddingRight: theme.spacing(1 / 2),
    height: 16,
    fontSize: 10,
    marginLeft: 5,
    color: Colors.red,
  },
}))

export default ESSelect
