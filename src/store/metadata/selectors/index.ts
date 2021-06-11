import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'
import { camelCase } from 'change-case'
import { AUTH_ACTION_TYPE } from '@store/auth/actions/types'
import { MetaReducerType } from '../actions/types'

const helper = (actionType: any) => {
  return camelCase(actionType.substring(0, actionType.lastIndexOf('_')))
}

const createMetadataSelector = (slice: any) => (
  state: RootState | MetaReducerType
) => {
  return state.metadata[slice]
    ? state.metadata[slice]
    : { pending: false, loaded: false, error: false }
}

export const loginPending = createSelector(
  createMetadataSelector(helper(AUTH_ACTION_TYPE.LOGIN_REQUEST)),
  (metadata) => metadata
)