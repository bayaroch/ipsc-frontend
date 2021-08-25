import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import IntroCourseContainer from '@containers/Pages/IntroCourseContainer'
import ContentHeader from '@components/elements/ContentHeader'

const Course0: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={'Танилцах сургалт'} />
      <ContentWrapper topSpace={true}>
        <>
          <IntroCourseContainer />
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default Course0
