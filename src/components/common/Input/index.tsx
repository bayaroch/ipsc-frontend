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
                asdasds
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
      {helperText && <FormHelperText error>{helperText}</FormHelperText>}
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
  root: {
    backgroundColor: Colors.white,
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      background: 'rgba(247, 247, 53, 0.1)',
    },
    '&.Mui-disabled': {
      backgroundColor: 'transparent',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
      },
    },
    '& :-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 100px #000000 inset',
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
    backgroundColor: Colors.primary,
    borderRadius: 2,
    paddingLeft: theme.spacing(1 / 2),
    paddingRight: theme.spacing(1 / 2),
    height: 16,
    fontSize: 10,
    marginLeft: theme.spacing(1),
    color: Colors.white,
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
