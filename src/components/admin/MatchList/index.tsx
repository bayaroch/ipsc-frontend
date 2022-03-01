import React, { useEffect, useState } from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Paper,
  Box,
  Tab,
  Tabs,
  Typography,
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

const defaultPerPage = 20

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

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

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Paper square>{children}</Paper>}
    </div>
  )
}

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

  const [value, setValue] = React.useState(0)

  const handleChange = (_event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue)
  }

  useEffect(() => {
    getList({ page: page, per_page: rowsPerPage })
  }, [page])

  useEffect(() => {
    if (pagination && pagination.total_objects < rowsPerPage) {
      setRowsPerPage(pagination.total_objects)
    }
  }, [pagination])

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
          <Paper square>
            <Tabs
              value={value}
              sx={{
                '& .MuiTabs-flexContainer': { borderBottom: '1px solid #eee' },
                '& .MuiTab-textColorPrimary': {
                  fontSize: 12,
                  fontWeight: 600,
                },
              }}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
            >
              {list.map((g, i) => {
                return <Tab disableRipple label={g.groupTitle} key={i} />
              })}
            </Tabs>
          </Paper>
          {list.map((g, i) => {
            return (
              <TabPanel value={value} index={i} key={i}>
                <Box>
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
                </Box>
              </TabPanel>
            )
          })}
          <Box
            display="flex"
            sx={{
              position: 'relative',
              justifyContent: 'center',
              padding: 20,
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
