import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import { Box, Typography } from '@material-ui/core'

const RulesRating: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentWrapper topSpace={true}>
        <>
          <div
            className="page-content"
            style={{ paddingBottom: 100, paddingTop: 100 }}
          >
            <Typography
              variant="h1"
              component="h2"
              align="center"
              style={{ marginBottom: 40 }}
            >
              Тамирчдын чансаа тодорхойлох журам
            </Typography>
            <Box textAlign="center">
              <img
                style={{ maxWidth: '100%', height: 'auto' }}
                src="/images/email-sign.png"
              />
            </Box>
            <p>&nbsp;</p>
            <p style={{ textAlign: 'center' }}>
              <strong></strong>
            </p>
            <p style={{ textAlign: 'right' }}>
              <em>2019.01.02&nbsp; </em>
            </p>
            <ol>
              <li>
                Тамирчдын чансаа тодорхойлох журам нь зөвхөн “Монголын Практик
                Буудлагын Холбоо”-ны “Экшн эйр буудлагын клуб”-ын гишүүдэд
                хамаарна.
              </li>
            </ol>
            <ol start={2}>
              <li>
                Тамирчдын чансааг тодорхойлохдоо Монгол улсад болон гадаадын
                оронд зохион байгуулагдаж байгаа практик буудлагын спортын “хийн
                гар буу” төрлийн тэмцээнд МПБХ-ны зөвшөөрлөөр оролцож байгаа
                тамирчдын тэмцээнд оролцсон гүйцэтгэлийн %-ийг оноо болгож
                бүртгэнэ.
              </li>
            </ol>
            <ol start={3}>
              <li>
                Тамирчдын чансааг тодорхойлоход тухайн тамирчин нь хамгийн
                багадаа тухайн ангилалд 10 удаагийн тэмцээнд оролцсон байх
                шаардлагатай бөгөөд нийт онооны хамгийн өндөр 10 онооны
                нийлбэрээр тооцно.
              </li>
            </ol>
            <ol start={4}>
              <li>
                Тэмцээний дүнг танилцуулснаас хойш 48 цагийн дотор чансааг
                шинэчилж веб сайтад оруулна.
              </li>
              <li>
                Тухайн тэмцээн нь хэд дүгээр түвшний тэмцээнээс хамаарч авсан
                оноог 1-5 дахин үржүүлж оруулна. Жишээ нь: 2-р түвшний тэмцээнд
                1-р байр эзлэж 100% гүйцэтгэлтэй оролцсон бол 200 оноогоор
                бүртгэнэ.
              </li>
            </ol>
            <p>
              6 . Тэмцээнд оролцсон тамирчны цуглуулсан оноо нь зөвхөн тухайн
              тамирчны хувийн оноо тул өөр тамирчинд шилжүүлэх, бэлэглэх ямар ч
              боломжгүй.
            </p>
          </div>
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default RulesRating
