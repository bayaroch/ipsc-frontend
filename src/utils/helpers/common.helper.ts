import { CAT_DATA, GENDER } from '@constants/user.constants'
import { SupportItem } from '@services/support.services'
import _ from 'lodash'
import moment from 'moment'
import { CATEGORY } from '@constants/user.constants'

const categoryCalc = (
  date: string | undefined,
  gender: number | undefined
): CATEGORY => {
  if (date === undefined || gender === undefined) return CATEGORY.UNCATEGORIZED
  const age = moment().diff(date, 'years')
  let category
  if (age < 16) {
    category = CATEGORY.SUPER_JUNIOR
  } else if (age > 16 && age < 21) {
    category = CATEGORY.JUNIOR
  } else if (age > 50 && age < 60) {
    category = CATEGORY.SENIOR
  } else if (age > 60) {
    category = CATEGORY.SUPER_SENIOR
  } else if (gender === GENDER.FEMALE) {
    category = CATEGORY.LADY
  } else {
    category = CATEGORY.UNCATEGORIZED
  }

  return category
}

const classTitleHelper = (
  id: number | undefined,
  classData: SupportItem[]
): SupportItem | undefined => {
  const findId = Number(id)
  const result = _.find(classData, { id: findId })
  return result
}

const categoryTitleHelper = (
  birthday: string | undefined,
  gender: number | undefined
): { id: number; name: string } | undefined => {
  const catId = categoryCalc(birthday, gender)
  const result = _.find(CAT_DATA, { id: catId })
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

const matchDate = (start: string, end: string): string => {
  const today = moment()
  const isBefore = moment(end).isBefore(today, 'days')

  if (today.isBetween(start, end, 'days', '[]')) {
    return 'Яг одоо явагдаж байна'
  } else if (isBefore) {
    return `${moment(start).format('MMM DD, YYYY')}(Дууссан)`
  } else {
    return moment(start).format('ddd, MMM DD')
  }
}

const isRegisterActive = (start: string, end: string): boolean => {
  const today = moment()
  const isBetween = today.isBetween(start, end, 'days', '[]')
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

export const helper = {
  categoryTitleHelper,
  classTitleHelper,
  categoryCalc,
  groupTitleHelper,
  matchDate,
  getNextDayOfWeek,
  isRegisterActive,
}
