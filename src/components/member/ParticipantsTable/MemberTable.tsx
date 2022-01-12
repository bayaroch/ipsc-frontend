import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ParticipantsItem } from '@services/match.services'
import _ from 'lodash'
import { SupportItem } from '@services/support.services'
import { helper } from '@utils/helpers/common.helper'

interface TableProps {
  data: ParticipantsItem[]
  groupTitle?: string
  classData: SupportItem[]
}

const MemberTable: React.FC<TableProps> = (props) => {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="right">{row.user.firstname}</TableCell>
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
                {row.user.gender === 1 ? 'female' : ''}
                {_.get(
                  helper.categoryTitleHelper(
                    row.user.birthday,
                    row.user.gender
                  ),
                  'name',
                  ''
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MemberTable
