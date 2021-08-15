import { StoreType, AppDispatch } from '@store/store'
import { Action } from 'redux'

export const commonMiddleware: any = (_store: StoreType) => (
  next: AppDispatch
) => <A extends Action>(action: A): A => {
  return next(action)
}
