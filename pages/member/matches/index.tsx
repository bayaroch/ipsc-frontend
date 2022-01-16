import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import MatchListContainer from '@containers/Member/MatchMemberListContainer'
import ContentBox from '@components/admin/ContentBox'
import { useSelector } from 'react-redux'
import { user } from '@store/auth/selectors'

const Matches: PageWithLayoutType = () => {
  const userData = useSelector(user)

  return (
    <AdminLayout>
      <ContentBox>
        {userData && <MatchListContainer currentUser={userData} />}
      </ContentBox>
    </AdminLayout>
  )
}

export default Matches
