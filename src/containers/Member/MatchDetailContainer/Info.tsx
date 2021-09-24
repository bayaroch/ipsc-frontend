import React from 'react'
import { Typography, CardHeader, Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { MatchItem } from '@store/match/actions/types'
import { Colors } from '@theme/colors'

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
}))

interface About {
  detail: MatchItem
}

const Info: React.FC<About> = ({ detail }) => {
  const classes = useStyles()

  return (
    <Card className={classes.cardRoot}>
      <CardHeader
        className={classes.header}
        title="Нэмэлт мэдээлэл"
      ></CardHeader>
      <CardContent>
        <section className={classes.section}>
          <Typography align="center" variant="body1">
            {detail.additional_info}
          </Typography>
        </section>
      </CardContent>
    </Card>
  )
}

export default Info
