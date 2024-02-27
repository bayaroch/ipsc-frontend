import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import DivisionListContainer from '@containers/Admin/DivisionListContainer'
import ContentBox from '@components/admin/ContentBox'

const Divisions: PageWithLayoutType = () => {
  return (
    <AdminLayout>
      <ContentBox>
        <DivisionListContainer />
      </ContentBox>
    </AdminLayout>
  )
}

export default Divisions
