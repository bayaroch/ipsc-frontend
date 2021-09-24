import React from 'react'
import { CardHeader, Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { MatchItem } from '@store/match/actions/types'
import { Colors } from '@theme/colors'
// import CustomList from '@components/common/List'
// import Avatar from '@components/common/Avatar'
// import { ParticipantsItem } from '@services/match.services'
import { AvatarGroup } from '@material-ui/lab'
// import _ from 'lodash'

const useStyles = makeStyles(() => ({
  cardRoot: {
    '& .Cmt-header-root': {
      paddingTop: 3,
      paddingBottom: 0,
    },
  },
  header: {
    borderBottom: '1px solid #eee',
  },
  title: {
    color: Colors.white,
    position: 'relative',
    zIndex: 100,
  },
  subtitle: {
    paddingBottom: 10,
    fontSize: 16,
  },
  icon: {
    marginRight: 20,
    position: 'relative',
    top: -2,
  },
  section: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  avatarRoot: {},
}))

interface About {
  detail: MatchItem
}

const Participants: React.FC<About> = ({}) => {
  const classes = useStyles()

  return (
    <Card className={classes.cardRoot}>
      <CardHeader className={classes.header} title="Оролцогчид"></CardHeader>
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
