import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import BeginnerCourseContainer from '@containers/Pages/BeginnerCourseContainer'
import ContentHeader from '@components/elements/ContentHeader'

const Course1: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={'Гишүүнчлэлийн сургалт'} />
      <ContentWrapper topSpace={true}>
        <>
          <BeginnerCourseContainer />
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default Course1
