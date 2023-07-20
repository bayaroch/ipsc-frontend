import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import ContentHeader from '@components/elements/ContentHeader'
import SideBarMenu from '@components/common/SideBarMenu'
import { allproducts } from '@constants/featured.course'
import HTMLParser from '@components/common/HtmlParser'
import { Box, Grid } from '@mui/material/'
import useWordpress from '@utils/hooks/useWordpress'
import { useEffect } from 'react'

const Junior: PageWithLayoutType = () => {
  const { data, fetchPage } = useWordpress()

  useEffect(() => {
    fetchPage('3204')
  }, [])

  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={data && data.title} />
      <ContentWrapper topSpace={true}>
        <>
          <Grid container maxWidth={'xl'}>
            <Grid md={9} sm={12} xs={12} item>
              <Box
                sx={{
                  paddingRight: { lg: '50px', md: '50px', sm: 0, xs: 0 },
                  paddingBottom: {
                    lg: '100px',
                    md: '100px',
                    sm: '20px',
                    xs: '20px',
                  },
                  textAlign: { sm: 'justify', xs: 'justify' },
                }}
              >
                <div className="content">
                  {data && <HTMLParser html={data.content} />}
                </div>
              </Box>
            </Grid>
            <Grid md={3} sm={12} xs={12} item>
              <SideBarMenu title="Сургалтууд" data={allproducts} />
            </Grid>
          </Grid>
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default Junior
