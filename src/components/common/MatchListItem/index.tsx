import React, { useState } from 'react'
import {
  AvatarGroup,
  BoxProps,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { Box } from '@mui/material/'
import { MatchItem as MatchItemType } from '@store/match/actions/types'
import { purple, yellow, orange, blue } from '@mui/material/colors'
import Link from 'next/link'
import { UserData } from '@services/auth.services'
import { Colors } from '@theme/colors'
import { ArrowRight } from '@mui/icons-material'
import moment from 'moment'
import StatusChip from '@components/member/StatusChip'
import { helper } from '@utils/helpers/common.helper'
import CustomAvatar from '../Avatar'
import EventCountDown from './EventCountDown'

interface ListItemProps {
  item: MatchItemType
  onClick?: (id: number) => void
  user: UserData
}

export const colorConstants: string[] = [
  yellow[300],
  blue[100],
  purple[100],
  orange[300],
]

interface StatItemProps extends BoxProps {
  title: string
}

const StatItem = ({ children, title, ...rest }: StatItemProps) => (
  <Box
    sx={{
      float: 'left',
      paddingRight: '30px',
      boxSizing: 'border-box',
      width: {
        xl: 'auto',
        lg: 'auto',
        md: '50%',
        sm: '50%',
        xs: '50%',
      },
      marginBottom: {
        xl: 0,
        lg: 0,
        md: 0,
        sm: 1,
        xs: 1,
      },
      ...rest.sx,
    }}
    {...rest}
  >
    <Box
      sx={{
        maxWidth: 200,
        textTransform: 'uppercase',
        fontWeight: 400,
        fontSize: 11,
      }}
    >
      {title}
    </Box>
    <Box sx={{ fontWeight: 600, alignItems: 'flex-start', display: 'flex' }}>
      {children}
    </Box>
  </Box>
)

interface SlideButtonProps extends BoxProps {
  title: string
  color: string
  hovering: boolean
  textColor: string
}

const SlideButton = ({
  children,
  title,
  hovering,
  color,
  textColor,
  ...rest
}: SlideButtonProps) => (
  <Box
    sx={{
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      position: 'absolute',
      transform: `translateX(${hovering ? 0 : '105%'})`,
      transition: 'transform 0.3s',
      backgroundColor: color,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    {...rest}
  >
    <Box
      sx={{
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: textColor,
        }}
      >
        {title}
        <ArrowRight />
      </Typography>
      <Box>{children}</Box>
    </Box>
  </Box>
)

const MatchListItem: React.FC<ListItemProps> = ({ item, user }) => {
  const [hovering, setHovering] = useState<null | number>(null)
  const isMobile = useMediaQuery('(max-width:900px)')

  const progress = helper.matchStatusTitle(item)

  const hoverOn = () => {
    setHovering(item.id)
  }

  const hoverOff = () => {
    setHovering(null)
  }

  const isRegistered = item.participants.find((u) => u.user.id === user.id)

  return (
    <Paper
      sx={{
        boxShadow: 1,
        width: '100%',
        borderRadius: 0,
        cursor: 'pointer',
        marginBottom: 3,
      }}
    >
      <Link href={`/member/matches/${item.id}`} passHref>
        <Box
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', lg: 'flex', xl: 'flex' },
              height: '100%',
              minHeight: '119px',
              width: '119px',
              flexBasis: '119px',
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
              background: "url('/images/og-image.jpg') no-repeat center center",
              backgroundSize: 'cover',
              backgroundColor: '#eee',
            }}
          ></Box>
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              background: '#fefefe',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                padding: '14px 19px',
                borderBottom: '1px solid  #eee',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: {
                  xl: 'row',
                  lg: 'row',
                  md: 'row',
                  sm: 'row',
                  xs: 'column',
                },
                overflow: 'hidden',
              }}
            >
              <Typography
                sx={{
                  paddingBottom: {
                    xl: 0,
                    lg: 0,
                    md: 0,
                    sm: 0,
                    xs: 1,
                  },
                  paddingRight: {
                    xl: 1,
                    lg: 1,
                    md: 1,
                    sm: 1,
                    xs: 0,
                  },
                }}
                variant="h3"
                noWrap
              >
                {item.name}
              </Typography>
              <Box sx={{ minWidth: 160, height: 22 }}>
                <EventCountDown data={item} />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xl: 'row',
                  lg: 'row',
                  md: 'row',
                  sm: 'column',
                  xs: 'column',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flex: 1,
                  padding: '10px 20px',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <StatItem title={'Түвшин'}>
                  <Box
                    sx={{
                      borderRadius: 0,
                      height: 20,
                      lineHeight: 1.6,
                      color: '#111',
                      fontSize: 12,
                      backgroundColor: colorConstants[item.lvl - 1],
                      textAlign: 'center',
                      padding: '0px 16px',
                      marginTop: '3px',
                    }}
                  >{`Level ${item.lvl}`}</Box>
                </StatItem>
                <StatItem title={'Бүртгүүлсэн'}>
                  <AvatarGroup
                    max={5}
                    sx={{
                      alignItems: 'flex-start',
                      '& .MuiAvatarGroup-avatar': {
                        height: 24,
                        width: 24,
                        fontSize: 14,
                      },
                    }}
                  >
                    {item.participants.map((item, index) => {
                      return (
                        <CustomAvatar
                          key={index}
                          sx={{ height: 24, width: 24 }}
                          src={item.user.img_url}
                          alt={item.user.firstname}
                        />
                      )
                    })}
                    )
                  </AvatarGroup>
                </StatItem>
                <StatItem title={'Стэйж'}>{item.stage_number}</StatItem>

                <StatItem title={'Төлөв'}>
                  <StatusChip
                    status={progress}
                    sx={{
                      borderRadius: 0,
                      height: 20,
                      lineHeight: 1.6,
                      color: '#fff',
                    }}
                    label={progress.value}
                  />
                </StatItem>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  backgroundSize: 'cover',
                  backgroundPosition: '50%',
                  overflow: 'hidden',
                  backgroundRepeat: 'no-repeat',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '67px',
                  borderTop: {
                    xl: 'none',
                    lg: 'none',
                    md: 'none',
                    sm: '1px solid #eee',
                    xs: '1px solid #eee',
                  },
                  borderLeft: {
                    xl: '1px solid #eee',
                    lg: '1px solid #eee',
                    md: '1px solid #eee',
                    sm: 'none',
                    xs: 'none',
                  },
                  position: 'relative',
                  height: {
                    xl: '100%',
                    lg: '100%',
                    md: '100%',
                    sm: '60px',
                    xs: '60px',
                  },
                  width: {
                    xl: '200px',
                    lg: '200px',
                    md: '200px',
                    sm: '100%',
                    xs: '100%',
                  },
                  flexBasis: {
                    xl: '200px',
                    lg: '200px',
                    md: '200px',
                    sm: 'none',
                    xs: 'none',
                  },
                }}
              >
                <Box>
                  {/* <StatItem title={'Хураамж'}>{item.tax}</StatItem> */}
                  <StatItem title={'Тэмцээний өдөр'}>
                    {moment(item.match_start).format('MMM DD, YYYY')}
                  </StatItem>
                </Box>
                <SlideButton
                  hovering={item.id === hovering || isMobile}
                  title={isRegistered ? 'Дэлгэрэнгүй' : 'Бүртгүүлэх'}
                  color={isRegistered ? Colors.secondary : Colors.primary}
                  textColor={isRegistered ? Colors.black : Colors.white}
                ></SlideButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </Paper>
  )
}

export default MatchListItem
