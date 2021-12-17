import SideBarMenu from '@components/common/SideBarMenu'
import { allproducts } from '@constants/featured.course'
import { Grid, Box, Typography } from '@mui/material/'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from '@mui/material/AccordionDetails'

const BeginnerCourseContainer: React.FC = () => {
  return (
    <>
      <Grid container>
        <Grid md={9} sm={12} xs={12} item>
          <Box sx={{ paddingRight: '50px', paddingBottom: '100px' }}>
            <div className="content">
              <p>
                <span>Сургалтын нэр: </span>
                <strong>Онлайн сургалт</strong> (Нас харгалзахгүй)
              </p>
              <p>
                <span>Хамрах хүрээ: </span>
                Практик буудлагын спортыг сонирхогч, гишүүнчлэлийн сургалтанд
                хамрагдахаар сургалтаа хүлээж буй анхлан суралцагчид
              </p>
              <p>
                <span>Сургалтын хугацаа: </span>
                <strong>4 цаг </strong>(Онлайн хичээл)
              </p>
              <p>
                <span>Анги дүүргэлт: </span>
                <span>
                  <strong>–</strong>
                </span>
              </p>
              <span>Онлайн сургалт: </span>
              Сургалтанд хамрагдсанаар практик буудлагын спортын анхан шатны
              дүрэм, онолын мэдлэгтэй болох бөгөөд үргэлжлүүлэн{' '}
              <a href="/course1/">гишүүнчлэлийн сургалт</a> болон{' '}
              <a href="/junior/" rel="noreferrer noopener">
                жуниор хөтөлбөрт
              </a>{' '}
              хамрагдах эрх нээгдэх юм.{' '}
              <p>
                <span>Сургалтын төлбөр:</span> <strong>85,000₮</strong> (Хэрэв
                онлайн сургалтын дараа үргэлжлүүлэн хичээллэхийг хүсвэл дээрх 2
                сургалтын төлбөрөөс энэхүү сургалтын төлбөрийн дүнг хасч
                тооцуулах боломжтой.)
              </p>
              <p>
                <span>Сургалтын төлбөрийг 100%</span> шилжүүлж сургалтын видео
                хичээлийг агуулсан хаалттай групп-д нэвтэрч, хичээлүүдээ үзэж
                танилцах болно.
              </p>
              <p>
                <span>Сургалтын бүртгэл:</span> Доорх Google Forms платформыг
                ашиглан бүртгүүлнэ.
              </p>
              <Accordion>
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
                    src="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc9Z1AV8uBRk7ocX1kvpf8j5priTg3QAC3kSGpIouXdmdR0yg/formResponse?embedded=true"
                    frameBorder="0"
                    width="100%"
                    height="1800"
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

export default BeginnerCourseContainer
