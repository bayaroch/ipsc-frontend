import { makeStyles, Box } from '@material-ui/core/'
import useMemberMatch from './useMemberMatch'
import MatchMemberList from '@components/member/MatchMemberList'
import { useRouter } from 'next/router'

const MatchMemberListContainer: React.FC = () => {
  const classes = useStyles()
  const { getList, list, paginationMeta, meta } = useMemberMatch()
  const router = useRouter()

  const handleEdit = (id: number) => {
    router.push(`/admin/matches/edit/${id}`)
  }

  return (
    <Box>
      <Box className={classes.topControl}></Box>
      <MatchMemberList
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

export default MatchMemberListContainer
