import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableHead,
  TableRow,
  TablePagination,
  TableFooter,
  TableContainer,
  TableCell,
  TableBody,
  withStyles,
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import PaginationActions from '@components/admin/PaginationActions'
import { MatchPaginationMeta, MatchPageMeta } from '@services/match.services'
import { MatchItem } from '@store/match/actions/types'
import _ from 'lodash'

export interface MatchListProps {
  getList: (params: MatchPageMeta) => void
  list: MatchItem[]
  pagination: MatchPaginationMeta
}

const MatchList: React.FC<MatchListProps> = (props) => {
  const { getList, list, pagination } = props
  const classes = useStyles()
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(2)

  useEffect(() => {
    getList({ page: page, per_page: rowsPerPage })
  }, [])

  useEffect(() => {
    getList({ page: page, per_page: rowsPerPage })
  }, [page, rowsPerPage])

  const emptyRows = rowsPerPage - _.get(list, 'length', 0)

  const handleChangePage = (
    _event: any,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
    if (pagination && pagination.total_objects < Number(event.target.value)) {
      setRowsPerPage(pagination.total_objects)
      setPage(1)
    } else {
      setRowsPerPage(parseInt(event.target.value, 10))
      setPage(1)
    }
  }

  return (
    <>
      {!_.isEmpty(list) && pagination ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Match Name</StyledTableCell>
                <StyledTableCell align="right">Match lvl</StyledTableCell>
                <StyledTableCell align="right">Tax</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Change Status</StyledTableCell>
                <StyledTableCell align="right">Edit</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <TableRow key={row.name}>
                  <StyledTableCell scope="row">{row.name}</StyledTableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.lvl}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.tax}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.status}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    Status Change UI
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    Edit Icon
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            {pagination ? (
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: 'All', value: pagination.total_objects },
                    ]}
                    colSpan={6}
                    count={pagination.total_objects}
                    rowsPerPage={rowsPerPage}
                    page={page > 0 && list.length < rowsPerPage ? 0 : page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={PaginationActions}
                  />
                </TableRow>
              </TableFooter>
            ) : null}
          </Table>
        </TableContainer>
      ) : null}
    </>
  )
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: 10,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
})

export default MatchList
