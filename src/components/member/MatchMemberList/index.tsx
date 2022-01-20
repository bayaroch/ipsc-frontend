import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material/'
import Pagination from '@mui/material//Pagination'
import { MatchPaginationMeta, MatchPageMeta } from '@services/match.services'
import _ from 'lodash'
import { Meta } from '@store/metadata/actions/types'
import { GroupedMatchListItem } from '@store/match/selectors/helpers'
import MatchListItem from '@components/common/MatchListItem'
import CustomList from '@components/common/List'
import { MatchItem } from '@store/match/actions/types'
import { UserData } from '@services/auth.services'

export interface MatchListProps {
  getList: (params: MatchPageMeta) => void
  list: GroupedMatchListItem[]
  pagination: MatchPaginationMeta
  onEditClick: (id: number) => void
  meta: Meta
  currentUser: UserData
}

const defaultPerPage = 100

const MatchList: React.FC<MatchListProps> = (props) => {
  const { getList, list, pagination, meta, currentUser } = props
  const [page, setPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(defaultPerPage)

  // useEffect(() => {
  //   getList({
  //     page: page,
  //     per_page: rowsPerPage,
  //     sort_order: 'DESC',
  //     sort_column: 'match_start',
  //   })
  // }, [])

  useEffect(() => {
    getList({
      page: page,
      per_page: rowsPerPage,
      sort_order: 'DESC',
      sort_column: 'match_start',
    })
  }, [page])

  useEffect(() => {
    if (pagination && pagination.total_objects < rowsPerPage) {
      setRowsPerPage(pagination.total_objects)
    }
  }, [pagination])

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

  const renderRow = (item: MatchItem) => {
    return <MatchListItem key={item.id} item={item} user={currentUser} />
  }

  const renderList = () => {
    if (!_.isEmpty(list) && meta.loaded && !meta.error && !meta.pending) {
      return (
        <Box>
          {list.map((g, i) => {
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
          })}

          {pagination ? (
            <Pagination
              count={pagination.total_pages}
              page={page}
              sx={{
                position: 'relative',
                justifyContent: 'space-between',
                padding: 5,
                width: '100%',
                '& .MuiPagination-ul': {
                  width: '100%',
                  justifyContent: 'center',
                },
              }}
              onChange={handleChangePage}
            />
          ) : null}
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
