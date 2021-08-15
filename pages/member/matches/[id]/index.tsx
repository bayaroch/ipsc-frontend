import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import { useRouter } from 'next/router'
import MatchDetail from '@containers/Member/MatchDetail'

const MatchEdit: PageWithLayoutType = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <AdminLayout>
      <MatchDetail id={id as string} />
    </AdminLayout>
  )
}

export default MatchEdit
