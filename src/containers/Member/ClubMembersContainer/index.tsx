import { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material/'
import useAccount from '@containers/Admin/MemberListContainer/useAccount'
import MemberCard from '@components/member/MemberCard'
import Pagination from '@mui/material//Pagination'
import _ from 'lodash'
import Link from 'next/link'

export enum FORM_ACTION_TYPE {
  CREATE = 1,
  UPDATE = 2,
}

const defaultPerPage = 100

const ClubMembersContainer: React.FC = () => {
  const [page, setPage] = useState<number>(1)
  const [rowsPerPage] = useState<number>(defaultPerPage)
  const { getList, groupList, paginationMeta, support, meta } = useAccount()

  useEffect(() => {
    getList({ page: page, per_page: rowsPerPage })
  }, [page, rowsPerPage])

  const handleChangePage = (
    _event: any,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage)
  }

  const renderLoader = () => {
    if (!meta.loaded && meta.pending && !meta.error && _.isEmpty(groupList)) {
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
    if (!_.isEmpty(groupList) && support) {
      return (
        <Box>
          {groupList.map((g, i) => {
            return (
              <Box sx={{ marginBottom: '20px' }} key={i}>
                <Typography
                  sx={{ paddingBottom: '30px' }}
                  variant="h2"
                  component="h2"
                  align="center"
                >
                  {g.title}
                </Typography>
                <Grid container spacing={3}>
                  {!_.isEmpty(g.data) &&
                    g.data.map((item, index) => {
                      return (
                        <Grid
                          key={index}
                          item
                          xs={12}
                          sm={12}
                          md={4}
                          lg={3}
                          xl={3}
                        >
                          <Link
                            href={`/member/profile/[id]`}
                            as={`/member/profile/${item.id}`}
                            passHref
                          >
                            <Box sx={{ cursor: 'pointer' }}>
                              <MemberCard support={support} item={item} />
                            </Box>
                          </Link>
                        </Grid>
                      )
                    })}
                </Grid>
              </Box>
            )
          })}
          {paginationMeta ? (
            <Pagination
              count={paginationMeta.total_pages}
              page={page}
              sx={{
                position: 'relative',
                justifyContent: 'space-between',
                padding: 1,
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
    <Box>
      {renderList()}
      {renderLoader()}
    </Box>
  )
}

export default ClubMembersContainer
