import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import { ParticipantsItem } from '@services/match.services'
import _ from 'lodash'
import { SupportItem } from '@services/support.services'
import { helper } from '@utils/helpers/common.helper'
import { blue } from '@mui/material/colors'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

interface TableProps {
  data: ParticipantsItem[]
  classData: SupportItem[]
  divisions: SupportItem[]
}

const Item = styled(Chip)(() => ({
  textAlign: 'center',
  color: '#fff',
  height: 'auto',
  fontWeight: 600,
}))

const WaitingTable: React.FC<TableProps> = (props) => {
  const { data, classData, divisions } = props

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 30 }}>Place</TableCell>
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
              <TableCell align="right">
                <Typography variant="body1">{row.user.firstname}</Typography>
                {row.is_ro ? (
                  <Item
                    label={'RO'}
                    sx={{
                      backgroundColor: blue[500],
                      padding: '2px 0px',
                      fontSize: 9,
                    }}
                  />
                ) : (
                  ''
                )}
              </TableCell>
              <TableCell align="right">{row.user.usercode}</TableCell>
              <TableCell align="right">
                {_.get(
                  helper.classTitleHelper(row.user.class_id, classData),
                  'name',
                  ''
                )}
              </TableCell>
              <TableCell align="right">
                {_.get(
                  helper.groupTitleHelper(row.division_id, divisions),
                  'name',
                  ''
                )}
              </TableCell>
              <TableCell align="right">MINOR</TableCell>
              <TableCell align="right">
                {helper
                  .categoryTitleHelper(row.user.birthday, row.user.gender)
                  .map((c, index) => {
                    return `${index === 1 ? ' | ' : ''}${c.name}`
                  })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default WaitingTable
