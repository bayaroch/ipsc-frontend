import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import ContentHeader from '@components/elements/ContentHeader'
import { Box } from '@mui/material/'

const Online: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={'Тэмцээний бүртгэл'} />
      <ContentWrapper topSpace={true}>
        <Box>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScEhdACn9JQf-MJp5Xq0WJzOulVo2oOwisWbsEaz0XUAoza7g/viewform?embedded=true"
            frameBorder="0"
            width="100%"
            style={{ height: 3000 }}
            marginHeight={0}
            marginWidth={0}
            allowFullScreen={true}
          ></iframe>
        </Box>
      </ContentWrapper>
    </MainLayout>
  )
}

export default Online
