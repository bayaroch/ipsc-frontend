import { Box, Typography } from '@mui/material/'
import usePublicMatch from './usePublicMatch'
import { useEffect } from 'react'
import { BasicLoader } from '@components/common/Loader'
import CustomList from '@components/common/List'
import MatchListItem from '@components/common/MatchListItem'
import { MatchItem } from '@store/match/actions/types'

const PublicMatchListContainer: React.FC = () => {
  const { getList, meta, groupedList } = usePublicMatch()

  const renderRow = (item: MatchItem) => {
    return (
      <MatchListItem href={`/match/${item.id}`} key={item.id} item={item} />
    )
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <Box>
      <BasicLoader meta={meta} />
      {!meta.pending && meta.loaded && groupedList
        ? groupedList.map((g, i) => {
            return (
              <Box key={i}>
                <Typography
                  sx={{ padding: '20px 0 30px 0' }}
                  variant="h2"
                  component="h2"
                  align="center"
                >
                  {g.groupTitle}
                </Typography>
                <Box>
                  <CustomList data={g.data} renderRow={renderRow} />
                </Box>
              </Box>
            )
          })
        : null}
    </Box>
  )
}

export default PublicMatchListContainer
