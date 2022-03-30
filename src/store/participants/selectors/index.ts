import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'

const getState = (state: RootState) => state.participants

export const participants = createSelector(
  getState,
  (state) => state.participants
)

export const participantsStat = createSelector(
  getState,
  (state) => state.participantsStat
)
