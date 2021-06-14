import {
  OutlinedInput,
  OutlinedInputProps,
  FormHelperText,
  FormControl,
  Box,
  Typography,
} from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Colors } from '@theme/colors'
import { ReactElement } from 'react'

export type InputProps = {
  helperText?: string
  labelPrimary?: string
  labelSecondary?: ReactElement
  required?: boolean
}

export const CustomLabel = ({ text, id }: { text: string; id: string }) => {
  const classes = useStyles2()

  return (
    <label htmlFor={id} className={classes.labelMargin}>
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
  const classes = useStyles()

  return (
    <FormControl
      className={classes.formControl}
      fullWidth={rest.fullWidth ? rest.fullWidth : false}
    >
      {(labelPrimary || labelSecondary) && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className={classes.labelBox}
        >
          <Box
            className={classes.labelPrimaryContainer}
            display="flex"
            alignItems="center"
          >
            <CustomLabel
              id={rest.id ? rest.id : ''}
              text={labelPrimary ? labelPrimary : ''}
            />
            {required && (
              <Typography component="span" className={classes.required}>
                *
              </Typography>
            )}
          </Box>
          {labelSecondary}
        </Box>
      )}
      <OutlinedInput
        classes={{ root: classes.root, adornedEnd: classes.end }}
        margin="dense"
        {...rest}
      />
      {helperText && (
        <FormHelperText className={classes.errorText} error>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    paddingBottom: 5,
  },
  labelBox: {
    paddingBottom: 0,
  },
  errorText: {
    '&.Mui-error': {
      color: Colors.red,
    },
  },
  root: {
    backgroundColor: Colors.white,
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
  },
  numberAlign: {},
  labelMargin: {
    marginBottom: 5,
  },
  labelPrimaryContainer: {
    padding: 0,
  },
  required: {
    paddingLeft: theme.spacing(1 / 2),
    paddingRight: theme.spacing(1 / 2),
    height: 16,
    fontSize: 10,
    marginLeft: 5,
    color: Colors.red,
  },
  end: {
    paddingRight: theme.spacing(1),
  },
}))

const useStyles2 = makeStyles(() => ({
  labelMargin: {
    marginBottom: 5,
  },
  labelPrimaryContainer: {
    padding: 0,
  },
}))

export default CustomInput
