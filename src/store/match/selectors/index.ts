import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'

const authState = (state: RootState) => state.match

export const matches = createSelector(authState, (state) => state.matchList)
