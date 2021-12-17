import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import { Box, Typography } from '@mui/material/'

const RulesMatch: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentWrapper topSpace={true}>
        <>
          <Box style={{ paddingTop: 100, paddingBottom: 100 }}>
            <Typography
              variant="h1"
              component="h2"
              align="center"
              style={{ marginBottom: 40 }}
            >
              МПБХ-ны тэмцээн явуулах журам
            </Typography>
            <Box textAlign="center">
              <img
                style={{ maxWidth: '100%', height: 'auto' }}
                src="/images/email-sign.png"
              />
            </Box>
            <div className="entry-content" style={{ marginTop: 40 }}>
              <ul className="list">
                <li>
                  Тэмцээн зохион байгуулагчид нь МПБХ-оос гаргасан дүрэм,
                  аюулгүй ажиллагааны зааврын дагуу дасгалыг зохиож МПБХ-с албан
                  ёсоор зөвшөөрөл авч тэмцээнийг явуулна. Дээрхи шаардлага
                  дүрэм, журамд нийцээгүй тэмцээнийг МПБХ-с зөвшөөрөхгүй.
                </li>

                <li>
                  МПБХ-ны тэргүүн, нарийн бичгийн дарга, шүүгчдийн зөвлөлөөс
                  тухайн тэмцээн, уралдаанд МПБХ-ны аюулгүй ажиллагааны болон
                  бусад дүрэм, журам зөрчигдсөн гэж үзвэл ямар ч үед тэмцээнийг
                  зогсоож болно. III түвшин болон түүнээс дээшхи түвшиний
                  тэмцээний нөхцөлийг МПБХ-оор дамжуулан ОУПБХ-д хүргүүлж
                  зөвшөөрөл авна.
                </li>

                <li>
                  ГРАНД-ТУРНИР. ОУПБХ-оос зөвшөөрөл авах тохиолдолд тухайн Гранд
                  турнирын үе бүрийн түвшний зөвшөөрөл авсан тохиолдолд Гранд
                  турнирыг тухайн түвшинийх гэж тооцно.
                </li>
                <li>
                  <p style={{ textAlign: 'justify' }}>
                    Хавсралт А1-д МПБХ-ны тэмцээний түвшинд тавигдах шаардлага
                    болон зөвлөмжийг хавсаргав.
                  </p>
                </li>
              </ul>
            </div>
          </Box>
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default RulesMatch
