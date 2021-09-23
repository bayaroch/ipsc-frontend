import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import ClubMembersContainer from '@containers/Member/ClubMembersContainer'
import ContentBox from '@components/admin/ContentBox'

const List: PageWithLayoutType = () => {
  return (
    <AdminLayout>
      <ContentBox>
        <ClubMembersContainer />
      </ContentBox>
    </AdminLayout>
  )
}

export default List
