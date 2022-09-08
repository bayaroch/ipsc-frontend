import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { TeamItem } from '@services/team.service'
import _ from 'lodash'

export type SupportState = {
  teams: TeamItem[] | undefined
}

const initialState: SupportState = {
  teams: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.listTeam.fulfilled, (state, action) => {
    // eslint-disable-next-line no-console
    console.log(action.payload.data)
    state.teams = action.payload.data
  })
  builder.addCase(actions.joinTeam.fulfilled, (state, action) => {
    const teamId = action.meta.arg.team_id
    state.teams = state.teams
      ? _.map(state.teams, (t: TeamItem) => {
          if (t.id === teamId) {
            return {
              ...t,
              team_members: _.concat(
                t.team_members,
                action.payload.data as TeamItem
              ),
            }
          } else return t
        })
      : undefined
  })
})
