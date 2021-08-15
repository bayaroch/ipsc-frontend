import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import { useRouter } from 'next/router'
import ContentBox from '@components/admin/ContentBox'
import SquadJoinContainer from '@containers/Member/SquadJoinContainer'

const MatchEdit: PageWithLayoutType = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <AdminLayout>
      <ContentBox>
        <SquadJoinContainer id={id as string} />
      </ContentBox>
    </AdminLayout>
  )
}

export default MatchEdit
