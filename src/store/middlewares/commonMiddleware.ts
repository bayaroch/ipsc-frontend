import { StoreType, AppDispatch } from '@store/store'
import { Action } from 'redux'
import { addToast, toastParams } from '@store/support/actions'
import { squadChange, squadJoin, deleteSquads } from '@store/squads/actions'
import { createUser, updateUser } from '@store/account/actions'
import {
  deleteMatch,
  registerPublicMatch,
  updateRegisterMatch,
} from '@store/match/actions'
import _ from 'lodash'
import Router from 'next/router'
import { createTeam, deleteTeam, joinTeam } from '@store/team/actions'

const messages = {
  [`${squadChange.fulfilled}`]: {
    message: 'Скуад солигдлоо',
    severity: 'success',
  },
  [`${squadJoin.fulfilled}`]: {
    message: 'Скуад сонгогдлоо',
    severity: 'success',
  },
  [`${updateUser.fulfilled}`]: {
    message: 'Мэдээлэл шинэчлэгдлээ',
    severity: 'success',
  },
  [`${createUser.fulfilled}`]: {
    message: 'Гишүүн амжилттай нэмэгдлээ',
    severity: 'success',
  },
  [`${deleteMatch.fulfilled}`]: {
    message: 'Тэмцээн устгагдлаа',
    severity: 'success',
  },
  [`${deleteSquads.fulfilled}`]: {
    message: 'Скуад устгагдлаа',
    severity: 'success',
  },
  [`${updateRegisterMatch.fulfilled}`]: {
    message: 'Амжилттай шинэчлэгдлээ',
    severity: 'success',
  },
  [`${registerPublicMatch.fulfilled}`]: {
    message: 'Амжилттай бүртгэгдлээ',
    severity: 'success',
  },
  [`${joinTeam.rejected}`]: {
    message: 'Амжилтгүй, код буруу эсвэл баг дүүрсэн байна',
    severity: 'warning',
  },
  [`${joinTeam.fulfilled}`]: {
    message: 'Амжилттай багт орлоо',
    severity: 'success',
  },
  [`${joinTeam.fulfilled}`]: {
    message: 'Амжилттай багаас гарлаа',
    severity: 'success',
  },
  [`${createTeam.fulfilled}`]: {
    message: 'Амжилттай баг үүсгэлээ',
    severity: 'success',
  },
  [`${createTeam.rejected}`]: {
    message: 'Алдаа гарлаа',
    severity: 'warning',
  },
  [`${deleteTeam.fulfilled}`]: {
    message: 'Амжилттай баг устгалаа',
    severity: 'success',
  },
  [`${deleteTeam.rejected}`]: {
    message: 'Алдаа гарлаа',
    severity: 'warning',
  },
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
    store.dispatch(addToast(message as toastParams))

  const globalAction = actions[action.type]

  if (globalAction) globalAction(action, store)

  return next(action)
}
