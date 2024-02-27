import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import MatchTypeListContainer from '@containers/Admin/MatchTypeListContainer'
import ContentBox from '@components/admin/ContentBox'

const MatchTypes: PageWithLayoutType = () => {
  return (
    <AdminLayout>
      <ContentBox>
        <MatchTypeListContainer />
      </ContentBox>
    </AdminLayout>
  )
}

export default MatchTypes
