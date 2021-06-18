import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import MatchListContainer from '@containers/Admin/MatchListContainer'
import ContentBox from '@components/admin/ContentBox'

const Matches: PageWithLayoutType = () => {
  return (
    <AdminLayout title="Тэмцээний жагсаалт">
      <ContentBox>
        <MatchListContainer />
      </ContentBox>
    </AdminLayout>
  )
}

export default Matches
