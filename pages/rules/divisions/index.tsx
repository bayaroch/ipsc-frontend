import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import RulesContainer from '@containers/Pages/RulesContainer'
import ContentHeader from '@components/elements/ContentHeader'
import { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box } from '@mui/material/'

const Divisions: PageWithLayoutType = () => {
  const [expanded, setExpanded] = useState<string | false>(false)
  const handleChange = (panel: string) => (
    _event: React.ChangeEvent<any>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={'Зэвсгийн ангилал'} />
      <ContentWrapper topSpace={true}>
        <>
          <RulesContainer>
            <div>
              Дивишн буюу зэвсгийн ангилал нь 6 төрөл байх бөгөөд тэмцээн зохион
              байгуулагчдын зүгээс ямар, ямар ангиллаар тэмцээн явуулахыг
              зарлана. Буудагч нь өөрийн зэвсгийг ашиглан ямар төрлөөр орж болох
              түүнийг нь сонгож оролцоно. Ангилал хооронд холилдохгүй бөгөөд
              бүгд өөр өөрсдийн ангиллын шаардлагын дагуу гар буугаа бэлдэж
              оролцоно. Буудагч нь өөрийн дивишнээ сонгоод түүнийгээ тууштай
              хөгжүүлэх нь илүү амжилт гаргах үндэс болно. Дивишн тус бүрийн
              шаардлага болон зөвлөгөөг дараах линкээр орж үзнэ үү.
            </div>
            <br />
            <Box
              sx={{
                root: {
                  width: '100%',
                },
              }}
            >
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
              >
                <AccordionSummary
                  sx={{
                    borderBottom: '1px solid #eee',
                    position: 'relative',
                    '&:after': {
                      position: 'absolute',
                      top: 0,
                      left: 140,
                      right: 100,
                      content: "''",
                      height: '100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'top center',
                      backgroundSize: 'fill',
                      bottom: 0,
                      backgroundImage: 'url(/images/divisions/open.jpg)',
                    },
                  }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{
                      fontSize: (theme) => theme.typography.pxToRem(15),
                      flexBasis: '33.33%',
                      flexShrink: 0,
                      marginBottom: '0 !important',
                      fontWeight: 700,
                    }}
                  >
                    Open Division
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ display: 'block' }}>
                  <p>
                    Опен буюу чөлөөт ангилал нь зэвсгийн хэмжээг
                    хязгаарладаггүй. Зөвхөн дайзны хэмжээг хязгаарлах бөгөөд
                    170мм-с бага хэмжээтэй 28-с илүүгүй ВВ сумаар цэнэглэх
                    ёстой.
                  </p>
                  <div className="table-container">
                    <table className="table is-fullwidth is-striped is-bordered is-reponsive">
                      <thead>
                        <tr>
                          <td />
                          <td />
                          <td>Open</td>
                          <td>Standard</td>
                          <td>Classic</td>
                          <td>Production</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>IPSC хайрцагт багтах</td>
                          <td>Шаардлагагүй</td>
                          <td>Шаардлагатай</td>
                          <td>Шаардлагатай</td>
                          <td>127мм гол төмөртэй байх</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Дайзны хамгийн том хэмжээг баримтлах</td>
                          <td>170мм (Хавсралт Е2 баримтлах)</td>
                          <td>Шаардлагатай</td>
                          <td>Шаардлагатай</td>
                          <td>Шаардлагатай</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Дайзны сумны хязгаар</td>
                          <td style={{ textAlign: 'center' }}>28</td>
                          <td style={{ textAlign: 'center' }}>18</td>
                          <td style={{ textAlign: 'center' }}>10</td>
                          <td style={{ textAlign: 'center' }}>15</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Гар бууны биеээс хамгийн хол байх зай</td>
                          <td
                            style={{ textAlign: 'center' }}
                            colSpan={4}
                            rowSpan={1}
                          >
                            50мм (Дүрмийн 5.2.5-г баримтлах)
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Дүрмийн 5.2.10 / хавсралт Е2 баримтлах</td>
                          <td>Шаардлагагүй</td>
                          <td>Шаардлагатай</td>
                          <td>Шаардлагатай</td>
                          <td>Шаардлагатай</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Электрон түргэн хараа ашиглах</td>
                          <td>Зөвшөөрнө</td>
                          <td>Зөвшөөрөхгүй</td>
                          <td>Зөвшөөрөхгүй</td>
                          <td>Зөвшөөрөхгүй</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Хошууны нэмэлт тоноглолыг зөвшөөрөх</td>
                          <td>Зөвшөөрнө</td>
                          <td>Зөвшөөрөхгүй</td>
                          <td>Зөвшөөрөхгүй</td>
                          <td>Зөвшөөрөхгүй</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Зөвлөмж: Эйрсофт буунд нэмж хийгдэх тоноглол нь өртөг өндөр
                    тул энэхүү ангилалд өрсөлдөх бол судалгаа сайтар хийж,
                    санхүүгийн ачааллаа зөв тооцоолно уу. ДАШТ-нд оролцсон 481
                    тамирчдын 175 нь опен ангилалд өрсөлдсөн бөгөөд өрсөлдөөн нь
                    маш ширүүн болж өнгөрдөг юм.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                  sx={{
                    borderBottom: '1px solid #eee',
                    position: 'relative',
                    '&:after': {
                      position: 'absolute',
                      top: 0,
                      right: 100,
                      content: "''",
                      height: '100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'top center',
                      backgroundSize: 'fill',
                      bottom: 0,
                      backgroundImage: 'url(/images/divisions/standard.jpg)',
                      left: 160,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: (theme) => theme.typography.pxToRem(15),
                      flexBasis: '33.33%',
                      flexShrink: 0,
                      marginBottom: '0 !important',
                      fontWeight: 700,
                    }}
                  >
                    Standard Division
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ display: 'block' }}>
                  <div>
                    <p style={{ textAlign: 'justify' }}>
                      Стандарт ангилал нь зэвсгийн хэмжээг IPSC box-д таарч
                      байхаар хязгаарладаг. Дайзыг 18-с илүүгүй ВВ сумаар
                      цэнэглэх ёстой.
                    </p>
                    <div className="table-container">
                      <table className="table is-fullwidth is-striped is-bordered is-reponsive">
                        <thead>
                          <tr>
                            <td />
                            <td />
                            <td>Open</td>
                            <td>Standard</td>
                            <td>Classic</td>
                            <td>Production</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>IPSC хайрцагт багтах</td>
                            <td>Шаардлагагүй</td>
                            <td>Шаардлагатай</td>
                            <td>Шаардлагатай</td>
                            <td>127мм гол төмөртэй байх</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Дайзны хамгийн том хэмжээг баримтлах</td>
                            <td>170мм (Хавсралт Е2 баримтлах)</td>
                            <td>Шаардлагатай</td>
                            <td>Шаардлагатай</td>
                            <td>Шаардлагатай</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Дайзны сумны хязгаар</td>
                            <td style={{ textAlign: 'center' }}>28</td>
                            <td style={{ textAlign: 'center' }}>18</td>
                            <td style={{ textAlign: 'center' }}>10</td>
                            <td style={{ textAlign: 'center' }}>15</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Гар бууны биеээс хамгийн хол байх зай</td>
                            <td
                              style={{ textAlign: 'center' }}
                              colSpan={4}
                              rowSpan={1}
                            >
                              50мм (Дүрмийн 5.2.5-г баримтлах)
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Дүрмийн 5.2.10 / хавсралт Е2 баримтлах</td>
                            <td>Шаардлагагүй</td>
                            <td>Шаардлагатай</td>
                            <td>Шаардлагатай</td>
                            <td>Шаардлагатай</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Электрон түргэн хараа ашиглах</td>
                            <td>Зөвшөөрнө</td>
                            <td>Зөвшөөрөхгүй</td>
                            <td>Зөвшөөрөхгүй</td>
                            <td>Зөвшөөрөхгүй</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>Хошууны нэмэлт тоноглолыг зөвшөөрөх</td>
                            <td>Зөвшөөрнө</td>
                            <td>Зөвшөөрөхгүй</td>
                            <td>Зөвшөөрөхгүй</td>
                            <td>Зөвшөөрөхгүй</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p style={{ textAlign: 'justify' }}>
                      Зөвлөмж: Эйрсофт буунд нэмж хийгдэх тоноглол нь өртөг
                      өндөр тул энэхүү ангилалд өрсөлдөх бол судалгаа сайтар
                      хийж, санхүүгийн ачааллаа зөв тооцоолно уу. ДАШТ-нд
                      оролцсон 481 тамирчдын 213 нь стандарт ангилалд өрсөлдсөн
                      бөгөөд өрсөлдөөн нь маш ширүүн болж өнгөрдөг юм.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                      Ерөнхийдөө бол түргэн хараа, компенсаторгүй, богино
                      дайзтай опен ангилал гэж ойлгоход болно.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                      Хамгийн тохиромжтой зэвсэг нь Hi-Capa, STI төрлийн гар
                      буунууд юм. Мөн стандарт ангиллын шаардлагыг хангаж л
                      байвал тэрхүү бууг хүн өөрөө гэртээ угсарсан ч байж
                      болдог, заавал ямар нэгэн бууг засч сайжруулах биш өөртөө
                      зориулаад CNC machine, 3D printer-ээр хүртэл хийж тэмцээнд
                      оролцдог шилдэг буудагчид маш их болсон.
                    </p>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                  sx={{
                    borderBottom: '1px solid #eee',
                    position: 'relative',
                    '&:after': {
                      position: 'absolute',
                      top: 0,
                      right: 100,
                      content: "''",
                      height: '100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'top center',
                      backgroundSize: 'fill',
                      bottom: 0,
                      backgroundImage: 'url(/images/divisions/classic.jpg)',
                      left: 180,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: (theme) => theme.typography.pxToRem(15),
                      flexBasis: '33.33%',
                      flexShrink: 0,
                      marginBottom: '0 !important',
                      fontWeight: 700,
                    }}
                  >
                    Classic Division
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ display: 'block' }}>
                  <p>
                    Классик ангилал нь зэвсгийн хэмжээг IPSC box-д таарч байхаар
                    хязгаарладаг бөгөөд зөвхөн 1911 загварын гар буунд зориулсан
                    дивишн юм. Дайзыг 10-с илүүгүй ВВ сумаар цэнэглэх ёстой.
                  </p>
                  <div className="table-container">
                    <table className="table is-fullwidth is-striped is-bordered is-reponsive">
                      <thead>
                        <tr>
                          <td />
                          <td />
                          <td>Open</td>
                          <td>Standard</td>
                          <td>Classic</td>
                          <td>Production</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>IPSC хайрцагт багтах</td>
                          <td>Шаардлагагүй</td>
                          <td>Шаардлагатай</td>
                          <td>Шаардлагатай</td>
                          <td>127мм гол төмөртэй байх</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Дайзны хамгийн том хэмжээг баримтлах</td>
                          <td>170мм (Хавсралт Е2 баримтлах)</td>
                          <td>Шаардлагатай</td>
                          <td>Шаардлагатай</td>
                          <td>Шаардлагатай</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Дайзны сумны хязгаар</td>
                          <td style={{ textAlign: 'center' }}>28</td>
                          <td style={{ textAlign: 'center' }}>18</td>
                          <td style={{ textAlign: 'center' }}>10</td>
                          <td style={{ textAlign: 'center' }}>15</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Гар бууны биеээс хамгийн хол байх зай</td>
                          <td
                            style={{ textAlign: 'center' }}
                            colSpan={4}
                            rowSpan={1}
                          >
                            50мм (Дүрмийн 5.2.5-г баримтлах)
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Дүрмийн 5.2.10 / хавсралт Е2 баримтлах</td>
                          <td>Шаардлагагүй</td>
                          <td>Шаардлагатай</td>
                          <td>Шаардлагатай</td>
                          <td>Шаардлагатай</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Электрон түргэн хараа ашиглах</td>
                          <td>Зөвшөөрнө</td>
                          <td>Зөвшөөрөхгүй</td>
                          <td>Зөвшөөрөхгүй</td>
                          <td>Зөвшөөрөхгүй</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Хошууны нэмэлт тоноглолыг зөвшөөрөх</td>
                          <td>Зөвшөөрнө</td>
                          <td>Зөвшөөрөхгүй</td>
                          <td>Зөвшөөрөхгүй</td>
                          <td>Зөвшөөрөхгүй</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      <strong>Зөвлөмж:</strong> Эйрсофт буунд нэмж хийгдэх
                      тоноглол нь өртөг өндөр тул энэхүү ангилалд өрсөлдөх бол
                      судалгаа сайтар хийж, санхүүгийн ачааллаа зөв тооцоолно
                      уу. ДАШТ-нд оролцсон 481 тамирчдын 33 нь классикангилалд
                      өрсөлдсөн бөгөөд өрсөлдөгч багатай ч өрсөлдөгчид нь олон
                      жил буудсан туршлагатай буудагчид байх нь олон. Классик
                      ангиллын буу нь шууд стандарт ангиллын тэмцээнд оролцоход
                      бэлэн байх ёстой. Учир нь стандарт ангиллын бүх
                      хязгаарлалтад хүрдэггүй нарийн дайзтай, дайзны цонх
                      жижигтэй хэцүү дивишн юм. Тиймээс буудагч нь энэхүү
                      дивишнээр тэмцээн уралдаанд оролцож, бэлтгэл сургууль хийх
                      нь буудагчийг дайз солих техникийг илүү хурдан болгож
                      өгдөг, учир нь дайзандаа 10хан сумтай шүү дээ. Мөн түүндээ
                      тааруулаад дайз солих цэгүүдээ маш сайн тодорхойлж сурдаг.
                      Төлөвлөгөө гаргалт нь илүү нарийн байдаг бөгөөд илүү
                      буудал хийхэд маш том эрсдэл үүрдэг нарийн төвөгтэй дивишн
                      юм.
                    </p>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                  sx={{
                    borderBottom: '1px solid #eee',
                    position: 'relative',
                    '&:after': {
                      position: 'absolute',
                      top: 0,
                      right: 100,
                      content: "''",
                      height: '100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'top center',
                      backgroundSize: 'fill',
                      bottom: 0,
                      backgroundImage: 'url(/images/divisions/production.jpg)',
                      left: 200,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: (theme) => theme.typography.pxToRem(15),
                      flexBasis: '33.33%',
                      flexShrink: 0,
                      marginBottom: '0 !important',
                      fontWeight: 700,
                    }}
                  >
                    Production Division
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ display: 'block' }}>
                  <p>
                    Зөвхөн{' '}
                    <a
                      href="https://ipsc-france.fr/file/2017/08/IPSC-Production-Division-List.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      продакшн лист
                    </a>
                    -нд багтсан гар бууг хэрэглэнэ. Өөр төрлийн гар бууг
                    зөвшөөрөхгүй.
                  </p>
                  <div className="table-container">
                    <table className="table is-fullwidth is-striped is-bordered is-reponsive">
                      <thead>
                        <tr>
                          <td />
                          <td />
                          <td>Open</td>
                          <td>Standard</td>
                          <td>Classic</td>
                          <td>Production</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>IPSC хайрцагт багтах</td>
                          <td>Шаардлагагүй</td>
                          <td>Шаардлагатай</td>
                          <td>Шаардлагатай</td>
                          <td>127мм гол төмөртэй байх</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Дайзны хамгийн том хэмжээг баримтлах</td>
                          <td>170мм (Хавсралт Е2 баримтлах)</td>
                          <td>Шаардлагатай</td>
                          <td>Шаардлагатай</td>
                          <td>Шаардлагатай</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Дайзны сумны хязгаар</td>
                          <td>28</td>
                          <td>18</td>
                          <td>10</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Гар бууны биеээс хамгийн хол байх зай</td>
                          <td colSpan={4} rowSpan={1}>
                            50мм (Дүрмийн 5.2.5-г баримтлах)
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Дүрмийн 5.2.10 / хавсралт Е2 баримтлах</td>
                          <td>Шаардлагагүй</td>
                          <td>Шаардлагатай</td>
                          <td>Шаардлагатай</td>
                          <td>Шаардлагатай</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Электрон түргэн хараа ашиглах</td>
                          <td>Зөвшөөрнө</td>
                          <td>Зөвшөөрөхгүй</td>
                          <td>Зөвшөөрөхгүй</td>
                          <td>Зөвшөөрөхгүй</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Хошууны нэмэлт тоноглолыг зөвшөөрөх</td>
                          <td>Зөвшөөрнө</td>
                          <td>Зөвшөөрөхгүй</td>
                          <td>Зөвшөөрөхгүй</td>
                          <td>Зөвшөөрөхгүй</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p style={{ textAlign: 'justify' }}>
                    <strong>Зөвлөмж:</strong> Эйрсофт буунд нэмэлт тоноглол
                    хийхгүй тул санхүүгийн ачаалал багатай. ДАШТ 2018-нд
                    оролцсон 481 тамирчдын 60 нь продакшн ангилалд өрсөлдсөн
                    бөгөөд өрсөлдөгч багатай, боловч маш хурдацтай нэмэгдэж
                    байгаа.
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    Продакшн ангиллын буудагч нь бэлэн байдлын 1-р төлвөөс чавх
                    буулгаж, хатуу гохноос эхний буудалтыг хийдэг тул ил чавхтай
                    буутай буудагчид хугацааны хувьд бага зэрэг алдагдалтай.
                    Харин Glock төрлийн гар буу нь далд чавхтай тул энэ талаараа
                    давуу тал гарч ирдэг.
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    Хамгийн тохиромжтой зэвсэг нь Tokyo Marui Glock 17 загвар
                    юм. Сэлбэг, хэрэгсэл нь түгээмэл, хуванцар замаг нь хөнгөн
                    явалттай, хурдтай буудалт хийх боломж илүү байдаг.
                  </p>
                  <div
                    id="jp-post-flair"
                    className="sharedaddy sd-sharing-enabled"
                  ></div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel5'}
                onChange={handleChange('panel5')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5bh-content"
                  id="panel5bh-header"
                  sx={{
                    borderBottom: '1px solid #eee',
                    position: 'relative',
                    '&:after': {
                      position: 'absolute',
                      top: 0,
                      right: 100,
                      content: "''",
                      height: '100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'top center',
                      backgroundSize: 'fill',
                      bottom: 0,
                      left: 220,
                      backgroundImage: 'url(/images/divisions/optics.jpg)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: (theme) => theme.typography.pxToRem(15),
                      flexBasis: '33.33%',
                      flexShrink: 0,
                      marginBottom: '0 !important',
                      fontWeight: 700,
                    }}
                  >
                    Production Optics Divison
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ display: 'block' }}>
                  {' '}
                  <p>Тун удахгүй...</p>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel6'}
                onChange={handleChange('panel6')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6bh-content"
                  id="panel6bh-header"
                  sx={{
                    borderBottom: '1px solid #eee',
                    position: 'relative',
                    '&:after': {
                      position: 'absolute',
                      top: 0,
                      left: 140,
                      right: 100,
                      content: "''",
                      height: '100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'top center',
                      backgroundSize: 'fill',
                      bottom: 0,
                      backgroundImage: 'url(/images/divisions/light.jpg)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: (theme) => theme.typography.pxToRem(15),
                      flexBasis: '33.33%',
                      flexShrink: 0,
                      marginBottom: '0 !important',
                      fontWeight: 700,
                    }}
                  >
                    Production Optics Light Divison
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ display: 'block' }}>
                  <p>Тун удахгүй...</p>
                </AccordionDetails>
              </Accordion>
            </Box>
          </RulesContainer>
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default Divisions
