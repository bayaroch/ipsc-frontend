import moment from 'moment'
import { CATEGORY } from '@constants/user.constants'

export const categoryCalc = (
  date: string | undefined,
  gender: number | undefined
) => {
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
  } else if (gender === 1) {
    category = 5
  } else {
    category = CATEGORY.UNCATEGORIZED
  }
  return category
}
