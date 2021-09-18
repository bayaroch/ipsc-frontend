import { StoreType, AppDispatch } from '@store/store'
import { Action } from 'redux'
import { addToast } from '@store/support/actions'
import { squadChange, squadJoin } from '@store/squads/actions'
import { createUser, updateUser } from '@store/account/actions'
import _ from 'lodash'

const messages = {
  [`${squadChange.fulfilled}`]: 'Ээлж солигдлоо',
  [`${squadJoin.fulfilled}`]: 'Ээлж сонгогдлоо',
  [`${updateUser.fulfilled}`]: 'Мэдээлэл шинэчлэгдлээ',
  [`${createUser.fulfilled}`]: 'Гишүүн амжилттай нэмэгдлээ',
}

export const commonMiddleware: any = (store: StoreType) => (
  next: AppDispatch
) => <A extends Action>(action: A): A => {
  const message = messages[action.type]
  if (message && !_.isEmpty(message))
    store.dispatch(addToast({ message: message, severity: 'success' }))

  return next(action)
}
