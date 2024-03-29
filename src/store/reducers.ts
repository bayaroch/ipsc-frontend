import { combineReducers, Reducer } from 'redux'
import metadata from '@store/metadata'
import auth from '@store/auth/'
import { HYDRATE } from 'next-redux-wrapper'
import { MatchState } from './match/reducers'
import match from '@store/match'
import { SupportState } from './support/reducers'
import support from './support'
import squads from './squads'
import account from './account'
import division from './division'
import matchType from './match-type'
import participants from './participants'
import team from './team'
import ro from './ro'

export interface AppState {
  metadata: any
  auth: any
  match: MatchState
  support: SupportState
  participants: any
  team: any
}

const combinedReducers = combineReducers({
  metadata: metadata.reducer,
  auth: auth.reducer,
  match: match.reducer,
  support: support.reducer,
  squads: squads.reducer,
  account: account.reducer,
  division: division.reducer,
  matchType: matchType.reducer,
  participants: participants.reducer,
  team: team.reducer,
  ro: ro.reducer,
})

const reducer: Reducer<any> = (state, action) => {
  if (action.type === HYDRATE) {
    /* client state will be overwritten
     * by server or static state hydation.
     * Implement state preservation as needed.
     * see: https://github.com/kirill-konshin/next-redux-wrapper#server-and-client-state-separation
     */
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  }
  return combinedReducers(state, action)
}

export default reducer

export type RootState = ReturnType<typeof reducer>
