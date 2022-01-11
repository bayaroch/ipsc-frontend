import React from 'react'
import { Typography, CardHeader, Card, CardContent } from '@mui/material/'

import { MatchItem } from '@store/match/actions/types'

interface About {
  detail: MatchItem
}

const Info: React.FC<About> = ({ detail }) => {
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
        title="Нэмэлт мэдээлэл"
      ></CardHeader>
      <CardContent>
        <section style={{ paddingTop: 15, paddingBottom: 15 }}>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
            {detail.additional_info}
          </Typography>
        </section>
      </CardContent>
    </Card>
  )
}

export default Info
