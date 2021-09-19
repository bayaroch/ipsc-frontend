import React from 'react'
import { lighten, makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Avatar, Box, Divider, Chip } from '@material-ui/core'
import { MatchItem } from '@store/match/actions/types'
import { red, green, orange, grey } from '@material-ui/core/colors'
import { helper } from '@utils/helpers/common.helper'

interface MatchCardItemProps {
  item: MatchItem
  onClick: (id: number) => void
}

const colorConstants: string[] = [grey[500], green[500], orange[500], red[500]]

const MatchCardItem: React.FC<MatchCardItemProps> = ({ item, onClick }) => {
  const classes = useStyles()
  const taxText = item.tax === 0 ? 'FREE' : item.tax + '₮'

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Эхлэх өдөр"
        subheader={helper.matchDate(item.match_start, item.match_end)}
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
          <Typography
            className={'intro-headline'}
            gutterBottom
            variant="h2"
            component="h2"
          >
            {item.name}
          </Typography>
          <Chip
            className={classes.tax}
            size="small"
            color={item.tax === 0 ? 'default' : 'secondary'}
            avatar={<Box className={classes.taxTitle}>TAX:</Box>}
            label={taxText}
          />
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
      <CardActions className={classes.actions}>
        <Button size="small" color="primary" onClick={() => onClick(item.id)}>
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
  tax: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    display: 'none', // temp hidden
  },
  actions: {
    justifyContent: 'space-between',
  },
  taxTitle: {
    backgroundColor: 'transparent !important',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    paddingLeft: 10,
    fontWeight: 600,
    padding: 8,
    width: '24px !important',
    fontSize: '10px !important',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    right: 0,
    bottom: 0,
    top: 0,
  },
  addInfo: {
    height: 20,
  },
}))
export default MatchCardItem
