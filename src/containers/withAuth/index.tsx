/* eslint-disable @typescript-eslint/ban-types */
import { isAuth, memberType, user } from '@store/auth/selectors'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { USER_TYPE } from '@constants/user.constants'

export function withAuth<T>(Component: React.ComponentType<T>): React.FC {
  const AppWithAuth: React.FC<any> = (props) => {
    const isLoggedIn = useSelector(isAuth)
    const userType: USER_TYPE = useSelector(memberType)
    const router = useRouter()
    const [render, setRender] = useState(false)
    const url = router.pathname
    const currentUser = useSelector(user)

    useEffect(() => {
      if (isLoggedIn) {
        if (url.includes('/admin') && userType !== USER_TYPE.USER_ADMIN) {
          router.push('/member/matches')
        }
        setRender(true)
      } else {
        setRender(false)
        router.push('/login')
      }
    }, [isLoggedIn])

    if (!render) {
      return null
    }
    return <Component currentUser={currentUser} {...props} />
  }

  return AppWithAuth
}

export default withAuth
