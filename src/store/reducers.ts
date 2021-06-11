import { combineReducers, Reducer } from 'redux'
import metadata from '@store/metadata'
import { authReducer } from '@store/auth/reducers'
import { HYDRATE } from 'next-redux-wrapper'

export interface AppState {
  metadata: any
  auth: any
}

const combinedReducers = combineReducers({
  metadata: metadata.reducer,
  auth: authReducer,
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