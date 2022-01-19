import { isAuth } from '@store/auth/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { commonData } from '@store/support/actions'

const ToastContainer: React.FC = () => {
  const dispatch = useDispatch()
  const auth = useSelector(isAuth)
  useEffect(() => {
    if (auth) {
      dispatch(commonData())
    }
  }, [auth])
  return <></>
}

export default ToastContainer
