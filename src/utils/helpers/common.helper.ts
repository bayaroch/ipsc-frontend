import { CAT_DATA, GENDER, USER_TYPE } from '@constants/user.constants'
import { SupportItem } from '@services/support.services'
import _ from 'lodash'
import moment from 'moment'
import { CATEGORY } from '@constants/user.constants'
import { MatchItem } from '@store/match/actions/types'
import {
  MATCH_PROGRESS_STATUS,
  MATCH_PROGRESS_STATUS_TITLE,
  MATCH_STATUS,
} from '@constants/common.constants'

const categoryCalc = (
  date: string | undefined,
  gender: number | undefined
): CATEGORY[] => {
  if (date === undefined || gender === undefined)
    return [CATEGORY.UNCATEGORIZED]
  const age = moment().diff(date, 'years')
  let category = null
  const isLady = gender === GENDER.FEMALE

  if (age < 14) {
    category = CATEGORY.SUPER_JUNIOR
  } else if (age >= 14 && age < 18) {
    category = CATEGORY.JUNIOR
  } else if (age > 50 && age < 60) {
    category = CATEGORY.SENIOR
  } else if (age > 60) {
    category = CATEGORY.SUPER_SENIOR
  } else {
    category = CATEGORY.UNCATEGORIZED
  }

  if (isLady && category === CATEGORY.UNCATEGORIZED) {
    return [CATEGORY.LADY]
  } else if (!isLady && category === CATEGORY.UNCATEGORIZED) {
    return [CATEGORY.UNCATEGORIZED]
  } else if (isLady && category !== CATEGORY.UNCATEGORIZED) {
    return [CATEGORY.LADY, category]
  } else {
    return [category]
  }
}

const classTitleHelper = (
  id: number | undefined,
  classData: SupportItem[]
): SupportItem | undefined => {
  const findId = Number(id)
  const result = id ? _.find(classData, { id: findId }) : undefined
  return result
}

const categoryTitleHelper = (
  birthday: string | undefined,
  gender: number | undefined
): { id: number; name: string }[] => {
  const catIdArray = categoryCalc(birthday, gender)
  const result = _.filter(CAT_DATA, (c) => catIdArray.includes(c.id))
  return result
}

const categoryTitleHelperAlt = (
  ids: number | undefined
): { id: number; name: string }[] => {
  const catIdArray = [ids]
  const result = _.filter(CAT_DATA, (c) => catIdArray.includes(c.id))
  return result
}

const groupTitleHelper = (
  id: number | string,
  divisions: SupportItem[]
): SupportItem | undefined => {
  const findId = Number(id)
  const result = _.find(divisions, { id: findId })
  return result
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const memberTypeTitleHelper = (id: USER_TYPE) => {
  if (id === USER_TYPE.USER_STUDENT) {
    return 'Сурагч'
  } else {
    return 'Гишүүн'
  }
}

const matchDate = (start: string, end: string): string => {
  const today = moment()
  const isBefore = moment(end).isBefore(today, 'days')

  if (today.isBetween(start, end, 'days', '[]')) {
    return `Яг одоо явагдаж байна`
  } else if (isBefore) {
    return `${moment(start).format('MMM DD, YYYY HH:mm')}(Дууссан)`
  } else {
    return moment(start).format('ddd, MMM DD HH:mm')
  }
}

/**
 * Returns the date of the next day. If today is friday and we are asking for next friday the friday of the next week is returned.
 * @param dayOfWeek 0:Su,1:Mo,2:Tu,3:We,4:Th,5:Fr,6:Sa
 */
const registrationDate = (
  start: string,
  end: string,
  type: 'start' | 'end'
): string => {
  const today = moment()
  const isBefore = moment(end).isBefore(today, 'days')

  if (today.isBetween(start, end, 'days', '[]')) {
    if (type === 'start') {
      return `${moment(start).format(
        'MMM DD, YYYY HH:mm'
      )} (Яг одоо явагдаж байна) `
    } else {
      return `${moment(start).format('MMM DD, YYYY HH:mm')}`
    }
  } else if (isBefore) {
    if (type === 'start') {
      return `${moment(start).format('ddd, MMM DD HH:mm')}`
    } else {
      return `${moment(end).format('ddd, MMM DD HH:mm')}
  (Бүртгэл хаагдсан)`
    }
  } else {
    return moment(start).format('ddd, MMM DD HH:mm')
  }
}

const isRegisterActive = (start: string, end: string): boolean => {
  const today = moment()
  // const isBetween = today.isBetween(start, end, 'days', '[]')
  const isBetween = today.isBetween(start, end)
  return isBetween
}

/**
 * Returns the date of the next day. If today is friday and we are asking for next friday the friday of the next week is returned.
 * @param dayOfWeek 0:Su,1:Mo,2:Tu,3:We,4:Th,5:Fr,6:Sa
 */
const getNextDayOfWeek = (date: Date, dayOfWeek: number): Date => {
  const resultDate = new Date(date.getTime())
  resultDate.setDate(
    date.getDate() + ((7 + dayOfWeek - date.getDay() - 1) % 7) + 1
  )
  return resultDate
}

const currency = (data: number): string => {
  const formatter = Number(data).toLocaleString('mn-MN', {
    style: 'decimal',
    minimumFractionDigits: 0,
  })
  if (data === 0) {
    return 'FREE'
  }
  return `${formatter} ₮`
}

/**
 * Returns the date of the next day. If today is friday and we are asking for next friday the friday of the next week is returned.
 * @param
 */

export type MatchProgressType = {
  id: MATCH_PROGRESS_STATUS
  value: string
}

const matchStatusTitle = (data: MatchItem): MatchProgressType => {
  const status = matchStatus(data)
  const title = _.filter(MATCH_PROGRESS_STATUS_TITLE, (m) => m.id === status)
  return title[0]
}

const matchStatus = (data: MatchItem): MATCH_PROGRESS_STATUS => {
  const match_start = _.get(data, 'match_start', '')
  const match_end = _.get(data, 'match_end', '')
  const registration_start = _.get(data, 'registration_start', '')
  const registration_end = _.get(data, 'registration_end', '')
  const status = _.get(data, 'status', MATCH_STATUS.MATCH_PUBLISH)

  const isBetweenMatch = isRegisterActive(match_start, match_end)
  const isBetweenRegister = isRegisterActive(
    registration_start,
    registration_end
  )
  const today = moment()
  const isAfterEnd = moment(match_end).isAfter(today, 'days')
  const isBeforeRegister = moment(today).isBefore(registration_start, 'days')

  const isBetweenMatchRegister = isRegisterActive(registration_end, match_start)
  const isCanceled = status === MATCH_STATUS.MATCH_CANCEL

  if (isBetweenMatch && !isAfterEnd && !isCanceled) {
    return MATCH_PROGRESS_STATUS.IN_PROGRESS
  } else if (isBetweenRegister && !isCanceled) {
    return MATCH_PROGRESS_STATUS.REGISTERING
  } else if (!isAfterEnd && !isCanceled) {
    return MATCH_PROGRESS_STATUS.COMPLETED
  } else if (isBeforeRegister && !isCanceled) {
    return MATCH_PROGRESS_STATUS.READY
  } else if (isBetweenMatchRegister && !isCanceled) {
    return MATCH_PROGRESS_STATUS.REGISTERING_CLOSED
  } else if (isCanceled) {
    return MATCH_PROGRESS_STATUS.CANCELLED
  } else {
    return MATCH_PROGRESS_STATUS.UNKNOWN
  }
}

const isBeforeMatch = (start: string): boolean => {
  const today = moment()
  const isBeforeMatch = moment(today).isBefore(start, 'days')
  return isBeforeMatch
}

export const helper = {
  categoryTitleHelper,
  categoryTitleHelperAlt,
  classTitleHelper,
  categoryCalc,
  groupTitleHelper,
  matchDate,
  getNextDayOfWeek,
  memberTypeTitleHelper,
  isRegisterActive,
  currency,
  matchStatusTitle,
  matchStatus,
  isBeforeMatch,
  registrationDate,
}
