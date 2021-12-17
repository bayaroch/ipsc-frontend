import React from 'react'
import { Paper } from '@mui/material/'

interface ContentBoxProps {
  fullWidth?: boolean
  maxWidth?: number
}

const ContentBox: React.FC<ContentBoxProps> = ({
  fullWidth,
  children,
  maxWidth,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        padding: { xl: '4rem', lg: '1rem', sm: '1rem' },
        margin: '0 auto',
        maxWidth: fullWidth ? '100%' : '800px',
      }}
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
