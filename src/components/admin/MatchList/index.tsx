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
  Tab,
  Tabs,
} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import { MatchPaginationMeta, MatchPageMeta } from '@services/match.services'
import _ from 'lodash'
import { MATCH_STATUS_TEXT } from '@constants/common.constants'
import { Meta } from '@store/metadata/actions/types'
import moment from 'moment'
import Link from 'next/link'
import { Colors } from '@theme/colors'
import { GroupedMatchListItem } from '@store/match/selectors/helpers'
import TableActions from './TableActions'

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
      {value === index && <Box component={Paper}>{children}</Box>}
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
    if (!meta.loaded && meta.pending && !meta.error && list === undefined) {
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
        <Box>
          <Tabs
            value={value}
            className={classes.tabRoot}
            onChange={handleChange}
            textColor="primary"
            TabIndicatorProps={{
              style: { display: 'none' },
            }}
          >
            {list.map((g, i) => {
              return <Tab disableRipple label={g.groupTitle} key={i} />
            })}
          </Tabs>
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
                          <TableRow key={row.id}>
                            <TableCell scope="row">
                              <Link passHref href={`/member/matches/${row.id}`}>
                                <a className={classes.link}>{row.name}</a>
                              </Link>
                            </TableCell>
                            <TableCell align="right">
                              {moment(row.match_start).format(
                                'YYYY-MM-DD HH:mm:ss'
                              )}
                            </TableCell>
                            <TableCell align="right">{row.lvl}</TableCell>
                            <TableCell align="right">{row.tax}</TableCell>
                            <TableCell align="right">
                              {
                                _.filter(MATCH_STATUS_TEXT, function (o) {
                                  return o.id === row.status
                                })[0].value
                              }
                            </TableCell>
                            <TableCell align="right">
                              <TableActions
                                onEdit={onEditClick}
                                onDelete={onDelete}
                                onEditSquad={onEditSquad}
                                data={row.id}
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
  tabRoot: {
    // '& .MuiTab-textColorPrimary.Mui-selected': {
    //   backgroundColor: '#fff',
    //   borderTopLeftRadius: 6,
    //   borderTopRightRadius: 6,
    //   borderBottom: '0 none',
    // },
    // '& .MuiTabs-flexContainer': {},
    // '& .MuiTab-textColorPrimary': {
    //   borderTopLeftRadius: 6,
    //   borderTopRightRadius: 6,
    //   marginRight: 10,
    //   background: '#eee',
    //   position: 'relative',
    //   bottom: -4,
    //   boxShadow:
    //     '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    // },
  },
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
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  editBtn: {
    cursor: 'pointer',
  },
})

export default MatchList
