import React from 'react'
import { lighten, makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Avatar, Box, Divider } from '@material-ui/core'
import { MatchItem } from '@store/match/actions/types'
import moment from 'moment'
import { red, green, orange, grey } from '@material-ui/core/colors'

interface MatchCardItemProps {
  item: MatchItem
}

const colorConstants: string[] = [grey[500], green[500], orange[500], red[500]]

const MatchCardItem: React.FC<MatchCardItemProps> = ({ item }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Эхлэх өдөр"
        subheader={moment(item.match_start).format('YYYY-MM-DD HH:mm:ss')}
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            style={{ background: colorConstants[item.lvl] }}
          >
            <Box style={{ fontSize: 9, paddingBottom: 0 }}>level</Box>
            <Typography variant="h2">{item.lvl}</Typography>
          </Avatar>
        }
      />
      <Box className={classes.mediaBox}>
        <Box className={classes.onMediaContent}>
          <Typography variant="h3">{item.lvl}</Typography>
        </Box>
        <CardMedia
          component="img"
          className={classes.media}
          alt="Contemplative Reptile"
          image={'/images/placeholder.png'}
          title="Contemplative Reptile"
        />
      </Box>
      <CardContent>
        <Typography
          noWrap={true}
          className={classes.cardTitle}
          gutterBottom
          variant="h2"
          component="h2"
        >
          {item.name}
        </Typography>
        <Typography
          variant="body2"
          noWrap={true}
          className={classes.addInfo}
          color="textSecondary"
          component="p"
        >
          {item.additional_info}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button size="small" color="primary">
          Дэлгэрэнгүй
        </Button>
        <Button size="small" color="primary">
          Бүртгүүлэх
        </Button>
      </CardActions>
    </Card>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    margin: '0 auto',
    backgroundColor: lighten(theme.palette.background.paper, 0.1),
  },
  media: {
    height: '100%',
  },
  cardTitle: {
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  avatar: {
    flexDirection: 'column',
    background: red[100],
  },
  mediaBox: {
    height: 140,
    position: 'relative',
    '&:before': {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      content: "''",
      backgroundColor: 'rgb(43, 80, 237, 0.5)',
    },
  },
  onMediaContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  addInfo: {
    height: 20,
  },
}))
export default MatchCardItem
