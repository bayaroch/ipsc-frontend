import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import ContentBox from '@components/admin/ContentBox'
import { useSelector } from 'react-redux'
import { user } from '@store/auth/selectors'
import dynamic from 'next/dynamic'

const MatchListContainer = dynamic(() =>
  import('@containers/Member/MatchMemberListContainer')
)

const Matches: PageWithLayoutType = () => {
  const userData = useSelector(user)

  return (
    <AdminLayout>
      <ContentBox>
        <MatchListContainer currentUser={userData} />
      </ContentBox>
    </AdminLayout>
  )
}

export default Matches
