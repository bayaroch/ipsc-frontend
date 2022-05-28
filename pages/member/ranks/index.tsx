import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import ContentBox from '@components/admin/ContentBox'
import RanksContainer from '@containers/Member/RanksContainer'

const Ranks: PageWithLayoutType = () => {
  return (
    <AdminLayout>
      <ContentBox>
        <RanksContainer />
      </ContentBox>
    </AdminLayout>
  )
}

export default Ranks
