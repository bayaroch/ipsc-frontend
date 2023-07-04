import SideBarMenu from '@components/common/SideBarMenu'
import { allproducts } from '@constants/featured.course'
import { Grid, Box } from '@mui/material/'
// import Accordion from '@mui/material/Accordion'
// import AccordionSummary from '@mui/material/AccordionSummary'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import AccordionDetails from '@mui/material/AccordionDetails'
import HTMLParser from '@components/common/HtmlParser'
import useWordpress from '@utils/hooks/useWordpress'
import { useEffect } from 'react'

const BeginnerCourseContainer: React.FC = () => {
  const { data, fetchPage } = useWordpress()

  useEffect(() => {
    fetchPage('3092')
  }, [])

  // eslint-disable-next-line no-console
  console.log(data)

  return (
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
              {/* <Accordion sx={{ marginTop: '20px', marginBottom: '20px' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h3" component="div">
                    Бүртгүүлэх
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfEnh6dDR2eRoaXt_A0VgloGBa8we5DVJtajhsw3KZghs7amw/formResponse?embedded=true"
                    frameBorder="0"
                    width="100%"
                    height="2848"
                    marginHeight={0}
                    marginWidth={0}
                    allowFullScreen={true}
                  ></iframe>
                </AccordionDetails>
              </Accordion> */}
            </div>
          </Box>
        </Grid>
        <Grid md={3} sm={12} xs={12} item>
          <SideBarMenu title="Сургалтууд" data={allproducts} />
        </Grid>
      </Grid>
    </>
  )
}

export default BeginnerCourseContainer
