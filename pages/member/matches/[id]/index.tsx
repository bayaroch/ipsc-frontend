import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import { useRouter } from 'next/router'
import MatchDetailContainer from '@containers/Member/MatchDetailContainer'

const MatchEdit: PageWithLayoutType = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <AdminLayout>
      <MatchDetailContainer id={id as string} />
    </AdminLayout>
  )
}

export default MatchEdit
