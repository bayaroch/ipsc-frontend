import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'

const getState = (state: RootState) => state.team

export const teams = createSelector(getState, (state) => state.teams)
