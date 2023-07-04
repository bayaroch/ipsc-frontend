import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import ContentHeader from '@components/elements/ContentHeader'
import { Grid, Box } from '@mui/material/'
import SideBarMenu from '@components/common/SideBarMenu'
import { allproducts } from '@constants/featured.course'
import HTMLParser from '@components/common/HtmlParser'
import { useEffect } from 'react'
import useWordpress from '@utils/hooks/useWordpress'

const Online: PageWithLayoutType = () => {
  const { data, fetchPage } = useWordpress()

  useEffect(() => {
    fetchPage('3118')
  }, [])

  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={data && data.title} />
      <ContentWrapper topSpace={true}>
        <>
          <Grid container>
            <Grid md={9} sm={12} xs={12} item>
              <Box
                sx={{
                  paddingRight: { sm: 0, lg: '50px', md: '50px' },
                  paddingBottom: '100px',
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

export default Online
