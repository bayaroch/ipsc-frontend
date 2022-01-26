import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import { useRouter } from 'next/router'
import ContentBox from '@components/admin/ContentBox'
import ConfirmContainer from '@containers/Admin/ConfirmContainer'

const ConfirmPage: PageWithLayoutType = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <AdminLayout>
      <ContentBox>
        <ConfirmContainer id={id as string} />
      </ContentBox>
    </AdminLayout>
  )
}

export default ConfirmPage
