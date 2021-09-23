import React from 'react'
import { makeStyles, Box, Typography, Theme } from '@material-ui/core/'
import { Colors } from '@theme/colors'

interface ContentBoxProps {
  img?: string
  title?: string
  desc?: string
}

const ContentHeader: React.FC<ContentBoxProps> = ({
  img,
  title,
  desc,
  ...rest
}) => {
  const classes = useStyles()
  return (
    <Box
      style={{ backgroundImage: img ? `url(${img})` : 'none' }}
      className={classes.header}
      {...rest}
    >
      <Box className="container">
        <Box className={classes.contentBox}>
          {title ? (
            <Typography
              className={`glowing-title ${classes.title} `}
              variant="h3"
            >
              {title}
            </Typography>
          ) : null}
          {desc ? <Typography variant="body2">{desc}</Typography> : null}
        </Box>
      </Box>
    </Box>
  )
}

ContentHeader.defaultProps = {}

export default ContentHeader

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    paddingTop: 100,
    paddingBottom: 20,
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundColor: '#eee',
  },
  contentBox: {},
  title: {
    padding: '11px 15px 10px 15px',
    display: 'inline-block',
    width: 'auto',
    color: '#fff',
    textTransform: 'uppercase',
    position: 'relative',
    background: Colors.primary,
  },
  [theme.breakpoints.down('sm')]: {
    contentBox: {
      textAlign: 'center',
    },
  },
}))
