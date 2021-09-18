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

export const helper = {
  categoryTitleHelper,
  classTitleHelper,
  categoryCalc,
  groupTitleHelper,
}
