import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import ContentHeader from '@components/elements/ContentHeader'
import { Box } from '@mui/material/'
import HTMLParser from '@components/common/HtmlParser'
import useWordpress from '@utils/hooks/useWordpress'
import { useEffect } from 'react'

const ContactUs: PageWithLayoutType = () => {
  const { data, fetchPage } = useWordpress()

  useEffect(() => {
    fetchPage('3147')
  }, [])

  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={data && data.title} />
      <ContentWrapper>
        <Box pt={3}>
          <div className="content">
            {data && <HTMLParser html={data.content} />}
          </div>
        </Box>
      </ContentWrapper>
    </MainLayout>
  )
}

export default ContactUs
