import { ReactNode, useEffect, useState } from 'react'
import {
  Box,
  TableCell,
  TableRow,
  IconButton,
  Stack,
  Typography,
  Paper,
  Tabs,
  Tab,
  BoxProps
} from '@mui/material/'
import _ from 'lodash'
import useRanks from './useRanks'
import { CombinedItem } from '@services/match.services'
import PaperTable from '@components/common/PaperTable'
import {
  ArrowDownward,
  ArrowUpward,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Visibility,
} from '@mui/icons-material'
import { helper } from '@utils/helpers/common.helper'
import moment from 'moment'
import MatchScorePopup from './MatchScorePopup'
import Link from 'next/link'
import { Colors } from '@theme/colors'

interface TabPanelProps extends BoxProps {
  value: number
  index: number
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const ExpandableTableRow = ({
  children,
  expandData,
  renderRowExpand,
  ...otherProps
}: {
  expandData: any[]
  renderRowExpand: (data: CombinedItem, index: number) => void
  children: ReactNode
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <TableRow {...otherProps} sx={{ borderBottom: '2px solid #ddd' }}>
        <TableCell padding="checkbox">
          <IconButton
            sx={{
              height: 30,
              width: 30,
              '&:hover': {
                background: 'none',
              },
            }}
            disableFocusRipple
            disableRipple
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>

      {isExpanded && (
        <TableRow sx={{ background: '#eee' }}>
          <TableCell></TableCell>
          <TableCell>
            <Typography variant="body2" sx={{ color: '#111', fontWeight: 600 }}>
              Division
            </Typography>
          </TableCell>
          <TableCell colSpan={2}>
            <Typography variant="body2" sx={{ color: '#111', fontWeight: 600 }}>
              Тэмцээний нэр
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body2" sx={{ color: '#111', fontWeight: 600 }}>
              Тэмцээний огноо
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body2" sx={{ color: '#111', fontWeight: 600 }}>
              Match RP
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body2" sx={{ color: '#111', fontWeight: 600 }}>
              Дэлгэрэнгүй
            </Typography>
          </TableCell>
        </TableRow>
      )}
      {isExpanded &&
        expandData.map((item: CombinedItem, index: number) =>
          renderRowExpand(item, index)
        )}
    </>
  )
}

const RanksContainer: React.FC = () => {
  const {
    meta,
    list,
    ranks,
    divisions,
    detail,
    scoreFiltered,
    classes,
    getDetail,
  } = useRanks()
  const [filter, setMatchId] = useState<{
    match_id: number
    user_id: number
    division_id: number
  } | null>(null)

  const [value, setValue] = useState<number>(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue)
  }

  useEffect(() => {
    ranks()
  }, [])

  const toFixedIfNecessary = (value: string, dp: number) => {
    return +parseFloat(value).toFixed(dp)
  }

  useEffect(() => {
    if (filter) getDetail(String(filter.match_id))
  }, [filter])

  const renderPercent = (value: number) => {
    if (value >= 0) {
      {
        return (
          <Box sx={{ color: value >= 0 ? 'green' : 'red' }}>
            <Box component={'span'}>
              <ArrowUpward sx={{ color: 'green', fontSize: 10 }} />
            </Box>
            {value} %
          </Box>
        )
      }
      return
    } else if (value < 0) {
      return (
        <Box sx={{ color: value >= 0 ? 'green' : 'red' }}>
          <Box component={'span'}>
            <ArrowDownward sx={{ color: 'red', fontSize: 10 }} />
          </Box>
          {value} %
        </Box>
      )
    } else return ''
  }

  const renderRow = (item: any, index: number) => {
    const renderRowExpand = (data: CombinedItem, index: number) => {
      const previous =
        index + 1 === item.data.length ? data.rp : item.data[index + 1].rp

      const percentchange =
        index + 1 === item.data.length
          ? ''
          : previous === 0
          ? ''
          : Math.round(((data.rp - previous) / previous) * 100)

      // eslint-disable-next-line no-console
      console.log(Number(data.rp) - Number(previous), Number(previous), data.rp)
      return (
        <TableRow sx={{ background: '#fff' }} key={index}>
          <TableCell></TableCell>
          <TableCell>
            {_.get(
              helper.groupTitleHelper(data.division_id, divisions),
              'shorthand',
              ''
            )}
          </TableCell>
          <TableCell colSpan={2}>
            <Link href={`/member/matches/${data.match_id}`} passHref>
              <Typography
                sx={{ fontWeight: 600, cursor: 'pointer' }}
              >{`${data.match_name}`}</Typography>
            </Link>
          </TableCell>
          <TableCell>{`${moment(data.match_end).format(
            'YYYY-MM-DD'
          )}`}</TableCell>
          <TableCell>
            <Stack direction={'row'} sx={{ width: '100%' }} spacing={1}>
              <Box sx={{ fontWeight: 600 }}>{`${toFixedIfNecessary(
                data.rp.toString(),
                2
              )}`}</Box>
              <Box>
                {percentchange === '' ? '' : renderPercent(percentchange)}
              </Box>
            </Stack>
          </TableCell>
          <TableCell>
            <IconButton
              size="small"
              onClick={() =>
                setMatchId({
                  match_id: data.match_id,
                  user_id: data.user_id,
                  division_id: data.division_id,
                })
              }
            >
              <Visibility />
            </IconButton>
          </TableCell>
        </TableRow>
      )
    }

    return (
      <ExpandableTableRow
        key={index}
        expandData={item.data}
        renderRowExpand={renderRowExpand}
      >
        <TableCell>
          <Typography component={'span'} align="center" sx={{ color: '#111' }}>
            #{index + 1}
          </Typography>
        </TableCell>
        <TableCell>
          <Box>
            <Link href={`/member/profile/${item.data[0].user_id}`} passHref>
              <Typography
                sx={{
                  fontWeight: '600',
                  color: Colors.primary,
                  cursor: 'pointer',
                }}
              >
                {`${item.data[0].lastname}. ${item.data[0].firstname}`}
              </Typography>
            </Link>
          </Box>
        </TableCell>
        <TableCell colSpan={2}></TableCell>
        <TableCell>
          <Typography sx={{ fontWeight: '600' }}>
            {toFixedIfNecessary(item.total.toString(), 2)}
          </Typography>
        </TableCell>
        <TableCell colSpan={2}>{item.count}</TableCell>
      </ExpandableTableRow>
    )
  }

  const renderList = () => {
    if (meta.loaded && !meta.pending && !_.isEmpty(list)) {
      return (
        <Paper sx={{ padding: 0 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Handgun" {...a11yProps(0)} />
              <Tab label="Rifle" {...a11yProps(1)} />
              <Tab label="PCC" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <PaperTable
              tableProps={{
                sx: {
                  minWidth: 1100,
                  '& .MuiTableCell-root': {
                    p: 1,
                    borderLeft: '1px solid rgba(224, 224, 224, 1)',
                    maxWidth: 90,
                    fontSize: 13,
                  },
                },
              }}
              head={
                <>
                  <TableRow>
                    <TableCell sx={{ width: 50 }} align="center"></TableCell>
                    <TableCell sx={{ width: 80 }} align="center"></TableCell>
                    <TableCell sx={{ maxWidth: 120, minWidth: 120 }} align="center">
                      Нэр
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ maxWidth: 100, minWidth: 100 }}
                      colSpan={2}
                    >
                      Gender Rank
                    </TableCell>
                    <TableCell align="center">RP</TableCell>
                    <TableCell
                      sx={{ maxWidth: 80, minWidth: 80 }}
                      align="center"
                      colSpan={2}
                    >
                      Тэмцээний тоо
                    </TableCell>
                  </TableRow>
                </>
              }
              renderRow={renderRow}
              data={list}
            />
          </TabPanel>
          {value === 1 ? (
            <TabPanel value={value} index={1}>
              <Box
                alignItems="center"
                justifyContent="center"
                display="flex"
                minHeight={450}
              >
                No Data
              </Box>
            </TabPanel>
          ) : (
            <></>
          )}
          {value === 2 ? (
            <TabPanel value={value} index={2}>
              <Box
                alignItems="center"
                justifyContent="center"
                display="flex"
                minHeight={450}
              >
                No Data
              </Box>
            </TabPanel>
          ) : (
            <></>
          )}
        </Paper>
      )
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

  return (
    <Box>
      {detail ? (
        <MatchScorePopup
          detail={detail}
          handleClose={() => setMatchId(null)}
          open={filter}
          data={scoreFiltered}
          divisions={divisions}
          classData={classes}
        />
      ) : null}

      {renderLoader()}
      {renderList()}
    </Box>
  )
}

export default RanksContainer
