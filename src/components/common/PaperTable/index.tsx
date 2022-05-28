import React, { ReactNode } from 'react'
import Table, { TableProps } from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import Paper from '@mui/material/Paper'
import { Box, CircularProgress, TableRow } from '@mui/material'

export interface PaperTableProps {
  renderRow: (data: any, index: number) => void
  data: any[]
  head: ReactNode
  tableProps?: TableProps
  isLoading?: boolean
}

const PaperTable: React.FC<PaperTableProps> = (props) => {
  const { data, renderRow, head, tableProps, isLoading } = props
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 1100,
          fontSize: 13,
          '& .MuiTableCell-root': {
            p: 1,
            fontSize: 14,
          },
        }}
        {...tableProps}
      >
        <TableHead>{head}</TableHead>
        <TableBody sx={{ position: 'relative' }}>
          {isLoading ? (
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                background: 'rgba(255,255,255,0.6)',
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CircularProgress size={20} />
            </Box>
          ) : null}
          {data.length > 0 ? (
            data.map((item, index) => renderRow(item, index))
          ) : (
            <TableRow sx={{ position: 'relative', p: 2, height: 50 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
              >
                Хоосон байна
              </Box>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PaperTable
