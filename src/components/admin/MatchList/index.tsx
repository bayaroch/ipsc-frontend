import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
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
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(2)

  useEffect(() => {
    getList({ page: page, per_page: rowsPerPage })
  }, [])

  useEffect(() => {
    getList({ page: page, per_page: rowsPerPage })
    console.log('meta------------>', page, rowsPerPage)
  }, [page, rowsPerPage])

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, _.get(list, 'length', 0) - page * rowsPerPage)

  const handleChangePage = (
    _event: any,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  console.log('list:', list)

  return (
    <>
      {!_.isEmpty(list) && pagination ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="custom pagination table">
            <TableBody>
              {list.map((row) => (
                <TableRow key={row.name}>
                  <TableCell scope="row">{row.name}</TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.lvl}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.tax}
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={pagination.total_objects}
                  rowsPerPage={rowsPerPage}
                  page={page}
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
          </Table>
        </TableContainer>
      ) : null}
    </>
  )
}

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
})

export default MatchList
