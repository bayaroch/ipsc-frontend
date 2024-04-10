import { useSelector, useDispatch } from 'react-redux'
import { isAuth, memberType, verificationStatus } from '@store/auth/selectors'
import { logOut } from '@store/auth/actions'
import { MEMBER_TYPE } from '@constants/common.constants'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

export interface returnType {
  isLoggedIn: boolean
  exit: () => void
  usertype: MEMBER_TYPE
  isVerified: boolean
}

const useAuth = (): returnType => {
  const isLoggedIn = useSelector(isAuth)
  const usertype = useSelector(memberType)
  const isVerified = useSelector(verificationStatus)
  const dispatch = useDispatch()
  const exit = () => {
    dispatch(logOut())
  }

  return { isLoggedIn, exit, usertype, isVerified }
}

export default useAuth
