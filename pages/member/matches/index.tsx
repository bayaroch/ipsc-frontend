import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import MemberListContainer from '@containers/Admin/MemberListContainer'
import ContentBox from '@components/admin/ContentBox'

const Matches: PageWithLayoutType = () => {
  return (
    <AdminLayout>
      <ContentBox>
        <MemberListContainer />
      </ContentBox>
    </AdminLayout>
  )
}

export default Matches
