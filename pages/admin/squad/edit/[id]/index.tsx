import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import { useRouter } from 'next/router'
import ContentBox from '@components/admin/ContentBox'

const MatchEdit: PageWithLayoutType = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <AdminLayout title={'Edit Squad'}>
      <ContentBox>{id}</ContentBox>
    </AdminLayout>
  )
}

export default MatchEdit
