import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'

const getState = (state: RootState) => state.support

export const support = createSelector(getState, (state) => state)

export const getToasts = createSelector(getState, (state) => state.toasts)

export const getPage = createSelector(getState, (state) => state.page)
