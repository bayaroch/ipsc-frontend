import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Typography } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import { MatchPaginationMeta, MatchPageMeta } from '@services/match.services'
import _ from 'lodash'
import { Meta } from '@store/metadata/actions/types'
import MatchCardItem from '../MatchCardItem'
import { useRouter } from 'next/router'
import { GroupedMatchListItem } from '@store/match/selectors/helpers'

export interface MatchListProps {
  getList: (params: MatchPageMeta) => void
  list: GroupedMatchListItem[]
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
  const router = useRouter()

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
          <Box className="dot-flashing" />
        </Box>
      )
    }
    return null
  }

  const handleDetail = (id: number) => {
    router.push(`/member/matches/${id}`)
  }

  const renderList = () => {
    if (!_.isEmpty(list) && meta.loaded && !meta.error && !meta.pending) {
      return (
        <Box>
          {list.map((g, i) => {
            return (
              <Box key={i}>
                <Typography
                  className={classes.sectionTitle}
                  variant="h2"
                  component="h2"
                  align="center"
                >
                  {g.groupTitle}
                </Typography>
                <Grid container spacing={3}>
                  {g.data.map((item, index) => {
                    return (
                      <Grid
                        key={index}
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        xl={3}
                      >
                        <Box>
                          <MatchCardItem onClick={handleDetail} item={item} />
                        </Box>
                      </Grid>
                    )
                  })}
                </Grid>
              </Box>
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
  sectionTitle: {
    padding: '20px 0 30px 0',
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
