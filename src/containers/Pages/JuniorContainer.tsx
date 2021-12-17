import SideBarMenu from '@components/common/SideBarMenu'
import { allproducts } from '@constants/featured.course'
import { Grid, Box, Typography } from '@mui/material/'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from '@mui/material/AccordionDetails'

const JuniorContainer: React.FC = () => {
  return (
    <>
      <Grid container>
        <Grid md={9} sm={12} item>
          <Box sx={{ paddingRight: '50px', paddingBottom: '100px' }}>
            <div>
              <p>
                <span>Жуниор хөтөлбөр</span> буюу хүүхдэд зориулсан буудлагын
                курс хичээл нь 21-с доош насны хүүхэд багачуудыг практик
                буудлагын спортод сонирхолтой болгох, буудлагын аюулгүй
                ажиллагаа, зэвсэгтэй харьцах мэдлэгийг олгох, цаашлаад байнга
                хичээллэж хөгжүүлэх сургалтын програм юм.
              </p>
              <p>
                <span>Давуу талууд:</span>
              </p>
              <ul>
                <li>
                  Таны хүүхэд галт зэвсэгтэй харьцах анхан шатны ажиллагаанд
                  эйрсофт спорт-сургалтын хэрэгслийг ашиглан суралцах болно
                </li>
                <li>
                  Зэвсэгтэй байнга ажиллаж, буудлагын дасгал хийх нь анхаарал
                  төвлөрөх, сэтгэл зүйгээ удирдаж сурах, сэтгэн бодох чадварыг
                  нэмэгдүүлдэг
                </li>
                <li>Нүдний хараанд сайнаар нөлөөлдөг</li>
                <li>Идэвхтэй хөдөлгөөн хийнэ</li>
                <li>
                  Олон нийттэй чөлөөтэй, нээлттэй харьцдаг болж, спортын өндөр
                  ёс суртахуунтай болно
                </li>
                <li>
                  Жуниор хөтөлбөрийн 1-р ангийн сурагч нь клубын эйрсофт
                  хэрэгслийг хичээлдээ ашиглана. Мөн нүдний шил, бүс, гар бууны
                  гэр, илүү дайз болон илүү дайзны гэр зэрэг тамирчинд байх
                  ёстой бүх зүйлсийг клубын зүгээс хэрэглүүлэх болно
                </li>
              </ul>
              <p>
                <span>Хэрхэн бүртгүүлэх вэ?</span>
              </p>
              <ul>
                <li>12 – 21 настай байх</li>
                <li>Эцэг эхийн зөвшөөрөл бүхий анкет бөглөж гэрээ байгуулах</li>
                <li>4% цээж зураг (3*4 хэмжээтэй)</li>
                <li>
                  Төрсөний гэрчилгээний хуулбарыг, гэрээнд гарын үсэг зурах
                  хүний иргэний үнэмлэхийн хамт А4 цаасан дээр хуулбарлах
                </li>
              </ul>
              <p>
                JR1 Class – 7 хоногт ажлын 3 өдөр, өдөрт 3 цагийн хичээл авч
                сургалт, бэлтгэл, буудлагыг хуваарийн дагуу хийх болно. Бүх
                хэрэгслийг клубээс хангана, хэрэв хувийн хэрэгсэлтэй тохиолдолд
                сургалтын төлбөр хөнгөлөгдөнө.
              </p>
              <p>
                JR2 Class – 7 хоногт ажлын 2 өдөр, өдөрт 3 цагийн хичээл авч
                сургалт, бэлтгэл хийх болно. Долоо хоногт 1 удаа клубын тэмцээнд
                оролцоно. Өөрийн хувийн хэрэгсэлтэй байх шаардлагатай. JR1
                Class-д 3 сар ба түүнээс дээш хугацаагаа хичээллээд анги дэвших
                аюулгүй ажиллагааны шалгалт өгч тэнцсэн тохиолдолд JR2 Class-д
                хичээллэх боломжтой болно.
              </p>
              <p>
                JR3 Class – Клубын зүгээс зохион байгуулж байгаа бүх түвшний
                тэмцээнд оролцох эрхтэй. Өөрийн хувийн хэрэгсэлтэй байх
                шаардлагатай. JR2 Class-д хичээллэх хугацаандаа гаргасан
                амжилтыг үндэслэн давтан сургалтанд хамруулж JR3 Class-д
                хичээллэх боломжтой. JR3 Class сурагчид УАШТ болон ОУ-ын
                тэмцээнд оролцох, ажлын өдрөөр клубын сургалтын талбайд бэлтгэл
                хийх эрхүүд нээгдэнэ.
              </p>
              <table className="table is-fullwidth is-striped is-bordered">
                <tbody>
                  <tr>
                    <td>Анги</td>
                    <td>JR1 Class</td>
                    <td>JR2 Class</td>
                    <td>JR3 Class</td>
                  </tr>
                  <tr>
                    <td>Ангилал</td>
                    <td>Production</td>
                    <td>Production, Standard, Production Optics</td>
                    <td>All Division</td>
                  </tr>
                  <tr>
                    <td>
                      <div>Хэрэгсэл</div>
                    </td>
                    <td>Клубээс гаргана Glock 17 Gen.5</td>
                    <td>
                      <div>Өөрийн хэрэгсэл</div>
                    </td>
                    <td>
                      <div>Өөрийн хэрэгсэл</div>
                    </td>
                  </tr>
                  <tr>
                    <td>Сум, газны зардал</td>
                    <td>Клубээс гаргана</td>
                    <td>Клубээс гаргахгүй</td>
                    <td>Клубээс гаргахгүй</td>
                  </tr>
                  <tr>
                    <td>Буудлагын бүс, хамгаалах шил</td>
                    <td>Клубээс гаргана</td>
                    <td>Клубээс гаргана</td>
                    <td>Өөрийн хэрэгсэл</td>
                  </tr>
                  <tr>
                    <td>Хичээлийн хуваарь</td>
                    <td>Даваа, Лхагва, Баасан 3 цаг</td>
                    <td>Мягмар, Пүрэв 3 цаг</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Сард хичээллэх цаг</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Төлбөр (1 сар)</td>
                    <td>210,000₮</td>
                    <td>120,000₮</td>
                    <td>80,000₮</td>
                  </tr>
                  <tr>
                    <td>Төлбөр (2 сар)</td>
                    <td>380,000₮</td>
                    <td>220,000₮</td>
                    <td>160,000₮</td>
                  </tr>
                  <tr>
                    <td>Төлбөр (3 сар)</td>
                    <td>510,000₮</td>
                    <td>300,000₮</td>
                    <td>240,000₮</td>
                  </tr>
                </tbody>
              </table>
              <p>JR1A Class – Даваа, Лхагва, Баасан 08:00 – 11:00</p>
              <p>JR1B Class – Даваа, Лхагва, Баасан 11:30 – 14:30 </p>
              <p>JR1C Class – Даваа, Лхагва, Баасан 15:00 – 18:00 </p>
              <p>
                JR2A Class – Мягмар, Пүрэв 08:00 – 11:00 + Амралтын өдрүүдэд Lv1
                түвшний тэмцээн
              </p>
              <p>
                JR2B Class – Мягмар, Пүрэв 11:30 – 14:30 + Амралтын өдрүүдэд Lv1
                түвшний тэмцээн{' '}
              </p>
              <p>
                JR2C Class – Мягмар, Пүрэв 15:00 – 18:00 + Амралтын өдрүүдэд Lv1
                түвшний тэмцээн{' '}
              </p>
              <p>JR3 Class – Бүх түвшний тэмцээн + Хувийн бэлтгэл</p>

              <Accordion sx={{ marginTop: '20px', marginBottom: '20px' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h3" component="h3">
                    Бүртгүүлэх
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSd1wpiVjiguSla-mIp25TrzzOd_NgSVp4saPFsNm96KuFevfw/viewform?embedded=true"
                    frameBorder="0"
                    width="100%"
                    height="3100"
                    marginHeight={0}
                    marginWidth={0}
                    allowFullScreen={true}
                  ></iframe>
                </AccordionDetails>
              </Accordion>

              <p>
                <span>Бүрдүүлэх материал</span>
              </p>
              <figure>
                <table className="table is-fullwidth is-striped is-bordered">
                  <tbody>
                    <tr>
                      <td>Шаардлагатай материал</td>
                      <td>Тайлбар</td>
                    </tr>
                    <tr>
                      <td>Бүртгэлийн анкет</td>
                      <td>
                        <div>
                          <div>
                            Сургалтанд хамрагдах үед нь эцэг, эх, асран
                            хамгаалагч нь бөглөнө
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4% Цээж зураг</td>
                      <td>3*4 хэмжээтэй байх</td>
                    </tr>
                    <tr>
                      <td>Бичиг баримт</td>
                      <td>
                        <div>
                          <div>
                            Хүүхдийн төрсөний гэрчилгээг, гарын үсэг зурж
                            төлөөлөх эцэг, эх, асран хамгаалагчийн иргэний
                            үнэмлэхтэй хамт А4 цаасан дээр хуулбарласан байна
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </figure>
            </div>
          </Box>
        </Grid>

        <Grid md={3} sm={12} item>
          <SideBarMenu title="Сургалтууд" data={allproducts} />
        </Grid>
      </Grid>
    </>
  )
}

export default JuniorContainer
