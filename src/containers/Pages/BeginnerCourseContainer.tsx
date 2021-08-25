import SideBarMenu from '@components/common/SideBarMenu'
import { allproducts } from '@constants/featured.course'
import { makeStyles, Grid, Box, Typography, Theme } from '@material-ui/core/'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccordionDetails from '@material-ui/core/AccordionDetails'

const BeginnerCourseContainer: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container>
        <Grid md={9} sm={12} xs={12} item>
          <Box className={classes.innerContent}>
            <div className="content">
              <p>
                <span>Сургалтын нэр: </span>
                <strong>Гишүүнчлэлийн сургалт</strong> (Насанд хүрэгчид)
              </p>
              <p>
                <span>Хамрах хүрээ: </span>
                Экшн Эйр Клубын гишүүнээр элсэж, практик буудлагын спортын хийн
                гар бууны төрлөөр тууштай хичээллэхээр шийдсэн, хангалттай
                хэмжээнд тухайн спорт, төрлийн тухай уншиж судласан{' '}
                <strong>18-с дээш насны</strong> Монгол улсын иргэн
              </p>

              <p>
                <span>Сургалтын хугацаа: </span>
                <strong>1 сар</strong> (4 долоо хоног)
              </p>

              <p>
                <span>Анги дүүргэлт: </span>
                <span>
                  <strong>4 суралцагч</strong>
                </span>
              </p>
              <table className="table is-fullwidth is-striped is-bordered">
                <tbody>
                  <tr>
                    <td>
                      <strong>Ангиуд</strong>
                    </td>
                    <td>
                      <strong>Бямба</strong>
                    </td>
                    <td>
                      <strong>Ням</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Өглөөний анги</td>
                    <td>08:00 &#8211; 11:00</td>
                    <td>08:00 &#8211; 11:00</td>
                  </tr>
                  <tr>
                    <td>Өдрийн анги</td>
                    <td>12:00 &#8211; 15:00</td>
                    <td>12:00 &#8211; 15:00</td>
                  </tr>
                  <tr>
                    <td>Оройн анги</td>
                    <td>16:00 &#8211; 19:00</td>
                    <td>16:00 &#8211; 19:00</td>
                  </tr>
                </tbody>
              </table>
              <p>
                <em>
                  Жич: 4 суралцагчийн хүсэлтээр ажлын өдрийн анги нэмж үүсгэх
                  боломжтой.
                </em>
              </p>

              <p>
                <span>Онлайн сургалт: </span>
                Практик сургалт эхлэхээс өмнө анги бүрдэх хүртэлх хугацаанд бүх
                суралцагчид{' '}
                <span>
                  <a href="/online" target="_blank" rel="noreferrer noopener">
                    онлайн сургалт
                  </a>
                </span>
                анд хамрагдан 4 цагийн дүрэм, онолын хичээлийг үзэж судласан
                байх шаардлагатай. Гишүүнчлэлийн сургалтын төлбөрт онлайн
                сургалтын төлбөр багтсан болно.
              </p>

              <p>
                <span>Сургалтын төлбөр:</span> <strong>384,000₮</strong>
                (Сургалтын төлбөрт 85,000₮ төлбөртэй{' '}
                <a rel="noreferrer noopener" href="/online" target="_blank">
                  онлайн сургалт
                </a>
                багтсан, гишүүнчлэлийн сургалтыг төгсөөд клубын гишүүнээр элсэн
                тогтмол хичээллэж эхлэхэд эхний 3 сарын гишүүнчлэлийн хураамж
                30% чөлөөлөгдөнө, энэ нь нийт 135,000₮ хөнгөлөлт байдаг.
                Сургалтын төлбөрт хэрэгслийн үнэ багтаагүй бөгөөд практик
                сургалтанд ирэхдээ хувийн хэрэгсэлтэй болсон байх шаардлагатай,
                хэрэв сургалтын үеээр түрээслэн ашиглах бол нэг өдрийн 30,000₮
                байна. Ямар хэрэгсэл хаанаас худалдан авах, ямар үнэ ханштай,
                анхлан суралцагчид аль загвар нь тохиромжтой талаар та онлайн
                сургалтаас мэдэж авах боломжтой.)
              </p>

              <p>
                <span>Сургалтын төлбөрийн 50%</span>
                шилжүүлж бүртгэлээ баталгаажуулах бөгөөд бүртгэл баталгаажсан
                суралцагчийг 4 цагийн{' '}
                <a href="/online" target="_blank" rel="noreferrer noopener">
                  онлайн сургалт
                </a>
                анд хамруулж бүртгүүлсэн анги нь бүрдэх хүртэл түр хүлээнэ. Анги
                бүрдсэн долоо хоногийнхоо Бямба гарагаас эхлэн тасралтгүй 4
                долоо хоногийн турш нийт 24 цагийн сургалтыг авч 5 дахь долоо
                хоногтоо 2 цагийн хугацаанд аюулгүй ажиллагааны шалгалт өгч
                тэнцсэн тохиолдолд клубын гишүүнээр элсэж, клубын тэмцээнд
                оролцох, инструкторын хяналтан дор хувийн бэлтгэл хийх эрх
                үүснэ.
              </p>

              <p>
                <span>Аюулгүй ажиллагааны шалгалт</span>
                нь суралцагчийг анхан шатны аюулгүй ажиллагаа хангахуйц буудагч
                болсон эсэхийг шалгах зорилготой бөгөөд суралцагч нь шалгалтын
                үеээр ОУПБХ-ны тэмцээний дүрмийн 10-р бүлэгт заасан аюулгүй
                ажиллагааг зөрчсөн тохиолдолд шалгалтанд унасанд тооцно.
                Суралцагч нь 2 удаа элсэлтийн шалгалтыг үнэ төлбөргүй давтан
                өгөх эрхтэй бөгөөд, нийт 3 удаа унасан тохиолдолд давтан сургалт
                анд хамрагдана.
              </p>

              <p>
                <span>Бүрдүүлэх материал:</span>
              </p>

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
              </table>

              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    className={classes.heading}
                    variant="h3"
                    component="div"
                  >
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

const useStyles = makeStyles((theme: Theme) => ({
  innerContent: {
    paddingRight: 50,
    paddingBottom: 100,
  },
  root: {
    width: '100%',
  },
  heading: {},
  accordion: {
    marginTop: 20,
    marginBottom: 20,
  },
  [theme.breakpoints.down('sm')]: {
    innerContent: {
      paddingRight: 0,
      paddingBottom: 20,
      textAlign: 'justify',
    },
  },
}))

export default BeginnerCourseContainer
