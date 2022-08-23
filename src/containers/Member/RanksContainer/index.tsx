import { useEffect } from 'react'
import { Box, TableCell, Typography, TableRow } from '@mui/material/'
import _ from 'lodash'
import useRanks from './useRanks'
import { CombinedItem } from '@services/match.services'
import PaperTable from '@components/common/PaperTable'
import Link from 'next/link'
import { Colors } from '@theme/colors'

export enum FORM_ACTION_TYPE {
  CREATE = 1,
  UPDATE = 2,
}

const RanksContainer: React.FC = () => {
  const { meta, list, ranks } = useRanks()

  useEffect(() => {
    ranks()
  }, [])

  // eslint-disable-next-line no-console
  console.log(list)

  const renderRow = (data: CombinedItem, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell>
          <Link passHref href={`/member/profile/${data[0]}`}>
            <Typography
              sx={{
                cursor: 'pointer',
                fontWeight: 600,
                color: Colors.primary,
                '&:hover': {
                  color: Colors.grey[100],
                },
              }}
            >
              {data[1]}
            </Typography>
          </Link>
        </TableCell>
        <TableCell>{data[2]}</TableCell>
        <TableCell>{data[3]}</TableCell>
      </TableRow>
    )
  }

  const renderList = () => {
    if (meta.loaded && !meta.pending && !_.isEmpty(list)) {
      return (
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
                <TableCell align="center">Нэр</TableCell>
                <TableCell align="center">RP</TableCell>
                <TableCell align="center">Тэмцээний тоо</TableCell>
              </TableRow>
            </>
          }
          renderRow={renderRow}
          data={list}
        />
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
      {renderLoader()}
      {renderList()}
    </Box>
  )
}

export default RanksContainer
