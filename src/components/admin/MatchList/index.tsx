import React, { useEffect, useState } from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Box,
  Typography,
  Paper,
} from '@mui/material/'
import Pagination from '@mui/material//Pagination'
import { MatchPaginationMeta, MatchPageMeta } from '@services/match.services'
import _ from 'lodash'
import { Meta } from '@store/metadata/actions/types'
import Link from 'next/link'
import { Colors } from '@theme/colors'
import { GroupedMatchListItem } from '@store/match/selectors/helpers'
import TableActions from './TableActions'
import { helper } from '@utils/helpers/common.helper'
import {
  Visibility,
  Block,
  CheckCircleOutlined,
  Restore,
} from '@mui/icons-material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { SupportState } from '@store/support/reducers'
import { support as sup } from '@store/support/selectors'
import { useSelector } from 'react-redux'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

export interface MatchListProps {
  getList: (params: MatchPageMeta) => void
  list: GroupedMatchListItem[]
  pagination: MatchPaginationMeta
  onEditClick: (id: number) => void
  onEditSquad: (id: number) => void
  onConfirm: (id: number) => void
  meta: Meta
  onDelete: (id: number) => void
  onImport: (id: number) => void
}

const defaultPerPage = 10

export const MATCH_STATUS_TEXT_ICONS = [
  {
    id: 0,
    value: 'Preview',
    icon: <Visibility />,
  },
  {
    id: 1,
    value: 'Publish',
    icon: <CheckCircleOutlined />,
  },
  {
    id: 2,
    value: 'Postpone',
    icon: <Restore />,
  },
  {
    id: 3,
    value: 'Cancel',
    icon: <Block />,
  },
]

const MatchList: React.FC<MatchListProps> = (props) => {
  const {
    getList,
    list,
    pagination,
    onEditClick,
    meta,
    onEditSquad,
    onDelete,
    onConfirm,
    onImport,
  } = props

  const [page, setPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(defaultPerPage)
  const [matchType, setMatchType] = useState<string>('-1')
  const [isPractice, setIsPractice] = useState<string>('-1')
  const support: SupportState = useSelector(sup)

  const matchTypes = support && support.matchTypes ? support.matchTypes : []

  useEffect(() => {
    getList({
      page: page,
      per_page: rowsPerPage,
      sort_column: 'match_start',
      sort_direction: 'desc',
      match_type_id: Number(matchType),
      is_practice: Number(isPractice),
    })
  }, [page, isPractice, matchType])

  useEffect(() => {
    if (pagination && pagination.total_objects < rowsPerPage) {
      setRowsPerPage(pagination.total_objects)
    }
  }, [pagination])

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newVal: string,
  ) => {
    setIsPractice(newVal);
  };

  const selectHandleChange = (event: SelectChangeEvent) => {
    setMatchType(event.target.value as string);
  };


  // const emptyRows = rowsPerPage - _.get(list, 'length', 0)

  const handleChangePage = (
    _event: any,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage)
  }

  const renderLoader = () => {
    if (!meta.loaded && meta.pending && !meta.error) {
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
    if (!_.isEmpty(list) && meta.loaded && !meta.pending) {
      return (
        <Box>
          <Box style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <Box sx={{ width: 300, m: 1 }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">MatchType</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={matchType}
                  label="MatchType"
                  onChange={selectHandleChange}
                >
                  <MenuItem value={-1}>All</MenuItem>
                  {matchTypes.map((item) => {
                    return (
                      <MenuItem value={item.id.toString()} key={item.id}>
                        {item.name}
                      </MenuItem>
                    )
                  })}
                  
                </Select>
              </FormControl>
            </Box>
          
            <ToggleButtonGroup
              color="primary"
              value={isPractice}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="-1">All</ToggleButton>
              <ToggleButton value="0">Match</ToggleButton>
              <ToggleButton value="1">Practices</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {list.map((g, i) => {
            return (
              <>
                <Typography variant="h3" mb={1} align="center">
                  {g.groupTitle}
                </Typography>
                <Paper key={i} sx={{ mb: 3 }}>
                  <TableContainer>
                    <Table
                      sx={{ minWidth: 500 }}
                      aria-label="custom pagination table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>Нэр</TableCell>
                          <TableCell align="right">Эхлэх өдөр</TableCell>
                          <TableCell align="right">Төлөв</TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {g.data.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell scope="row">
                              <Link passHref href={`/member/matches/${row.id}`}>
                                <Box
                                  component="a"
                                  sx={{
                                    color: Colors.grey[100],
                                    fontWeight: 600,
                                    '&:hover': {
                                      color: Colors.primary,
                                      transition: 'all 0.3s ease',
                                    },
                                  }}
                                >
                                  {row.name}
                                </Box>
                              </Link>
                              <Typography
                                noWrap
                                sx={{
                                  fontSize: 12,
                                  maxWidth: 140,
                                  color: '#999',
                                }}
                              >
                                {row.additional_info}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography
                                sx={{ fontWeight: 600, fontSize: 12 }}
                                variant="body1"
                              >
                                {' '}
                                {helper.matchDate(
                                  row.match_start,
                                  row.match_end
                                )}{' '}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Box sx={{ fontSize: 12 }}>
                                {
                                  _.filter(MATCH_STATUS_TEXT_ICONS, function (
                                    o
                                  ) {
                                    return o.id === row.status
                                  })[0].icon
                                }
                              </Box>
                            </TableCell>
                            <TableCell align="right">
                              <TableActions
                                onEdit={onEditClick}
                                onDelete={onDelete}
                                onEditSquad={onEditSquad}
                                onConfirm={onConfirm}
                                onImport={onImport}
                                data={row.id}
                                isScore={!_.isEmpty(row.match_scores)}
                              />
                            </TableCell>
                          </TableRow>
                        ))}

                        {/* {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                      )} */}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </>
            )
          })}
          <Box
            display="flex"
            sx={{
              position: 'relative',
              justifyContent: 'center',
              padding: '20px',
              width: '100%',
            }}
          >
            <Pagination
              count={pagination.total_pages}
              page={page}
              onChange={handleChangePage}
            />
          </Box>
        </Box>
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

export default MatchList
