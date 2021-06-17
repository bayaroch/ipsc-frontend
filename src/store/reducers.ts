import { combineReducers, Reducer } from 'redux'
import metadata from '@store/metadata'
import auth from '@store/auth/'
import { HYDRATE } from 'next-redux-wrapper'
import { MatchState } from './match/reducers'
import match from '@store/match'

export interface AppState {
  metadata: any
  auth: any
  match: MatchState
}

const combinedReducers = combineReducers({
  metadata: metadata.reducer,
  auth: auth.reducer,
  match: match.reducer,
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
