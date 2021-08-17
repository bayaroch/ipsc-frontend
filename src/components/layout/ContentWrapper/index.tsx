import React from 'react'
import { makeStyles, Theme, Box, Container } from '@material-ui/core/'
import { Colors } from '@theme/colors'

interface ContentBoxProps {
  children: JSX.Element
  background?: string
  topSpace?: boolean
}

const ContentWrapper: React.FC<ContentBoxProps> = ({
  children,
  background,
  topSpace,
}) => {
  const classes = useStyles()
  return (
    <Box
      style={{ background: background, paddingTop: topSpace ? 63 : 0 }}
      className={classes.contentWrapper}
    >
      <Container className={classes.container}>{children}</Container>
    </Box>
  )
}

ContentWrapper.defaultProps = {
  background: Colors.white,
  topSpace: false,
}

export default ContentWrapper

const useStyles = makeStyles((theme: Theme) => ({
  contentWrapper: {
    minHeight: 'calc(100vh - 358px)',
  },
  container: {
    maxWidth: 1400,
    width: '100%',
  },
  [theme.breakpoints.down('lg')]: {
    root: {
      padding: '1rem',
    },
  },
}))
