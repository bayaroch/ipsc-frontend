import React from 'react'
import { Paper, makeStyles, Theme } from '@material-ui/core/'

interface ContentBoxProps {
  fullWidth?: boolean
  maxWidth?: number
}

const ContentBox: React.FC<ContentBoxProps> = ({
  fullWidth,
  children,
  maxWidth,
}) => {
  const classes = useStyles()
  return (
    <Paper
      elevation={0}
      className={`${classes.root} ${fullWidth ? '' : classes.boxed}`}
      style={{ maxWidth: maxWidth ? maxWidth : '' }}
    >
      {children}
    </Paper>
  )
}

ContentBox.defaultProps = {
  fullWidth: true,
}

export default ContentBox

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '4rem',
    margin: '0 auto',
  },
  [theme.breakpoints.down('lg')]: {
    root: {
      padding: '1rem',
    },
  },
  boxed: {
    maxWidth: 800,
  },
}))
