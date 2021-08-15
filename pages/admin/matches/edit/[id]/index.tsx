import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import { useRouter } from 'next/router'
import MatchUpdateContainer from '@containers/Admin/MatchUpdateContainer'
import ContentBox from '@components/admin/ContentBox'

const MatchEdit: PageWithLayoutType = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <AdminLayout>
      <ContentBox>
        <MatchUpdateContainer id={id as string} />
      </ContentBox>
    </AdminLayout>
  )
}

export default MatchEdit
