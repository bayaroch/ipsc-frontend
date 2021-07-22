import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'
import { categoryCalc } from './helpers'

const authState = (state: RootState) => state.auth

export const token = createSelector(authState, (state) => state.token)
export const user = createSelector(authState, (state) => state.user)
export const isAuth = createSelector(authState, (state) => state.authenticated)
export const memberType = createSelector(
  authState,
  (state) => state.user?.usertype
)
export const category = createSelector(authState, (state) =>
  categoryCalc(state.user.birthday, state.user.gender)
)
