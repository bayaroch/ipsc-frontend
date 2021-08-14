import ContentBox from '@components/admin/ContentBox'
import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import MatchCreateContainer from '@containers/Admin/MatchCreateContainer'

const MatchCreate: PageWithLayoutType = () => {
  return (
    <AdminLayout>
      <ContentBox>
        <MatchCreateContainer />
      </ContentBox>
    </AdminLayout>
  )
}

export default MatchCreate
