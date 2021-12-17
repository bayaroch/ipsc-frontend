import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import SideBarMenu from '@components/common/SideBarMenu'
import { Grid, Box, Typography } from '@mui/material/'
import { rulescontent } from '@constants/rules.constants'
import { Colors } from '@theme/colors'

const Rules: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentWrapper topSpace={true}>
        <>
          <Grid container>
            <Grid md={12} sm={12} xs={12} item>
              <div className="content">
                <Typography
                  variant="h1"
                  sx={{
                    marginTop: '50px',
                    marginBottom: '100px',
                    textAlign: 'center',
                  }}
                >
                  Cпортын дүрэм
                </Typography>
                <Box style={{ maxWidth: 800, margin: '0 auto' }}>
                  <SideBarMenu title="" data={rulescontent} />
                  <a
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      color: Colors.black,
                      fontWeight: 700,
                      marginBottom: 10,
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.ipsc.org/pdf/RulesAir.pdf"
                  >
                    ОУ-д мөрдөгдөж байгаа Action Air Rules
                  </a>
                  <a
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      color: Colors.black,
                      fontWeight: 700,
                      marginBottom: 100,
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/document/d/1h3iHMYfxkgEWept6B7WBXdsKbYDSN54mm8Pg19sekRk/edit?usp=sharing"
                  >
                    Орчуулагдаж байгаа Action Air Rules (Батлагдаагүй)
                  </a>
                </Box>
              </div>
            </Grid>
          </Grid>
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default Rules
