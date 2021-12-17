import React from 'react'
import { CardHeader, Card, CardContent } from '@mui/material/'
// import CustomList from '@components/common/List'
// import Avatar from '@components/common/Avatar'
// import { ParticipantsItem } from '@services/match.services'
import { AvatarGroup } from '@mui/material/'
import { MatchItem } from '@store/match/actions/types'
// import _ from 'lodash'

interface About {
  detail: MatchItem
}

const Participants: React.FC<About> = ({}) => {
  return (
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
      ></CardHeader>
      <CardContent>
        <AvatarGroup max={6}>
          {/* <CustomList
            data={detail.participants}
            renderRow={(item: ParticipantsItem, index: number) => {
              return (
                <Avatar
                  key={index}
                  className={`${classes.avatarRoot} MuiAvatarGroup-avatar`}
                  src={_.defaultTo(item.user.img_url, undefined)}
                  alt={item.user.firstname}
                />
              )
            }}
          /> */}
        </AvatarGroup>
      </CardContent>
    </Card>
  )
}

export default Participants
