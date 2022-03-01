import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import _ from 'lodash'
import { SupportItem } from '@services/support.services'
import { helper } from '@utils/helpers/common.helper'
import { Typography } from '@mui/material'
import { ScoreItem } from '@services/match.services'

interface TableProps {
  data: ScoreItem[]
  groupTitle?: string
  classData: SupportItem[]
}

const ScoreTable: React.FC<TableProps> = (props) => {
  const { data, groupTitle, classData } = props

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Place</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Member</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Division</TableCell>
            <TableCell align="right">PF</TableCell>
            <TableCell align="right">Categories</TableCell>
            <TableCell align="right">Match Pts</TableCell>
            <TableCell align="right">Match %</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1">
                  {row.dq ? '(DQ)' : null}
                  {row.user.firstname}
                </Typography>
              </TableCell>
              <TableCell align="right">{row.user.usercode}</TableCell>
              <TableCell align="right">
                {_.get(
                  helper.classTitleHelper(row.user.class_id, classData),
                  'name',
                  ''
                )}
              </TableCell>
              <TableCell align="right">{groupTitle && groupTitle}</TableCell>
              <TableCell align="right">MINOR</TableCell>
              <TableCell align="right">
                {helper
                  .categoryTitleHelper(row.user.birthday, row.user.gender)
                  .map((c, index) => {
                    return `${index === 1 ? ' | ' : ''}${c.name}`
                  })}
              </TableCell>
              <TableCell align="right">{row.dq ? null : row.pts}</TableCell>
              <TableCell align="right">
                {row.dq ? null : `${row.percent}%`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ScoreTable
