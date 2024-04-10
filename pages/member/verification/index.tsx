import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import ContentBox from '@components/admin/ContentBox'
import { useSelector } from 'react-redux'
import { user } from '@store/auth/selectors'
import dynamic from 'next/dynamic'

const MemberVerificationContainer = dynamic(() =>
  import('@containers/Member/MemberVerificationContainer')
)

const Verification: PageWithLayoutType = () => {
  const userData = useSelector(user)

  return (
    <AdminLayout>
      <ContentBox>
        <MemberVerificationContainer currentUser={userData} />
      </ContentBox>
    </AdminLayout>
  )
}

export default Verification
