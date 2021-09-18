import { CAT_DATA } from '@constants/user.constants'
import { SupportItem } from '@services/support.services'
import { categoryCalc } from '@store/auth/selectors/helpers'
import _ from 'lodash'

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
  groupTitleHelper,
}
