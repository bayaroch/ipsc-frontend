import React, { useEffect, useState } from 'react'
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
  IconButton,
  Button,
} from '@mui/material/'
import Pagination from '@mui/material//Pagination'
import {
  MatchTypePaginationMeta,
  MatchTypePageMeta,
  MatchTypeItem,
} from '@services/match-type.services'
import _ from 'lodash'
import {
  EditOutlined,
  Add,
} from '@mui/icons-material'
import { Meta } from '@store/metadata/actions/types'
import { SupportItem } from '@services/support.services'

export interface MatchTypeListProps {
  getList: (params: MatchTypePageMeta) => void
  list: MatchTypeItem[]
  pagination: MatchTypePaginationMeta
  onEditMatchType?: (data: MatchTypeItem) => void
  meta: Meta
  classData: SupportItem[]
  badgeData: SupportItem[]
  onAdd: () => void
}

const defaultPerPage = 20

const MatchTypeList: React.FC<MatchTypeListProps> = (props) => {
  const {
    getList,
    list,
    pagination,
    meta,
    classData,
    onAdd,
    onEditMatchType,
    badgeData,
  } = props
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

  const handleChangeRowsPerPage = (event: any) => {
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
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 300,
          }}
        >
          <Box className="dot-flashing" />
        </Box>
      )
    }
    return null
  }

  const renderList = () => {
    if (!_.isEmpty(list)) {
      return (
        <>
          <Box
            sx={{
              paddingBottom: '10px',
              justifyContent: 'flex-end',
              display: 'flex',
            }}
          >
            <Button
              variant="contained"
              color={'primary'}
              size="small"
              onClick={onAdd}
            >
              <Add style={{ marginRight: 5 }} />
              Нэмэх
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="right">Нэр</TableCell>
                  <TableCell align="right">Тайлбар</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell style={{ width: 60 }}>
                      <Typography variant="h2">{row.id}</Typography>
                    </TableCell>
                    <TableCell style={{ maxWidth: 100 }} align="right">
                      <Typography component="p" noWrap>
                        {row.name}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ maxWidth: 100 }} align="right">
                      <Typography component="p" noWrap>
                        {row.remark}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ width: 50 }} align="right">
                      <IconButton
                        onClick={() => onEditMatchType && onEditMatchType(row)}
                        size="small"
                      >
                        <EditOutlined />
                      </IconButton>
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
            <Box
              display="flex"
              sx={{
                position: 'relative',
                justifyContent: 'space-between',
                padding: '5px',
                width: '100%',
              }}
            >
              <FormControl
                variant="outlined"
                sx={{
                  '& .MuiInputBase-root .MuiOutlinedInput-input': {
                    paddingTop: '10px',
                    paddingBottom: '10px',
                  },
                }}
              >
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
                  <option value={100}>All</option>
                </Select>
              </FormControl>
              <Pagination
                count={pagination.total_pages}
                page={page}
                onChange={handleChangePage}
              />
            </Box>
          </TableContainer>
        </>
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

export default MatchTypeList
