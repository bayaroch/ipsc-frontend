import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'
import { groupByRemark } from './helpers'

const getState = (state: RootState) => state.squads

export const squads = createSelector(getState, (state) => state.squadList)
export const createSquadResult = createSelector(
  getState,
  (state) => state.createSquad
)

export const updateSquadResult = createSelector(
  getState,
  (state) => state.updateSquad
)

export const joinResponse = createSelector(getState, (state) => state.joinSquad)

export const squadByGroup = createSelector(getState, (state) => {
  if (state === undefined) return []
  const grouped = groupByRemark(state.squadList)
  return grouped
})
