import React from 'react'
import { Paper, makeStyles } from '@material-ui/core/'

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
      elevation={1}
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

const useStyles = makeStyles(() => ({
  root: {
    padding: '2rem',
    margin: '0 auto',
  },
  boxed: {
    maxWidth: 800,
  },
}))
