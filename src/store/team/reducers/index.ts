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
    state.teams = action.payload.data
  })
  builder.addCase(actions.joinTeam.fulfilled, (state, action) => {
    const teamId = action.meta.arg.team_id
    state.teams = state.teams
      ? _.map(state.teams, (t) => {
          if (t.id === teamId) {
            return {
              ...t,
              team_members: _.concat(t.team_members, action.payload.data),
            }
          } else {
            return {
              ...t,
              team_members: _.filter(
                t.team_members,
                (t) => t.user.id !== action.payload.data.user.id
              ),
            }
          }
        })
      : undefined
  })
  builder.addCase(actions.leaveTeam.fulfilled, (state, action) => {
    const pK = action.meta.arg.primary_key

    state.teams = state.teams
      ? _.map(state.teams, (t: TeamItem) => {
          return {
            ...t,
            team_members: _.filter(t.team_members, (team) => team.id !== pK),
          }
        })
      : undefined
  })
  builder.addCase(actions.createTeam.fulfilled, (state, action) => {
    state.teams = state.teams
      ? state.teams[0]?.division.id === action.payload.data?.division.id
        ? _.concat(state.teams, action.payload.data)
        : state.teams
      : undefined
  })
  builder.addCase(actions.deleteTeam.fulfilled, (state, action) => {
    const teamId = action.meta.arg
    state.teams = state.teams
      ? _.filter(state.teams, (t: TeamItem) => t.id !== Number(teamId))
      : undefined
  })
})
