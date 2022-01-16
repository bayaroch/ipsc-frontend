import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import { useRouter } from 'next/router'
import MatchDetailContainer from '@containers/Member/MatchDetailContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { initProfile } from '@store/account/actions'
import { user } from '@store/auth/selectors'

const MatchEdit: PageWithLayoutType = () => {
  const router = useRouter()
  const { id } = router.query
  const userData = useSelector(user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (userData && userData.id) dispatch(initProfile(userData.id))
  }, [])

  return (
    <AdminLayout>
      {id && userData && (
        <MatchDetailContainer userData={userData} id={id as string} />
      )}
    </AdminLayout>
  )
}

export default MatchEdit
