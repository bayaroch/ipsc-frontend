import React from 'react'
import { lighten } from '@mui/material'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Avatar, Box, Divider, Chip } from '@mui/material/'
import { MatchItem } from '@store/match/actions/types'
import { red, green, orange, grey } from '@mui/material/colors'
import { helper } from '@utils/helpers/common.helper'

interface MatchCardItemProps {
  item: MatchItem
  onClick: (id: number) => void
}

export const colorConstants: string[] = [
  grey[500],
  green[500],
  orange[500],
  red[500],
]

const MatchCardItem: React.FC<MatchCardItemProps> = ({ item, onClick }) => {
  const taxText = item.tax === 0 ? 'FREE' : item.tax + '₮'

  return (
    <Card
      sx={{
        maxWidth: '100%',
        margin: '0 auto',
        backgroundColor: lighten('#fff', 0.1),
      }}
    >
      <CardHeader
        title="Эхлэх өдөр"
        subheader={helper.matchDate(item.match_start, item.match_end)}
        avatar={
          <Avatar
            aria-label="recipe"
            sx={{ flexDirection: 'column', background: red[100] }}
            style={{ background: colorConstants[item.lvl] }}
          >
            <Box style={{ fontSize: 9, paddingBottom: 0 }}>level</Box>
            <Typography variant="h2">{item.lvl}</Typography>
          </Avatar>
        }
      />
      <Box
        sx={{
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
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            right: 0,
            bottom: 0,
            top: 0,
          }}
        >
          <Typography
            className={'glowing-title'}
            gutterBottom
            variant="h3"
            component="h3"
          >
            {item.name}
          </Typography>
          <Chip
            sx={{ position: 'absolute', bottom: 5, right: 5, display: 'none' }}
            size="small"
            color={item.tax === 0 ? 'default' : 'secondary'}
            avatar={
              <Box
                sx={{
                  backgroundColor: 'transparent !important',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  paddingLeft: 10,
                  fontWeight: 600,
                  padding: 8,
                  width: '24px !important',
                  fontSize: '10px !important',
                }}
              >
                TAX:
              </Box>
            }
            label={taxText}
          />
        </Box>
        <CardMedia
          component="img"
          sx={{ height: '100%' }}
          alt="Contemplative Reptile"
          image={'/images/placeholder.png'}
          title="Contemplative Reptile"
        />
      </Box>
      <CardContent>
        <Typography
          variant="body2"
          noWrap={true}
          sx={{ height: '20px' }}
          color="textSecondary"
          component="p"
        >
          {item.additional_info}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button size="small" color="primary" onClick={() => onClick(item.id)}>
          Дэлгэрэнгүй
        </Button>
      </CardActions>
    </Card>
  )
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: '100%',
//     margin: '0 auto',
//     backgroundColor: lighten(theme.palette.background.paper, 0.1),
//   },
//   tax: {
//     position: 'absolute',
//     bottom: 5,
//     right: 5,
//     display: 'none', // temp hidden
//   },
//   actions: {
//     justifyContent: 'space-between',
//   },
//   taxTitle: {
//     backgroundColor: 'transparent !important',
//     justifyContent: 'center',
//     alignItems: 'center',
//     display: 'flex',
//     paddingLeft: 10,
//     fontWeight: 600,
//     padding: 8,
//     width: '24px !important',
//     fontSize: '10px !important',
//   },
//   media: {
//     height: '100%',
//   },
//   cardTitle: {
//     fontSize: 14,
//     textAlign: 'center',
//     textTransform: 'uppercase',
//   },
//   avatar: {
//     flexDirection: 'column',
//     background: red[100],
//   },
//   mediaBox: {
//     height: 140,
//     position: 'relative',
//     '&:before': {
//       position: 'absolute',
//       left: 0,
//       right: 0,
//       bottom: 0,
//       top: 0,
//       content: "''",
//       backgroundColor: 'rgb(43, 80, 237, 0.5)',
//     },
//   },
//   onMediaContent: {
//     position: 'absolute',
//     left: 0,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     right: 0,
//     bottom: 0,
//     top: 0,
//   },
//   addInfo: {
//     height: 20,
//   },
// }))
export default MatchCardItem
