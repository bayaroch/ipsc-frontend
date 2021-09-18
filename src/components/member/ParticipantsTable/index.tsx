import React from 'react'
import { Box, Typography } from '@material-ui/core'
import _ from 'lodash'
import MemberTable from './MemberTable'
import { ParticipantSortedList } from '@store/match/selectors/helpers'
import { helper } from '@utils/helpers/common.helper'
import { SupportItem } from '@services/support.services'

export interface MatchListProps {
  data: ParticipantSortedList
  divisions: SupportItem[]
  classData: SupportItem[]
}

const ParticipantsTable: React.FC<MatchListProps> = (props) => {
  const { data, divisions, classData } = props

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
                {_.get(
                  helper.groupTitleHelper(row.groupTitle, divisions),
                  'name',
                  ''
                )}
              </Typography>
              <details></details>
            </Box>
            <MemberTable
              data={row.data}
              groupTitle={_.get(
                helper.groupTitleHelper(row.groupTitle, divisions),
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

export default ParticipantsTable
