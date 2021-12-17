import SideBarMenu from '@components/common/SideBarMenu'
import { allproducts } from '@constants/featured.course'
import { Grid, Box, Typography } from '@mui/material/'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from '@mui/material/AccordionDetails'

const IntroCourseContainer: React.FC = () => {
  return (
    <>
      <Grid container>
        <Grid md={9} sm={12} xs={12} item>
          <Box sx={{ paddingRight: '50px', paddingBottom: '50px' }}>
            <div className="content">
              <ul>
                <li>Сургалтын нэр: Танилцах сургалт</li>
                <li>
                  Хамрах хүрээ: Практик буудлагын спортын сургалтанд хамрагдаж
                  байгаагүй анхлан сонирхогч хувь хүн, найз нөхөд, байгууллага
                  хамт олон
                </li>
                <li>
                  Сургалтын хугацаа: <strong>1 өдөр </strong>(4 цаг)
                </li>
                <li>
                  Сургалтын хэрэгсэл: <strong>Glock 17 Airsoft GBB</strong> гар
                  буу, гар бууны гэр, дайз, дайзны гэр, нүдний шил, буудлагын
                  үед хэрэглэх газ, ВВ сум зэрэг бүх шаардлагатай зүйлсийг
                  манайхаас хэрэглүүлнэ.
                </li>
                <li>
                  Сургалтын төлбөр: <strong>100,000</strong>
                  <strong>₮ </strong>(Хэрэв өөрийн хэрэгсэлтэй бол төлбөр 30%
                  хөнгөлөгдөнө.)
                </li>
                <li>
                  Сургалтын тайлбар: Гишүүнчлэлийн сургалтын өмнөх сургалт
                  бөгөөд энэ сургалтыг алгасан шууд гишүүнчлэлийн сургалтанд
                  хамрагдаж болно. Ердөө танилцах байдлаар туршиж үзэх болон
                  гишүүнчлэлийн сургалтанд хамрагдах эсэхээ шийдэж чадахгүй
                  байгаа бол энэхүү сургалт тохиромжтой.
                </li>
                <li>
                  Сургалтыг төгссөнөөр ямар нэгэн батламж, гэрчилгээ олгохгүй
                  зөвхөн дадлага, туршлага, өнгөцхөн мэдлэгтэй болох болно.
                </li>
                <li>
                  Таныг практик буудлагын спортын мэргэжлийн инструктор багш,
                  талбайн шүүгч нар аюулгүй буудахад туслах болно.
                </li>
              </ul>
              <Accordion sx={{ marginTop: '20px', marginBottom: '20px' }}>
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
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfYX2Ce9Zc8a0rgMPebnptDhLQyMj26l22XaOkPAL4hJL0efQ/viewform?embedded=true"
                    frameBorder="0"
                    width="100%"
                    height="2448"
                    marginHeight={0}
                    marginWidth={0}
                    allowFullScreen={true}
                  ></iframe>
                </AccordionDetails>
              </Accordion>
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

export default IntroCourseContainer
