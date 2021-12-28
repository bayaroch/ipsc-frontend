import React from 'react'
import { Box, Container } from '@mui/material/'
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
  return (
    <Box
      style={{ background: background, paddingTop: topSpace ? 63 : 0 }}
      sx={{
        minHeight: 'calc(100vh - 358px)',
      }}
    >
      <Container sx={{ maxWidth: { lg: 1400 }, width: '100%', pb: 10 }}>
        {children}
      </Container>
    </Box>
  )
}

ContentWrapper.defaultProps = {
  background: Colors.white,
  topSpace: false,
}

export default ContentWrapper
