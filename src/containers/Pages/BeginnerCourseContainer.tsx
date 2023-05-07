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
                html={`<!-- wp:paragraph -->
                <p><mark style="background-color:rgba(0,0,0,0)" class="has-inline-color has-luminous-vivid-orange-color">Сургалтын нэр: </mark><strong>Аюулгүй ажиллагааны сургалт</strong> 1-р түвшин (Насанд хүрэгчид)</p>
                <!-- /wp:paragraph -->
                
                <!-- wp:paragraph -->
                <p>Сургалтын төрөл: <strong>IPSC Action Air Handgun</strong> буюу практик буудлагын спортын хийн гар бууны төрөл</p>
                <!-- /wp:paragraph -->
                
                <!-- wp:paragraph -->
                <p><mark style="background-color:rgba(0,0,0,0)" class="has-inline-color has-luminous-vivid-orange-color">Хамрах хүрээ: </mark>Практик буудлагын спортын хийн гар бууны төрлийн анхан шатны мэдлэг, аюулгүй ажиллагааны дүрэм, орчин нөхцөлтэй танилцах, спортын үндсэн техник хөдөлгөөн, хэрэгсэл зэрэгтэй танилцах хүсэлтэй 18 ба түүнээс дээш насны <strong>Монгол Улсын иргэн</strong> хамрагдах боломжтой.</p>
                <!-- /wp:paragraph -->
                
                <!-- wp:paragraph -->
                <p><mark style="background-color:rgba(0,0,0,0)" class="has-inline-color has-luminous-vivid-orange-color">Сургалтын хугацаа: </mark><strong>3 өдөр (9 цаг)</strong></p>
                <!-- /wp:paragraph -->
                
                <!-- wp:paragraph -->
                <p><mark style="background-color:rgba(0,0,0,0)" class="has-inline-color has-luminous-vivid-orange-color">Анги дүүргэлт: </mark><mark style="background-color:rgba(0,0,0,0)" class="has-inline-color has-black-color"><strong>4-5 суралцагч</strong></mark></p>
                <!-- /wp:paragraph -->
                
                <!-- wp:group -->
                <div class="wp-block-group"><!-- wp:table -->
                <figure class="wp-block-table"><table><tbody><tr><td><strong>Ангиуд</strong></td><td><strong>Ажлын өдрийн анги</strong></td><td><strong>Амралтын өдрийн анги</strong></td></tr><tr><td>Даваа</td><td>19:00-22:00</td><td>-</td></tr><tr><td>Лхагва</td><td>19:00-22:00</td><td>-</td></tr><tr><td>Баасан</td><td>19:00-22:00</td><td>-</td></tr><tr><td>Бямба</td><td>-</td><td>19:00-22:00</td></tr><tr><td>Ням</td><td>-</td><td>19:00-22:00</td></tr></tbody></table><figcaption class="wp-element-caption"><em>Жич: 4 суралцагчийн хүсэлтээр ажлын өдрийн анги нэмж үүсгэх боломжтой.</em></figcaption></figure>
                <!-- /wp:table --></div>
                <!-- /wp:group -->
                
                <!-- wp:paragraph -->
                <p>Сургагч багш: <a href="https://ipsc.mn/rules/">МПБХ-ны инструктор</a> буюу практик буудлагын спортын албан ёсоор баталгаажсан сургагч багш нар ажиллана.</p>
                <!-- /wp:paragraph -->
                
                <!-- wp:paragraph -->
                <p><mark style="background-color:rgba(0,0,0,0)" class="has-inline-color has-luminous-vivid-orange-color">Сургалтын төлбөр:</mark> 370,000₮ / 250,000₮</p>
                <!-- /wp:paragraph -->
                
                <!-- wp:paragraph -->
                <p>Сургалтын 3 өдөрт зэвсэг хэрэгслийг клубээс авч ашиглах тохиолдолд 370,000₮, өөрийн хувийн хэрэгсэлтэй суралцах тохиолдолд 250,000₮ байна. Үүнд:</p>
                <!-- /wp:paragraph -->
                
                <!-- wp:list -->
                <ul><!-- wp:list-item -->
                <li>6мм хуванцар үрлэн сумтай Airsoft GBB хийн гар буу, дагалдах дайзын хамт</li>
                <!-- /wp:list-item -->
                
                <!-- wp:list-item -->
                <li>Бууны гэр, дайзны гэр зэргийг багтаасан практик буудлагын ком бүс</li>
                <!-- /wp:list-item -->
                
                <!-- wp:list-item -->
                <li>Нүдний шил (Хэрэв өөрийн хамгаалалтын болон харааны шилтэй бол түүнийгээ ашиглаж болно)</li>
                <!-- /wp:list-item -->
                
                <!-- wp:list-item -->
                <li>500ш BB сум + түүнийг гаргахад шаардлагатай хий (Green Gas)</li>
                <!-- /wp:list-item --></ul>
                <!-- /wp:list -->
                
                <!-- wp:paragraph -->
                <p><mark style="background-color:rgba(0,0,0,0)" class="has-inline-color has-luminous-vivid-orange-color">Сургалтын төлбөрийг 100%</mark> төлж сургалтын хүлээлгийн жагсаалтад орно. Шаардлагатай бичиг баримтуудыг и-мэйлээр илгээж, сургалтын бүртгэл баталгаажна. Бүртгэл баталгаажсан тохиолдолд сургалтын хуваарийг сургалтын бүртгэл хариуцсан ажилтан утсаар холбогдож мэдээлэл хүргэнэ.</p>
                <!-- /wp:paragraph -->
                
                <!-- wp:paragraph -->
                <p><mark style="background-color:rgba(0,0,0,0)" class="has-inline-color has-luminous-vivid-orange-color">Бүрдүүлэх материал:</mark></p>
                <!-- /wp:paragraph -->
                
                <!-- wp:table {"hasFixedLayout":true,"className":"is-style-regular"} -->
                <figure class="wp-block-table is-style-regular"><table class="has-fixed-layout"><tbody><tr><td>Баримт бичгийн нэр</td><td>Тайлбар</td></tr><tr><td><strong>Анкет, аюулгүй ажиллагааны баталгаа</strong></td><td>Сургалтанд хамрагдах үедээ бөглөж өгнө</td></tr><tr><td><strong>4% Цээж зураг</strong> + Файлаар илгээх</td><td>3*4 хэмжээтэй, цагаан дэвсгэртэй байх</td></tr><tr><td><strong>Иргэний үнэмлэхний цахим лавлагаа</strong></td><td>e-mongolia.mn -с татан авч pdf файлаар илгээх</td></tr></tbody></table><figcaption class="wp-element-caption">registration@prime.mn мэйлээр илгээнэ.</figcaption></figure>
                <!-- /wp:table -->
                
                <!-- wp:paragraph -->
                <p>Сургалтыг төгссөнөөр: Энэхүү сургалтанд хамрагдсаж, суурь техникийн шалгалтандаа тэнцсэнээс хойш 3 сарын хугацаанд долоо хоног бүрийн Мягмар, Пүрэв гарагуудад явагдах бэлтгэлд 19:00-22:00 цагийн хооронд өөрийн хувийн хэрэгсэлийг ашиглан бэлтгэл хийх боломж нээгдэх бөгөөд тэмцээнд оролцох болон өөр бусад эрхүүд эдлэхгүй. Бэлтгэлийн тухай <a href="http://www.ipscaa.com/practicenight">энд </a>дарж мэдээлэл авна уу.</p>
                <!-- /wp:paragraph -->
                
                <!-- wp:paragraph -->
                <p>Дараагийн шат: Прайм клубын гишүүнээр элсэж, практик буудлагын спортын хийн гар бууны төрлийн 1-р түвшний тэмцээнд оролцохыг хүсвэл та энэхүү 1-р түвшний сургалтыг төгссөнөөс хойш 3 сарын дотор 2-р түвшний сургалтанд мөн адил 3 өдөр, өдөрт 3 цагаар суралцаж амжилттай төгссөнөөр клубын суралцагч гишүүнээр элсэх юм. Дараагийн шатны сургалтын тухай <a href="http://www.ipscaa.com/course2">энд </a>дарж мэдээлэл авна уу.</p>
                <!-- /wp:paragraph -->
                 `}
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
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfEnh6dDR2eRoaXt_A0VgloGBa8we5DVJtajhsw3KZghs7amw/formResponse?embedded=true"
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
