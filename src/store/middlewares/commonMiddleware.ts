import { StoreType, AppDispatch } from '@store/store'
import { Action } from 'redux'
import { addToast } from '@store/support/actions'
import { squadChange, squadJoin, deleteSquads } from '@store/squads/actions'
import { createUser, updateUser } from '@store/account/actions'
import {
  deleteMatch,
  registerPublicMatch,
  updateRegisterMatch,
} from '@store/match/actions'
import _ from 'lodash'
import Router from 'next/router'

const messages = {
  [`${squadChange.fulfilled}`]: 'Ээлж солигдлоо',
  [`${squadJoin.fulfilled}`]: 'Ээлж сонгогдлоо',
  [`${updateUser.fulfilled}`]: 'Мэдээлэл шинэчлэгдлээ',
  [`${createUser.fulfilled}`]: 'Гишүүн амжилттай нэмэгдлээ',
  [`${deleteMatch.fulfilled}`]: 'Тэмцээн устгагдлаа',
  [`${deleteSquads.fulfilled}`]: 'Ээлж устгагдлаа',
  [`${updateRegisterMatch.fulfilled}`]: 'Амжилттай шинэчлэгдлээ',
  [`${registerPublicMatch.fulfilled}`]: 'Амжилттай бүртгэгдлээ',
}

const navigateToMatch = (action: any, _store: any) => {
  // eslint-disable-next-line no-console
  if (action.payload.data.match_id) {
    Router.push(`/match/${action.payload.data.match_id}`)
  }
}

const actions = {
  [`${registerPublicMatch.fulfilled}`]: navigateToMatch,
}

export const commonMiddleware: any = (store: StoreType) => (
  next: AppDispatch
) => <A extends Action>(action: A): A => {
  const message = messages[action.type]
  if (message && !_.isEmpty(message))
    store.dispatch(addToast({ message: message, severity: 'success' }))

  const globalAction = actions[action.type]

  if (globalAction) globalAction(action, store)

  return next(action)
}
