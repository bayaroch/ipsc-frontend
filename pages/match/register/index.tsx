import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import ContentHeader from '@components/elements/ContentHeader'
import { useRouter } from 'next/router'
import { Box } from '@mui/material'

const MatchDetail: PageWithLayoutType = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={'Тэмцээний бүртгэл'} />
      <ContentWrapper topSpace={true}>
        <>
          <Box>Under development {id}</Box>
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default MatchDetail
