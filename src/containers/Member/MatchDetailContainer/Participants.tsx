import React from 'react'
import { CardHeader, Card, CardContent } from '@mui/material/'
import { AvatarGroup, Typography } from '@mui/material/'
import { MatchItem } from '@store/match/actions/types'
import CustomAvatar from '@components/common/Avatar'

interface Participants {
  detail: MatchItem
  openList?: () => void
}

const Participants: React.FC<Participants> = ({ detail, openList }) => {
  return (
    <>
      <Card
        sx={{
          '& .Cmt-header-root': {
            paddingTop: 3,
            paddingBottom: 0,
          },
        }}
      >
        <CardHeader
          sx={{ borderBottom: '1px solid #eee' }}
          title="Оролцогчид"
          action={
            <Typography sx={{ fontWeight: 400 }} variant="h3">
              Нийт оролцогчид:
              <Typography
                sx={{ fontWeight: 600, paddingLeft: 1, paddingRight: 1 }}
                component="span"
              >
                {detail.participants.length}
              </Typography>
            </Typography>
          }
        ></CardHeader>
        <CardContent sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <AvatarGroup
            max={8}
            onClick={() => openList && openList()}
            sx={{ cursor: 'pointer' }}
          >
            {detail &&
              detail.participants.map((item, index) => {
                return (
                  <CustomAvatar
                    key={index}
                    src={item.user.img_url}
                    alt={item.user.firstname}
                  />
                )
              })}
            )
          </AvatarGroup>
        </CardContent>
      </Card>
    </>
  )
}

export default Participants
