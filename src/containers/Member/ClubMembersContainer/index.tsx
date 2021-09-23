import { useEffect, useState } from 'react'
import { makeStyles, Box, Grid, Typography } from '@material-ui/core/'
import useAccount from '@containers/Admin/MemberListContainer/useAccount'
import MemberCard from '@components/member/MemberCard'
import Pagination from '@material-ui/lab/Pagination'
import _ from 'lodash'

export enum FORM_ACTION_TYPE {
  CREATE = 1,
  UPDATE = 2,
}

const defaultPerPage = 100

const ClubMembersContainer: React.FC = () => {
  const [page, setPage] = useState<number>(1)
  const [rowsPerPage] = useState<number>(defaultPerPage)
  const classes = useStyles()
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
        <Box className={classes.loaderBox}>
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
              <Box className={classes.section} key={i}>
                <Typography
                  className={classes.sectionTitle}
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
                          <MemberCard support={support} item={item} />
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
    <Box>
      {renderList()}
      {renderLoader()}
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  loaderBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
  section: { marginBottom: 20 },
  topControl: {
    paddingBottom: 10,
    justifyContent: 'flex-end',
    display: 'flex',
  },
  sectionTitle: {
    paddingBottom: 30,
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
}))

export default ClubMembersContainer
