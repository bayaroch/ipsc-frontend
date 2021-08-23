import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import ClubContainer from '@containers/Pages/ClubContainer'

const AboutUs: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentWrapper topSpace={true}>
        <ClubContainer />
      </ContentWrapper>
    </MainLayout>
  )
}

export default AboutUs
