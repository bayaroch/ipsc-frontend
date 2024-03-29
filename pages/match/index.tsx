import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import ContentHeader from '@components/elements/ContentHeader'
import { Box } from '@mui/material/'
import PublicMatchListContainer from '@containers/PublicMatchListContainer'

const PublicList: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={'Тэмцээн'} />
      <ContentWrapper topSpace={true}>
        <Box>
          <PublicMatchListContainer />
        </Box>
      </ContentWrapper>
    </MainLayout>
  )
}

export default PublicList
