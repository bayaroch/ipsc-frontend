import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'

const authState = (state: RootState) => state.auth

export const token = createSelector(authState, (state) => state.token)
export const user = createSelector(authState, (state) => state.user)
export const isAuth = createSelector(authState, (state) => state.authenticated)
