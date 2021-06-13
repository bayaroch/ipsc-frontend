import { useSelector } from 'react-redux'
import { isAuth } from '@store/auth/selectors'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useAuth = () => {
  const router = useRouter()
  const isLoggedIn = useSelector(isAuth)

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login/')
    }
  }, [isLoggedIn])

  return { isAuth }
}

export default useAuth
