import ContentBox from '@components/admin/ContentBox'
import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import ProfileDetailContainer from '@containers/Member/ProfileDetailContainer'
import { useRouter } from 'next/router'

const MatchEdit: PageWithLayoutType = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <AdminLayout>
      <ContentBox>
        <ProfileDetailContainer id={id as string} />
      </ContentBox>
    </AdminLayout>
  )
}

export default MatchEdit
