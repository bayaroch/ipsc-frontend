import { createSelector } from 'reselect'
import { RootState } from '@store/reducers'
import _ from 'lodash'

const getState = (state: RootState) => state.support

export const support = createSelector(getState, (state) => state)
