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
  alpha,
  Typography,
  Paper,
  IconButton,
  Button,
} from '@mui/material/'
import Pagination from '@mui/material//Pagination'
import {
  MemberPaginationMeta,
  MemberPageMeta,
  MemberItem,
} from '@services/account.services'
import _ from 'lodash'
import {
  CheckCircle,
  EditOutlined,
  PersonAdd,
  Schedule,
} from '@mui/icons-material'
import { Meta } from '@store/metadata/actions/types'
import moment from 'moment'
import { Colors } from '@theme/colors'
import { GENDER } from '@constants/user.constants'
import { helper } from '@utils/helpers/common.helper'
import { SupportItem } from '@services/support.services'
import Avatar from '@components/common/Avatar'
import Link from 'next/link'
import BadgeChips from '@components/member/BadgeChips'

export interface MemberListProps {
  getList: (params: MemberPageMeta) => void
  list: MemberItem[]
  pagination: MemberPaginationMeta
  onEditMember?: (data: MemberItem) => void
  meta: Meta
  classData: SupportItem[]
  badgeData: SupportItem[]
  onAdd: () => void
}

const defaultPerPage = 500

const MemberList: React.FC<MemberListProps> = (props) => {
  const {
    getList,
    list,
    pagination,
    meta,
    classData,
    onAdd,
    onEditMember,
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
              <PersonAdd style={{ marginRight: 5 }} />
              Нэмэх
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
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
                  <TableRow key={row.id}>
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
                      <Link
                        href={`/member/profile/[id]`}
                        as={`/member/profile/${row.id}`}
                        passHref
                      >
                        <Typography
                          component="a"
                          sx={{
                            color: Colors.primary,
                            pb: 1,
                            '&:hover': {
                              color: alpha(Colors.primary, 0.9),
                            },
                          }}
                          noWrap
                        >
                          {_.get(row, 'lastname', '')}{' '}
                          {_.get(row, 'firstname', '')}
                        </Typography>
                      </Link>

                      <BadgeChips
                        size="small"
                        data={row}
                        badgesData={badgeData}
                      />
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
                        <CheckCircle sx={{ active: { color: Colors.green } }} />
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
                      {helper
                        .categoryTitleHelper(row.birthday, row.gender)
                        .map((c, index) => {
                          return `${index === 1 ? ' | ' : ''}${c.name}`
                        })}
                    </TableCell>
                    <TableCell style={{ width: 50 }} align="right">
                      <IconButton
                        onClick={() => onEditMember && onEditMember(row)}
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

export default MemberList
