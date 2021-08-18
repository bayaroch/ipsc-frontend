import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import AboutContainer from '@containers/Pages/AboutContainer'

const AboutAASC: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <AboutContainer />
    </MainLayout>
  )
}

export default AboutAASC
