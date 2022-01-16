import { Box } from '@mui/material/'
import useMemberMatch from './useMemberMatch'
import MatchMemberList from '@components/member/MatchMemberList'
import { useRouter } from 'next/router'
import { UserData } from '@services/auth.services'

interface MatchMemberListContainerProps {
  currentUser: UserData
}

const MatchMemberListContainer: React.FC<MatchMemberListContainerProps> = ({
  currentUser,
}) => {
  const { getList, paginationMeta, meta, groupedList } = useMemberMatch()
  const router = useRouter()

  const handleEdit = (id: number) => {
    router.push(`/admin/matches/edit/${id}`)
  }

  return (
    <Box>
      <MatchMemberList
        currentUser={currentUser}
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
