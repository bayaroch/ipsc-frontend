import { TournamentStatusTime } from '@constants/match.constants'
import { Box } from '@mui/material'
import { MatchItem } from '@store/match/actions/types'
import { StatusHelper } from '@utils/helpers/status.helper'
import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'

interface EventCountDownProps {
  data: MatchItem
}

const EventCountDown: React.FC<EventCountDownProps> = ({ data }) => {
  const [time, setTime] = useState<TournamentStatusTime | null>(null)

  const triggerStatus = () => {
    const status = StatusHelper.status(
      data.registration_start,
      data.registration_end,
      data.match_start,
      data.match_end
    )
    setTime(status)
  }

  useEffect(() => {
    triggerStatus()
  }, [])

  const renderer = ({ days, hours, minutes, completed }: any) => {
    if (completed) {
      return ''
    } else {
      return (
        <Box component="span" sx={{ fontSize: 13, fontWeight: 600 }}>
          {days && `${days}өдөр`} {hours && `${hours}цаг`}{' '}
          {minutes && `${minutes} мин`}
        </Box>
      )
    }
  }

  return (
    <Box>
      <Box component="span" sx={{ fontSize: 13, fontWeight: 500 }}>
        {time && time.eventText} :
      </Box>
      {time && time.eventTime !== null && (
        <Countdown date={time.eventTime} renderer={renderer} />
      )}
    </Box>
  )
}

export default EventCountDown
