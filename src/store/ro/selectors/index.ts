import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'

const getState = (state: RootState) => state.ro

export const matchRo = createSelector(getState, (state) => state.roList)
