import { ReactNode, useEffect, useState } from 'react'
import { Box } from '@mui/material/'
import _ from 'lodash'
import useRanks from './useRanks'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { SupportItem } from '@services/support.services'
import { useRouter } from 'next/router'
import { GroupedRankItem } from '@store/match/selectors/helpers'
import PaperTable from '@components/common/PaperTable'
import {
  TableRow,
  TableCell,
  IconButton,
  Stack,
  Paper,
  Typography,
} from '@mui/material'
import CustomAvatar from '@components/common/Avatar'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import {
  Chart,
  ArgumentAxis,
  Tooltip,
  CommonSeriesSettings,
  Series,
  Legend,
  Margin,
  Grid,
} from 'devextreme-react/chart'
import Link from 'next/link'
import { useConfirm } from 'material-ui-confirm'

export enum FORM_ACTION_TYPE {
  CREATE = 1,
  UPDATE = 2,
}

const ExpandableTableRow = ({
  children,
  expandComponent,
  ...otherProps
}: {
  expandComponent: ReactNode
  children: ReactNode
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <TableRow {...otherProps}>
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
        <TableRow sx={{ background: '#efefef', position: 'relative' }}>
          <TableCell />
          {expandComponent}
        </TableRow>
      )}
    </>
  )
}

const RanksContainer: React.FC = () => {
  const { meta, list, ranks, divisions } = useRanks()
  const [value, setValue] = useState(1)
  const router = useRouter()
  const { id } = router.query
  const confirm = useConfirm()

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    router.push(`/member/ranks?id=${newValue}`)
  }

  useEffect(() => {
    router.push(`/member/ranks?id=${value}`)
  }, [])

  useEffect(() => {
    if (id) ranks()
  }, [id])

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

  const renderRow = (data: GroupedRankItem) => {
    const total = _.sumBy(data.data, (o) => o.rp)
    const chartData = _.map(data.data, (d) => {
      return {
        match: `${d.match_id}`,
        rp: d.rp,
        id: d.match_id,
      }
    })
    const energySources = [{ value: 'rp', name: 'Rank Point' }]

    const contentToolTip = (info: any) => {
      // eslint-disable-next-line no-console
      return (
        <Box>
          <Typography>RankPoints: {info.value}</Typography>
          <Typography>Match ID: {info.argument}</Typography>
        </Box>
      )
    }

    const handleSeriesClick = (info: any) => {
      // eslint-disable-next-line no-console
      confirm({
        title: 'Тэмцээний дэлгэрэнгүй мэдээлэл',
        description: `${info.argument} id- тай тэмцээний дэлгэрэнгүй хуудасруу үсрэх`,
        confirmationText: 'Тийм',
        cancellationText: 'Үгүй',
      })
        .then(() => router.push(`/member/matches/${info.argument}`))
        .catch(() => null)
    }

    return (
      <ExpandableTableRow
        key={data.id.id}
        expandComponent={
          <TableCell colSpan={5}>
            <Box sx={{ width: '100%' }}>
              <Paper sx={{ borderRadius: 0, p: 1 }}>
                <Chart
                  dataSource={chartData}
                  onArgumentAxisClick={handleSeriesClick}
                >
                  {energySources.map((item) => (
                    <Series
                      key={item.value}
                      valueField={item.value}
                      name={item.name}
                    />
                  ))}
                  <Margin bottom={20} />
                  <ArgumentAxis
                    valueMarginsEnabled={false}
                    discreteAxisDivisionMode="crossLabels"
                  >
                    <Grid visible={true} />
                  </ArgumentAxis>
                  <Legend
                    verticalAlignment="bottom"
                    horizontalAlignment="center"
                    itemTextPosition="bottom"
                  />
                  <CommonSeriesSettings argumentField="match" type={'line'} />
                  <ArgumentAxis />
                  <Tooltip enabled={true} contentRender={contentToolTip} />
                </Chart>
              </Paper>
            </Box>
          </TableCell>
        }
      >
        <TableCell>{data.id.usercode}</TableCell>
        <TableCell>
          <Stack direction="row" spacing={1} alignItems="center">
            <CustomAvatar alt={data.id.firstname} src={data.id.img_url} />
            <Link href={`/member/profile/${data.id.id}`}>
              <Typography sx={{ cursor: 'pointer' }}>
                {data.id.lastname} {data.id.firstname}
              </Typography>
            </Link>
          </Stack>
        </TableCell>
        <TableCell>{total}</TableCell>
        <TableCell>{data.data.length}</TableCell>
      </ExpandableTableRow>
    )
  }

  const renderList = () => {
    if (!_.isEmpty(list)) {
      return (
        <Box>
          <PaperTable
            renderRow={renderRow}
            data={list}
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
                  <TableCell />
                  <TableCell sx={{ width: 40 }} align="center">
                    ID
                  </TableCell>
                  <TableCell align="center">Нэр</TableCell>
                  <TableCell align="center">Total RP</TableCell>
                  <TableCell align="center">Тэмцээний тоо</TableCell>
                </TableRow>
              </>
            }
          />
        </Box>
      )
    }
    return null
  }

  const renderNavigation = () => {
    if (divisions) {
      return (
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ width: '100%', mb: 2 }}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          {divisions.map((d: SupportItem) => {
            return <Tab disableRipple key={d.id} value={d.id} label={d.name} />
          })}
        </Tabs>
      )
    }
  }

  return (
    <Box>
      {renderNavigation()}
      {renderLoader()}
      {renderList()}
    </Box>
  )
}

export default RanksContainer
