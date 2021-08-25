import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import OnlineCourseContainer from '@containers/Pages/OnlineCourseContainer'
import ContentHeader from '@components/elements/ContentHeader'

const Online: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={'Онлайн сургалт'} />
      <ContentWrapper topSpace={true}>
        <>
          <OnlineCourseContainer />
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default Online
