import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import CourseContainer from '@containers/Pages/CourseContainer'

const Courses: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentWrapper topSpace={true}>
        <CourseContainer />
      </ContentWrapper>
    </MainLayout>
  )
}

export default Courses
