import { Box } from '@material-ui/core/'
import useMemberMatch from './useMemberMatch'
import MatchMemberList from '@components/member/MatchMemberList'
import { useRouter } from 'next/router'

const MatchMemberListContainer: React.FC = () => {
  const { getList, paginationMeta, meta, groupedList } = useMemberMatch()
  const router = useRouter()

  const handleEdit = (id: number) => {
    router.push(`/admin/matches/edit/${id}`)
  }

  return (
    <Box>
      <MatchMemberList
        onEditClick={handleEdit}
        meta={meta}
        list={groupedList}
        getList={getList}
        pagination={paginationMeta}
      />
    </Box>
  )
}

export default MatchMemberListContainer
