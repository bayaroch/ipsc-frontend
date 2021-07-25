import { StoreType, AppDispatch } from '@store/store'
import { Action } from 'redux'
import _ from 'lodash'

export const commonMiddleware: any = (store: StoreType) => (
  next: AppDispatch
) => <A extends Action>(action: A): A => {
  return next(action)
}
