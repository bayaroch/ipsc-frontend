import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'
import { helper } from '@utils/helpers/common.helper'

const authState = (state: RootState) => state.auth

export const token = createSelector(authState, (state) => state.token)
export const user = createSelector(authState, (state) => state.user)
export const isAuth = createSelector(authState, (state) => state.authenticated)
export const memberType = createSelector(
  authState,
  (state) => state.user?.usertype
)
export const category = createSelector(
  authState,
  (state) => helper.categoryCalc(state.user?.birthday, state.user?.gender)[0] // selecting only first cat exluded lady future change might be needed sending multiple categories 1, 6 etc
)
