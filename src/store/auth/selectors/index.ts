import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'

const authState = (state: RootState) => state.auth

export const token = createSelector(authState, (state) => state.lastKey)
export const user = createSelector(authState, (state) => state.lastKey)
export const isAuth = createSelector(authState, (state) => state.lastKey)
