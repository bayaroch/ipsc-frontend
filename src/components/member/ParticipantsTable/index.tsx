import React from 'react'
import { Box, Typography } from '@mui/material/'
import _ from 'lodash'
import MemberTable from './MemberTable'
import { ParticipantSortedList } from '@store/match/selectors/helpers'
import { helper } from '@utils/helpers/common.helper'
import { SupportItem } from '@services/support.services'
import { AccessTime, Verified } from '@mui/icons-material'
import { Colors } from '@theme/colors'

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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          pt: 2,
          pb: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{ mr: 2, display: 'flex', alignItems: 'center' }}
        >
          Бүртгэл баталгаажсан
          <Verified
            sx={{ fontSize: 14, ml: 1, mt: 0.5, color: Colors.green }}
          />
        </Typography>
        <Typography
          variant="body1"
          sx={{ mr: 2, display: 'flex', alignItems: 'center' }}
        >
          Хүлээгдэж буй
          <AccessTime
            sx={{ fontSize: 14, ml: 1, mt: 0.5, color: Colors.primary }}
          />
        </Typography>
      </Box>
    </>
  )
}

export default ParticipantsTable
