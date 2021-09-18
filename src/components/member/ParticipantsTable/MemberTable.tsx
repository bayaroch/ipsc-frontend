import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
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
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
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
                  'shorthand',
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default MemberTable
