import MainLayout from '@components/layout/MainLayout'
import Featured from '@containers/Featured'
import Products from '@containers/Featured/products'
import Intro from '@containers/Intro'

/*
 * Homepage
 */
const HomePage: React.FC = () => {
  return (
    <MainLayout isBanner={true}>
      <Intro />
      <Featured />
      <Products />
    </MainLayout>
  )
}

export default HomePage
