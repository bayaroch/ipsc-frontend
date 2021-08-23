import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import JuniorContainer from '@containers/Pages/JuniorContainer'
import ContentHeader from '@components/elements/ContentHeader'

const Junior: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={'Жуниор хөтөлбөр'} />
      <ContentWrapper topSpace={true}>
        <>
          <JuniorContainer />
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default Junior
