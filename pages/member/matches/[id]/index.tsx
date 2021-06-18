import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import { useRouter } from 'next/router'
import MatchDetail from '@containers/Member/MatchDetail'
import ContentBox from '@components/admin/ContentBox'

const MatchEdit: PageWithLayoutType = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <AdminLayout title={'Тэмцээн'}>
      <ContentBox>
        <MatchDetail id={id as string} />
      </ContentBox>
    </AdminLayout>
  )
}

export default MatchEdit
