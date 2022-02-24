import React from 'react'
import { Box, Typography } from '@mui/material/'
import _ from 'lodash'
import ScoreTable from './ScoreTable'
import { DivisionScoreList } from '@store/match/selectors/helpers'
import { helper } from '@utils/helpers/common.helper'
import { SupportItem } from '@services/support.services'
import { EmojiEvents } from '@mui/icons-material'
import { Colors } from '@theme/colors'

export interface MatchListProps {
  data: DivisionScoreList
  divisions: SupportItem[]
  classData: SupportItem[]
}

const Score: React.FC<MatchListProps> = (props) => {
  const { data, divisions, classData } = props

  return (
    <>
      <Typography variant="h2" align="center">
        <EmojiEvents
          sx={{ position: 'relative', top: 4, color: Colors.secondary, mr: 1 }}
        />
        Тэмцээний дүн
      </Typography>
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
            <ScoreTable
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

export default Score
