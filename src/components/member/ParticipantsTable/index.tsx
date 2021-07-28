import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, CircularProgress, Typography } from '@material-ui/core'
import _ from 'lodash'
import MemberTable from './MemberTable'
import { ParticipantSortedList } from '@store/match/selectors/helpers'
import { SupportItem } from '@services/support.services'

export interface MatchListProps {
  data: ParticipantSortedList
  divisions: SupportItem[]
  classData: SupportItem[]
}

const ParticipantsTable: React.FC<MatchListProps> = (props) => {
  const { data, divisions, classData } = props
  const groupTitleHelper = (id: number | string) => {
    const findId = Number(id)
    const result = _.find(divisions, { id: findId })
    return result
  }
  return (
    <>
      {!_.isEmpty(data) &&
        divisions &&
        data.map((row, i) => (
          <Box key={i}>
            <Box
              justifyContent="center"
              alignItems="center"
              display="flex"
              padding={3}
            >
              <Typography variant="h3">
                {_.get(groupTitleHelper(row.groupTitle), 'name', '')}
              </Typography>
            </Box>
            <MemberTable
              data={row.data}
              groupTitle={_.get(
                groupTitleHelper(row.groupTitle),
                'shorthand',
                ''
              )}
              classData={classData}
            />
          </Box>
        ))}
    </>
  )
}

const useStyles = makeStyles({})

export default ParticipantsTable
