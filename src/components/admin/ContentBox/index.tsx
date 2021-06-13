import React from 'react'
import { Paper, makeStyles } from '@material-ui/core/'

interface ContentBoxProps {
  fullWidth?: boolean
}

const ContentBox: React.FC<ContentBoxProps> = ({ fullWidth, children }) => {
  const classes = useStyles()
  return (
    <Paper
      elevation={1}
      className={`${classes.root} ${fullWidth ? '' : classes.boxed}`}
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
    padding: '1rem',
    margin: '0 auto',
  },
  boxed: {
    maxWidth: 600,
  },
}))
