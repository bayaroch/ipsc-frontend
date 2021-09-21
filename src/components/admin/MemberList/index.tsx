import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableHead,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Select,
  Box,
  FormControl,
  Typography,
  Paper,
  withStyles,
  Theme,
  IconButton,
  createStyles,
} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import {
  MemberPaginationMeta,
  MemberPageMeta,
  MemberItem,
} from '@services/account.services'
import _ from 'lodash'
import { CheckCircle, EditOutlined, Schedule } from '@material-ui/icons'
import { Meta } from '@store/metadata/actions/types'
import moment from 'moment'
import { Colors } from '@theme/colors'
import { GENDER } from '@constants/user.constants'
import { helper } from '@utils/helpers/common.helper'
import { SupportItem } from '@services/support.services'
import Avatar from '@components/common/Avatar'

export interface MatchListProps {
  getList: (params: MemberPageMeta) => void
  list: MemberItem[]
  pagination: MemberPaginationMeta
  onEditMember?: (data: MemberItem) => void
  meta: Meta
  classData: SupportItem[]
}

export const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow)

const defaultPerPage = -1

const MemberList: React.FC<MatchListProps> = (props) => {
  const { getList, list, pagination, meta, classData, onEditMember } = props
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
    if (!meta.loaded && meta.pending && !meta.error && _.isEmpty(list)) {
      return (
        <Box className={classes.loaderBox}>
          <Box className="dot-flashing" />
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
                <TableCell>#</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">Овог Нэр</TableCell>
                <TableCell align="right">И-мэйл</TableCell>
                <TableCell align="right">Төрсөн өдөр</TableCell>
                <TableCell align="right">Хүйс</TableCell>
                <TableCell align="right">Төлөв</TableCell>
                <TableCell align="right">Класс</TableCell>
                <TableCell align="right">Категори</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <StyledTableRow key={row.id}>
                  <TableCell style={{ width: 60 }}>
                    <Typography variant="h2">{row.usercode}</Typography>
                  </TableCell>
                  <TableCell style={{ width: 60 }}>
                    <Typography variant="h2">
                      <Avatar
                        alt={row.firstname}
                        src={_.get(row, 'img_url', undefined)}
                      />
                    </Typography>
                  </TableCell>
                  <TableCell scope="row" align="right">
                    {_.get(row, 'lastname', '')} {_.get(row, 'firstname', '')}
                  </TableCell>
                  <TableCell style={{ maxWidth: 100 }} align="right">
                    <Typography component="p" noWrap>
                      {row.email}
                    </Typography>
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {moment(row.birthday).format('YYYY-MM-DD')}
                  </TableCell>
                  <TableCell style={{ width: 50 }} align="right">
                    {row.gender === GENDER.MALE ? 'эр' : 'эм'}
                  </TableCell>
                  <TableCell style={{ width: 50 }} align="right">
                    {row.enabled ? (
                      <CheckCircle className={classes.active} />
                    ) : (
                      <Schedule />
                    )}
                  </TableCell>
                  <TableCell style={{ width: 140 }} align="right">
                    {_.get(
                      helper.classTitleHelper(row.class_id, classData),
                      'name',
                      ''
                    )}
                  </TableCell>
                  <TableCell style={{ width: 140 }} align="right">
                    {_.get(
                      helper.categoryTitleHelper(row.birthday, row.gender),
                      'name',
                      ''
                    )}
                  </TableCell>
                  <TableCell style={{ width: 50 }} align="right">
                    <IconButton
                      onClick={() => onEditMember && onEditMember(row)}
                      size="small"
                    >
                      <EditOutlined />
                    </IconButton>
                  </TableCell>
                </StyledTableRow>
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

const useStyles = makeStyles({
  active: { color: Colors.green },
  link: {
    color: Colors.grey[100],
    '&:hover': {
      color: Colors.primary,
      transition: 'all 0.3s ease',
    },
  },
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

export default MemberList
