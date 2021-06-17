import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableHead,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  withStyles,
  Select,
  Box,
  FormControl,
  CircularProgress,
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Pagination from '@material-ui/lab/Pagination'
import { MatchPaginationMeta, MatchPageMeta } from '@services/match.services'
import { MatchItem } from '@store/match/actions/types'
import _ from 'lodash'
import EditIcon from '@material-ui/icons/Edit'
import { MATCH_STATUS_TEXT } from '@constants/common.constants'
import { Meta } from '@store/metadata/actions/types'
import moment from 'moment'

export interface MatchListProps {
  getList: (params: MatchPageMeta) => void
  list: MatchItem[]
  pagination: MatchPaginationMeta
  onEditClick: (id: number) => void
  meta: Meta
}

const defaultPerPage = 5

const MatchList: React.FC<MatchListProps> = (props) => {
  const { getList, list, pagination, onEditClick, meta } = props
  const classes = useStyles()
  const [page, setPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(defaultPerPage)
  const [selectRow, setSelectRow] = useState<string>(defaultPerPage.toString())

  useEffect(() => {
    getList({ page: page, per_page: rowsPerPage })
  }, [])

  useEffect(() => {
    getList({ page: page, per_page: rowsPerPage })
  }, [page, rowsPerPage])

  useEffect(() => {
    if (pagination && pagination.total_objects < rowsPerPage) {
      setRowsPerPage(pagination.total_objects)
    }
  }, [pagination])

  const emptyRows = rowsPerPage - _.get(list, 'length', 0)

  const handleChangePage = (
    _event: any,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<{ name?: string; value: any }>
  ) => {
    setSelectRow(event.target.value)
    if (pagination && pagination.total_objects < Number(event.target.value)) {
      setRowsPerPage(pagination.total_objects)
      setPage(1)
    } else {
      setRowsPerPage(parseInt(event.target.value, 10))
      setPage(1)
    }
  }

  const renderLoader = () => {
    if (!meta.loaded && meta.pending && !meta.error && list === undefined) {
      return (
        <Box className={classes.loaderBox}>
          <CircularProgress className={classes.loader} />
        </Box>
      )
    }
    return null
  }

  const renderList = () => {
    if (!_.isEmpty(list)) {
      return (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Match Name</StyledTableCell>
                <StyledTableCell align="right">Start Date</StyledTableCell>
                <StyledTableCell align="right">Match lvl</StyledTableCell>
                <StyledTableCell align="right">Tax</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Edit</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <TableRow key={row.id}>
                  <TableCell scope="row">{row.name}</TableCell>
                  <TableCell style={{ width: 200 }} align="right">
                    {moment(row.match_start).format('YYYY-MM-DD HH:mm:ss')}
                  </TableCell>
                  <TableCell style={{ width: 100 }} align="right">
                    {row.lvl}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.tax}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {
                      _.filter(MATCH_STATUS_TEXT, function (o) {
                        return o.id === row.status
                      })[0].value
                    }
                  </TableCell>
                  <TableCell style={{ width: 60 }} align="right">
                    <EditIcon
                      onClick={() => onEditClick(row.id)}
                      className={classes.editBtn}
                    />
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <Box display="flex" className={classes.pagination}>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                inputProps={{
                  id: 'demo-customized-select-native',
                }}
                value={selectRow}
                onChange={handleChangeRowsPerPage}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={-1}>All</option>
              </Select>
            </FormControl>
            <Pagination
              count={pagination.total_pages}
              page={page}
              onChange={handleChangePage}
            />
          </Box>
        </TableContainer>
      )
    }
    return null
  }

  return (
    <>
      {renderList()}
      {renderLoader()}
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
  formControl: {
    '& .MuiInputBase-root .MuiOutlinedInput-input': {
      paddingTop: 10,
      paddingBottom: 10,
    },
  },
  loader: {
    fontSize: 12,
  },
  loaderBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
  pagination: {
    position: 'relative',
    justifyContent: 'space-between',
    padding: 5,
    width: '100%',
  },
  editBtn: {
    cursor: 'pointer',
  },
})

export default MatchList
