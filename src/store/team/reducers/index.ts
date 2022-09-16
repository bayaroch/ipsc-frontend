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
  builder.addCase(actions.leaveTeam.fulfilled, (state, action) => {
    const teamId = action.meta.arg.team_id
    const userId = action.meta.arg.user_id

    state.teams = state.teams
      ? _.map(state.teams, (t: TeamItem) => {
          if (t.id === teamId) {
            return {
              ...t,
              team_members: _.filter(
                t.team_members,
                (team) => team.user.id !== userId
              ),
            }
          } else return t
        })
      : undefined
  })
  builder.addCase(actions.createTeam.fulfilled, (state, action) => {
    state.teams = state.teams
      ? _.concat(state.teams, action.payload.data)
      : undefined
  })
  builder.addCase(actions.deleteTeam.fulfilled, (state, action) => {
    const teamId = action.meta.arg
    state.teams = state.teams
      ? _.filter(state.teams, (t: TeamItem) => t.id !== Number(teamId))
      : undefined
  })
})
