import MainLayout from '@components/layout/MainLayout'
import Featured from '@containers/Featured'
import Intro from '@containers/Intro'
/*
 * Homepage
 */
const HomePage = () => {
  return (
    <MainLayout isBanner={true}>
      <Intro />
      <Featured />
      <div className="container"></div>
    </MainLayout>
  )
}

export default HomePage
