import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import MatchListContainer from '@containers/Admin/MatchListContainer'

const Matches: PageWithLayoutType = () => {
  return (
    <AdminLayout title="Matches">
      <MatchListContainer />
    </AdminLayout>
  )
}

export default Matches
