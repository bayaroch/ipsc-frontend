import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainLayout from '@components/layout/MainLayout'
import { postsActions } from '@store/posts/postsActions'
import { AppState } from '@store/store'
import Intro from '@containers/Intro'
/*
 * Homepage
 */
const HomePage = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state: AppState) =>
    state.posts ? state.posts.posts : []
  )
  console.log('posts', posts)

  useEffect(() => {
    dispatch(postsActions.GetAllPost())
    return () => {}
  }, [])
  return (
    <MainLayout isBanner={true}>
      <Intro />
      <div className="container"></div>
    </MainLayout>
  )
}

export default HomePage
