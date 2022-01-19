import React from 'react'
import { Typography, CardHeader, Card, CardContent } from '@mui/material/'

interface About {
  detail?: string
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
          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
            {detail}
          </Typography>
        </section>
      </CardContent>
    </Card>
  )
}

export default Info
