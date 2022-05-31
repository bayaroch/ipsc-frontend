import SideBarMenu from '@components/common/SideBarMenu'
import { allproducts } from '@constants/featured.course'
import { Grid, Box, Typography } from '@mui/material/'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from '@mui/material/AccordionDetails'
import HTMLParser from '@components/common/HtmlParser'

const BeginnerCourseContainer: React.FC = () => {
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
              <HTMLParser
                html={`<p>
                <h6>ГИШҮҮНЧЛЭЛИЙН СУРГАЛТ</h6> (Насанд хүрэгчид)
              </p>
              <p>Сургалтын нэр: Гишүүнчлэлийн сургалт (Насанд хүрэгчид)</p>
              <p>
                Хамрах хүрээ: Экшн Эйр Клубын гишүүнээр элсэж, практик буудлагын
                спортын хийн гар бууны төрлөөр тууштай хичээллэхээр шийдсэн,
                хангалттай хэмжээнд тухайн спорт, төрлийн тухай уншиж судласан
                18-с дээш насны Монгол улсын иргэн хамрагдах боломжтой.&nbsp;
              </p>
              <p>Сургалтын хугацаа: 1 сар (3-4 долоо хоног)</p>
              <p>Анги дүүргэлт: 4-5 суралцагч</p>
              <p>
                Онлайн сургалт: Практик сургалт эхлэхээс өмнө анги бүрдэх
                хүртэлх хугацаанд бүх суралцагчид онлайн сургалтанд хамрагдан
                дүрэм, онолын хичээлийг үзэж судласан байх шаардлагатай.
                Гишүүнчлэлийн сургалтын төлбөрт онлайн сургалтын төлбөр багтсан
                болно.
              </p>
              <h6>СУРГАЛТЫН ТӨЛБӨР</h6>

              <p>
                450,000₮ (Сургалтын төлбөрт хэрэгслийн үнэ багтаагүй бөгөөд
                практик сургалтанд ирэхдээ хувийн хэрэгсэлтэй болсон байх
                шаардлагатай, хэрэв байхгүй бол түрээсээр ашиглах боломжтой.
                Ямар хэрэгсэл хаанаас худалдан авах, ямар үнэ ханштай, анхлан
                суралцагчид аль загвар нь тохиромжтой талаар та онлайн
                сургалтаас мэдэж авах боломжтой.)
              </p>
              <p>
                Сургалтын төлбөрийн 50% шилжүүлж бүртгэлээ баталгаажуулах бөгөөд
                бүртгэл баталгаажсан суралцагчийг онлайн сургалтанд хамруулж
                анги бүрдэх хүртэл түр хүлээнэ. Анги бүрдсэн тохиолдолд
                хичээллэх цагийг харилцан тохирч 3-4 долоо хоногийн турш нийт 24
                цагийн сургалтыг 6-8 хоногт багтаан авч гишүүнчлэлийн шалгалт
                өгөх эрх нээгдэнэ.&nbsp;
              </p>


              <h6>ГИШҮҮНЧЛЭЛИЙН ШАЛГАЛТ </h6>

              <p>
                Гишүүнчлэлийн шалгалт нь суралцагчийг практик буудлагын спортын
                дүрмийн мэдлэг, аюулгүй ажиллагаа хангах дадал зуршил, сэтгэл
                зүйн тогтвортой байдлыг шалгах зорилготой бөгөөд суралцагч нь
                шалгалтыг 2 сарын хугацаанд багтааж клубээс зохион байгуулагдаж
                буй 3 удаагийн тэмцээнд дарааллан хасагдахгүй дуусгасан
                тохиолдолд тэнцсэнд тооцож гишүүнчлэлийн эрх нээгдэнэ. (Ямар
                тохиолдолд тэмцээнээс хасагдах тухай ОУПБХ-ны тэмцээний дүрмийн
                10-р бүлэгт заасан байдаг.)&nbsp;
              </p>

              <h6>ЗЭВСЭГ ТҮРЭЭС</h6>

              <p>
                Зэвсэг түрээсийн үнэ нэг өдрийн тэмцээн уралдаанд оролцоход сум,
                газны хамт 50,000-60,000₮ байдаг бол зөвхөн гишүүнчлэлийн
                сургалтын үед сум, газ дагалдахгүйгээр нэг өдрийн түрээсийн
                төлбөр 30,000₮ (Glock 17 загвар) 40,000₮ (CZ Shadow 2 загвар)
                байна.&nbsp;
              </p>

              <h6>ХУВЦАСЛАЛТ</h6>

              <p>
                Практик буудлагын спортын дүрэмд өнгөлөн далдлалтын буюу
                camouflage өнгийн эрээн алаг хувцас өмсөхийг хориглодог учир
                цулгуй өнгийн хувцаслалттай сургалтанд хүрэлцэн ирнэ үү.
              </p>
              <p>
                Мөн сольж өмсөх цэвэр ултай заалны пүүз, биед эвтэйхэн бүс зүүж
                болдог түдүүлтэй өмд эсвэл шорт ашиглана. Эмэгтэй суралцагчдын
                хувьд гар бууны спорт загварын гэр ашиглаж байгаа тохиолдолд
                түдүүл ашиглахгүйгээр бүсээ ташаандаа тогтоож ашиглах боломжтой.
              </p>

              <h6>ХАЛДВАР ХАМГААЛАЛ, АЮУЛГҮЙ БАЙДАЛ</h6>
              <p>
                Сургалтын талбайд байх хугацаандаа маскийг тогтмол зүүх ба солих
                маск, гар ариутгагч зэргийг бэлдэж ирнэ. Ханиалгатай болон
                халуурсан, ядарч, дархлаа суларсан үедээ сургалтын зааланд
                хүрэлцэн ирэхгүй байна уу.&nbsp;
              </p>
              <p>
                Сургалтын дунд 1 өдрийн хичээл тасалдсан тохиолдолд түүнийг
                нөхөх боломжтой, 2 өдрийн хичээл тасалдсан тохиолдолд нөхөх
                боломжгүй бөгөөд энэ тохиолдолд дараагийн ангируу шилжүүлж
                хичээллэсэн өдрийн төлбөрийг суутган тооцох болно. Тиймээс та
                бусад ажлуудаа сайтар төлөвлөн сургалтын группээ сонгоно уу.
              </p>

              <h6>БҮРДҮҮЛЭХ МАТЕРИАЛ</h6>

              <table className="table is-fullwidth is-striped is-bordered">
                <tbody>
                  <tr>
                    <td>Баримт бичгийн нэр</td>
                    <td>Тайлбар</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Гишүүнчлэлийн анкет, сургалтын анкет, аюулгүй
                        ажиллагааны баталгаа
                      </strong>
                    </td>
                    <td>Сургалтанд хамрагдах үедээ бөглөж өгнө</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>4% Цээж зураг</strong> + Файлаар илгээх
                    </td>
                    <td>3*4 хэмжээтэй, цагаан дэвсгэртэй байх</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Иргэний үнэмлэхний цахим лавлагаа</strong>
                    </td>
                    <td>ТҮЦ машин эсвэл e-mongolia.mn</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Оршин суугаа хаягын лавлагаа</strong>
                    </td>
                    <td>ТҮЦ машин эсвэл e-mongolia.mn </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Галт зэвсэг ашиглахад харшлах өвчин, гэмтэл, согогийн
                        жагсаалтад заасан өвчин, эмгэггүйг тодорхойлсон эрүүл
                        мэндийн хуудас
                      </strong>
                    </td>
                    <td>
                      А-33 маягтыг өөрийн харьяа дүүргийн эмнэлэгээс авч, үзлэгт
                      хамрагдан тамгалуулсан байх
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Цусны бүлэг тодорхойлуулсан магадлагаа</strong>{' '}
                      (ABO, RH)
                    </td>
                    <td>
                      Цусны эрүүл мэндийн төв эсхүл өөр бусад эмнэлэгийн
                      тодорхойлолт
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Сургалтын үлдэгдэл төлбөр</strong>
                    </td>
                    <td>
                      Сургалтын үлдэгдэл төлбөрийг практик сургалтын эхний өдөр
                      төлсөн байна.
                    </td>
                  </tr>
                </tbody>
              </table>`}
              />
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
                    src="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfEnh6dDR2eRoaXt_A0VgloGBa8we5DVJtajhsw3KZghs7amw/formResponse?embedded=true"
                    frameBorder="0"
                    width="100%"
                    height="2848"
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
