import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MainLayout from '@components/layout/MainLayout'
import { postsActions } from '@store/posts/postsActions'

/*
 * Homepage
 */
const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(postsActions.GetAllPost())
    return () => {}
  }, [])
  return (
    <>
      <div className="container">Login</div>
    </>
  )
}

HomePage.Layout = MainLayout

export default HomePage
