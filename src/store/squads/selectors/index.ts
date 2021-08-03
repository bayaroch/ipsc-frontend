import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'

const getState = (state: RootState) => state.squad

export const squads = createSelector(getState, (state) => state.squadList)
export const createSquadResult = createSelector(
  getState,
  (state) => state.createSquad
)

export const updateSquadResult = createSelector(
  getState,
  (state) => state.updateSquad
)
