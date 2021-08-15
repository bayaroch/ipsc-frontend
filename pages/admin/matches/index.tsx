import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import MatchListContainer from '@containers/Admin/MatchListContainer'
import ContentBox from '@components/admin/ContentBox'

const Matches: PageWithLayoutType = () => {
  return (
    <AdminLayout>
      <ContentBox>
        <MatchListContainer />
      </ContentBox>
    </AdminLayout>
  )
}

export default Matches
