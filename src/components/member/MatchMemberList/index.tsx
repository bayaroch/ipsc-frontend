import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, CircularProgress, Grid } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import { MatchPaginationMeta, MatchPageMeta } from '@services/match.services'
import { MatchItem } from '@store/match/actions/types'
import _ from 'lodash'
import { Meta } from '@store/metadata/actions/types'
import MatchCardItem from '../MatchCardItem'

export interface MatchListProps {
  getList: (params: MatchPageMeta) => void
  list: MatchItem[]
  pagination: MatchPaginationMeta
  onEditClick: (id: number) => void
  meta: Meta
}

const defaultPerPage = 100

const MatchList: React.FC<MatchListProps> = (props) => {
  const { getList, list, pagination, meta } = props
  const classes = useStyles()
  const [page, setPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(defaultPerPage)

  useEffect(() => {
    getList({
      page: page,
      per_page: rowsPerPage,
      sort_order: 'DESC',
      sort_column: 'match_start',
    })
  }, [])

  useEffect(() => {
    getList({
      page: page,
      per_page: rowsPerPage,
      sort_order: 'DESC',
      sort_column: 'match_start',
    })
  }, [page, rowsPerPage])

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
        <Box className={classes.loaderBox}>
          <CircularProgress className={classes.loader} />
        </Box>
      )
    }
    return null
  }

  const renderList = () => {
    if (!_.isEmpty(list) && meta.loaded && !meta.error && !meta.pending) {
      return (
        <Grid container spacing={3}>
          {list.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box key={index}>
                  <MatchCardItem item={item} />
                </Box>
              </Grid>
            )
          })}
          {pagination ? (
            <Pagination
              count={pagination.total_pages}
              page={page}
              className={classes.pagination}
              onChange={handleChangePage}
            />
          ) : null}
        </Grid>
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
    justifyContent: 'space-between',
    padding: 5,
    width: '100%',
    '& .MuiPagination-ul': {
      width: '100%',
      justifyContent: 'center',
    },
  },
})

export default MatchList
