import {
  TournamentStatusTime,
  TournamentStatusTimeText,
} from '@constants/match.constants'
import moment from 'moment'

/**
 * Returns the date of the next day. If today is friday and we are asking for next friday the friday of the next week is returned.
 * @param dayOfWeek 0:Su,1:Mo,2:Tu,3:We,4:Th,5:Fr,6:Sa
 */

const status = (
  start: string,
  end: string,
  matchStart: string,
  matchEnd: string
): TournamentStatusTime => {
  const today = moment()
  const isBeforeMatch = moment(matchEnd).isBefore(today, 'days')

  if (today.isBetween(today, start, 'days', '[]')) {
    return {
      eventTime: start,
      eventText: TournamentStatusTimeText.RegisterStartIn,
    }
    // diff today to register start
  }
  if (today.isBetween(start, end, 'days', '[]')) {
    return {
      eventTime: end,
      eventText: TournamentStatusTimeText.RegisterEndIn,
    }
    // diff today to register end
  } else if (today.isBetween(end, matchStart, 'days', '[]')) {
    return {
      eventTime: matchStart,
      eventText: TournamentStatusTimeText.MatchStartIn,
    }
    // diff today to MatchStart
  } else if (today.isBetween(matchStart, matchEnd, 'days', '[]')) {
    return {
      eventTime: matchEnd,
      eventText: TournamentStatusTimeText.MatchEndIn,
    }
    // diff today to MatchEnd
  } else if (!isBeforeMatch) {
    return {
      eventTime: null,
      eventText: TournamentStatusTimeText.Completed,
    }
  } else {
    return {
      eventTime: null,
      eventText: TournamentStatusTimeText.Completed,
    }
  }
}

export const StatusHelper = {
  status,
}
