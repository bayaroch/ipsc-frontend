import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import SideBarMenu from '@components/common/SideBarMenu'
import { Grid, Box, Typography, makeStyles } from '@material-ui/core'
import { rulescontent } from '@constants/rules.constants'
import { Colors } from '@theme/colors'

const Rules: PageWithLayoutType = () => {
  const classes = useStyles()
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentWrapper topSpace={true}>
        <>
          <Grid container>
            <Grid md={12} sm={12} xs={12} item>
              <div className="content">
                <Typography variant="h1" className={classes.title}>
                  Cпортын дүрэм
                </Typography>
                <Box style={{ maxWidth: 800, margin: '0 auto' }}>
                  <SideBarMenu title="" data={rulescontent} />
                  <a
                    className={classes.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.ipsc.org/pdf/RulesAir.pdf"
                  >
                    ОУ-д мөрдөгдөж байгаа Action Air Rules
                  </a>
                  <a
                    className={classes.link}
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

const useStyles = makeStyles(() => ({
  title: {
    marginTop: 50,
    marginBottom: 100,
    textAlign: 'center',
  },
  link: {
    display: 'block',
    textAlign: 'center',
    color: Colors.black,
    fontWeight: 700,
    marginBottom: 10,
    '&:hover': {
      color: Colors.primary,
    },
  },
}))

export default Rules
