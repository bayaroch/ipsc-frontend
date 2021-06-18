import { makeStyles, Box } from '@material-ui/core/'
import useMatch from './useMatch'
import MatchList from '@components/admin/MatchList'
import { useRouter } from 'next/router'

const MatchListContainer: React.FC = () => {
  const classes = useStyles()
  const { getList, list, paginationMeta, meta } = useMatch()
  const router = useRouter()

  const handleEdit = (id: number) => {
    router.push(`/admin/matches/edit/${id}`)
  }

  return (
    <Box>
      <Box className={classes.topControl}></Box>
      <MatchList
        onEditClick={handleEdit}
        meta={meta}
        list={list}
        getList={getList}
        pagination={paginationMeta}
      />
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  root: {},
  topControl: {
    paddingBottom: 10,
    justifyContent: 'flex-end',
    display: 'flex',
  },
}))

export default MatchListContainer
