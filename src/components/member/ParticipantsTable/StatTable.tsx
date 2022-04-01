import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { StatItem } from '@services/participant.service'
import { Typography } from '@mui/material'

interface TableProps {
  data: StatItem[]
}

const StatTable: React.FC<TableProps> = (props) => {
  const { data } = props

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="right">Division</TableCell>
            <TableCell align="right">Uncategorized</TableCell>
            <TableCell align="right">Lady</TableCell>
            <TableCell align="right">Junior</TableCell>
            <TableCell align="right">Super Junior</TableCell>
            <TableCell align="right">Senior</TableCell>
            <TableCell align="right">Super Senior</TableCell>
            <TableCell align="right">Verified</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell align="right">
                <Typography variant="body1">{row[0]}</Typography>
              </TableCell>
              <TableCell align="right">{row[1]}</TableCell>
              <TableCell align="right">{row[2]}</TableCell>
              <TableCell align="right">{row[3]}</TableCell>
              <TableCell align="right">{row[4]}</TableCell>
              <TableCell align="right">{row[5]}</TableCell>
              <TableCell align="right">{row[6]}</TableCell>
              <TableCell align="right">{row[7]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StatTable
