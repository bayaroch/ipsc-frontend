import React, { ReactNode } from 'react'
import { Box, CardHeader, Card, CardContent } from '@mui/material/'

interface About {
  detail?: ReactNode
  title: string
}

const Info: React.FC<About> = ({ detail, title }) => {
  return (
    <Card
      sx={{
        '& .Cmt-header-root': {
          paddingTop: '3px',
          paddingBottom: 0,
        },
      }}
    >
      <CardHeader
        sx={{ borderBottom: '1px solid #eee' }}
        title={title}
      ></CardHeader>
      <CardContent>
        <section style={{ paddingTop: 15, paddingBottom: 15 }}>
          <Box sx={{ whiteSpace: 'pre-wrap' }}>{detail}</Box>
        </section>
      </CardContent>
    </Card>
  )
}

export default Info
