import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import ContentHeader from '@components/elements/ContentHeader'
import { Typography } from '@material-ui/core'

const Group: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={'Группын сургалт'} />
      <ContentWrapper topSpace={true}>
        <>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Тун удахгүй...
            <br />
          </Typography>
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default Group
