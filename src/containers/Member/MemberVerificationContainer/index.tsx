import { Box } from '@mui/material/'
import useMemberVerification from './useMemberVerification'
import MemberVerification from '@components/member/MemberVerification'
import { useRouter } from 'next/router'
import { UserData } from '@services/auth.services'

interface MatchMemberListContainerProps {
  currentUser: UserData
}

const MemberVerificationContainer: React.FC<MatchMemberListContainerProps> = ({
  currentUser,
}) => {
  const { getList, paginationMeta, meta, groupedList } = useMemberVerification()
  const router = useRouter()

  const handleEdit = (id: number) => {
    router.push(`/admin/matches/edit/${id}`)
  }

  return (
    <Box>
      <MemberVerification
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

export default MemberVerificationContainer
