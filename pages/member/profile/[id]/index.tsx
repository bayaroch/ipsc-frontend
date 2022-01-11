import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import ProfileDetailContainer from '@containers/Member/ProfileDetailContainer'
import { useRouter } from 'next/router'

const MatchEdit: PageWithLayoutType = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <AdminLayout>
      <ProfileDetailContainer id={id as string} />
    </AdminLayout>
  )
}

export default MatchEdit
