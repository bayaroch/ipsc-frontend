import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import MatchMemberListContainer from '@containers/Member/MatchMemberListContainer'
import ContentBox from '@components/admin/ContentBox'

const Matches: PageWithLayoutType = () => {
  return (
    <AdminLayout>
      <ContentBox>
        <MatchMemberListContainer />
      </ContentBox>
    </AdminLayout>
  )
}

export default Matches
