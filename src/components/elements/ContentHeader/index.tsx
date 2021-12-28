import React from 'react'
import { Box, Typography } from '@mui/material/'
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
  return (
    <Box
      style={{ backgroundImage: img ? `url(${img})` : 'none' }}
      sx={{
        paddingTop: '60px',
        marginTop: '62px',
        paddingBottom: '20px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundColor: '#eee',
      }}
      {...rest}
    >
      <Box className="container" sx={{ width: '100%', maxWidth: { lg: 1400 } }}>
        <Box sx={{ textAlign: { lg: 'left', sm: 'center', xs: 'center' } }}>
          {title ? (
            <Typography
              className={`glowing-`}
              sx={{
                padding: '11px 15px 10px 15px',
                display: 'inline-block',
                width: 'auto',
                color: '#fff',
                textTransform: 'uppercase',
                position: 'relative',
                background: Colors.primary,
                fontWeight: 600,
              }}
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

export default ContentHeader

ContentHeader.defaultProps = {
  img: '/images/bg/header_gradient.png',
}
