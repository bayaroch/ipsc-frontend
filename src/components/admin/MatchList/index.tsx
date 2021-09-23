import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableHead,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Paper,
  Box,
  Avatar,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import { MatchPaginationMeta, MatchPageMeta } from '@services/match.services'
import _ from 'lodash'
import { Meta } from '@store/metadata/actions/types'
import Link from 'next/link'
import { Colors } from '@theme/colors'
import { GroupedMatchListItem } from '@store/match/selectors/helpers'
import TableActions from './TableActions'
import { colorConstants } from '@components/member/MatchCardItem'
import { red } from '@material-ui/core/colors'
import { helper } from '@utils/helpers/common.helper'
import {
  Visibility,
  Block,
  CheckCircleOutlined,
  Restore,
} from '@material-ui/icons'
import { StyledTableRow } from '@components/admin/MemberList'

export interface MatchListProps {
  getList: (params: MatchPageMeta) => void
  list: GroupedMatchListItem[]
  pagination: MatchPaginationMeta
  onEditClick: (id: number) => void
  onEditSquad: (id: number) => void
  meta: Meta
  onDelete: (id: number) => void
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
  } = props
  const classes = useStyles()
  const [page, setPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(defaultPerPage)

  const [value, setValue] = React.useState(0)

  const handleChange = (_event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue)
  }

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
        <Box className={classes.loaderBox}>
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
              className={classes.tabRoot}
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
                      className={classes.table}
                      aria-label="custom pagination table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>Нэр</TableCell>
                          <TableCell align="right">Эхлэх өдөр</TableCell>
                          <TableCell align="right">Түвшин</TableCell>
                          <TableCell align="right">Tax</TableCell>
                          <TableCell align="right">Төлөв</TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {g.data.map((row) => (
                          <StyledTableRow key={row.id}>
                            <TableCell scope="row">
                              <Link passHref href={`/member/matches/${row.id}`}>
                                <a className={classes.link}>{row.name}</a>
                              </Link>
                              <Typography noWrap className={classes.desc}>
                                {row.additional_info}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography
                                className={classes.date}
                                component={'body'}
                              >
                                {' '}
                                {helper.matchDate(
                                  row.match_start,
                                  row.match_end
                                )}{' '}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Avatar
                                aria-label="recipe"
                                className={classes.avatar}
                                style={{ background: colorConstants[row.lvl] }}
                              >
                                <Box style={{ fontSize: 8, paddingBottom: 0 }}>
                                  lvl
                                </Box>
                                <Typography
                                  variant="h2"
                                  className={classes.lvl}
                                >
                                  {row.lvl}
                                </Typography>
                              </Avatar>
                            </TableCell>
                            <TableCell align="right">
                              <Typography
                                className={classes.currency}
                                component={'body'}
                              >
                                {helper.currency(row.tax)}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Box className={classes.statusIcon}>
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
                                data={row.id}
                              />
                            </TableCell>
                          </StyledTableRow>
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
          <Box display="flex" className={classes.pagination}>
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

const useStyles = makeStyles({
  statusIcon: {
    fontSize: 12,
  },
  desc: {
    fontSize: 12,
    maxWidth: 140,
    color: '#999',
  },
  tabRoot: {
    '& .MuiTabs-flexContainer': { borderBottom: '1px solid #eee' },
    '& .MuiTab-textColorPrimary': {
      fontSize: 12,
      fontWeight: 600,
    },
  },
  currency: {
    fontWeight: 600,
  },
  date: {
    fontWeight: 600,
    fontSize: 12,
  },
  link: {
    color: Colors.grey[100],
    fontWeight: 600,
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
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  avatar: {
    flexDirection: 'column',
    background: red[100],
    width: 30,
    height: 30,
  },
  lvl: {
    fontSize: 14,
  },
  editBtn: {
    cursor: 'pointer',
  },
})

export default MatchList
