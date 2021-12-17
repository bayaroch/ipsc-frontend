import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import RulesContainer from '@containers/Pages/RulesContainer'
import ContentHeader from '@components/elements/ContentHeader'
import { Divider } from '@mui/material/'

const MatchRules: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={'Дасгалын зохиомж'} />
      <ContentWrapper topSpace={true}>
        <>
          <RulesContainer>
            <blockquote>
              <p style={{ textAlign: 'justify' }}>
                <strong>Аюулгүй байдал</strong>
              </p>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
              МЭБХ-ны тэмцээнийг бүх аюулгүй байдлын дүрмийн дагуу зохиож
              явуулна. 1-рт аюулгүй байдал.
            </p>
            <Divider style={{ marginBottom: 20, background: 'none' }} />
            <blockquote>
              <p style={{ textAlign: 'justify' }}>
                <strong>Чанар</strong>
              </p>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
              Практик буудлагын тэмцээний чанар тухайн дасгалыг гүйцэтгэх
              бэрхшээлээр тодорхойлогдоно. Дасгалуудыг зохиохдоо тэмцээнд
              оролцогчдын бие бялдарын бус буудлагын чадварыг шалгах зорилгоор
              тохируулна.
            </p>
            <Divider style={{ marginBottom: 20, background: 'none' }} />
            <blockquote>
              <p style={{ textAlign: 'justify' }}>
                <strong>Баланс</strong>
              </p>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
              Хурд, Хүч, Цэц нь практик буудлагын спортын үндсэн гурван элемент
              бөгөөд латинаар “Diligentia, Vis, Celeritas” (DVC) гэх ба дасгалын
              Баланс буюу тэнцвэрийг буудлагын сорилын давтагдашгүй байдлаар
              тодорхойлно. Дасгалыг зохиож тэмцээнийг явуулахдаа дээрхи гурван
              элементийг ижил тэнцүүгээр тооцно.
            </p>
            <Divider style={{ marginBottom: 20, background: 'none' }} />
            <blockquote>
              <p style={{ textAlign: 'justify' }}>
                <strong>Давтагдашгүй байдал</strong>
              </p>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
              МЭБХ-ны буудлагын зохиомж олон төрөл байх ба тэмцээн бүрт зориулж
              шинэ дасгалыг зохиох шаардлагагүй боловч нэг дасгалыг олон дахин
              давтан ашиглахгүй.
            </p>
            <Divider style={{ marginBottom: 20, background: 'none' }} />
            <blockquote>
              <p style={{ textAlign: 'justify' }}>
                <strong>Чөлөөт байдал</strong>
              </p>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
              МЭБХ-ны тэмцээн нь чөлөөт төрлийнх юм. Тэмцээнд оролцогчид тухайн
              дасгалын даалгаварыг гүйцэтгэхдээ өөрийн боломж, чадвараар
              гүйцэтгэнэ. Гэхдээ тухайн зохиомж дасгалыг гүйцэтгэхэд буудагчийг
              зайлшгүй байдалд оруулсан саад бэрхшээлүүд байж болно.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Үүнд: Бие бялдарын, тодорхой байрлалын, зогсох, бууг дахин
              цэнэглэх гэх мэт нөхцлүүд байж болно.
            </p>
            <Divider style={{ marginBottom: 20, background: 'none' }} />
            <blockquote>
              <p style={{ textAlign: 'justify' }}>
                <strong>Хүндрэл</strong>
              </p>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
              МЭБХ-ны тэмцээнд төрөл бүрийн саадуудыг ашиглаж болох ч энэ нь
              тэмцээнд оролцогчдын бие бялдарын онцлогт ижил тэгш нөхцөлтэй
              байхаар цаг хугацааны болон буудлагын саадыг тохируулна.
            </p>
            <Divider style={{ marginBottom: 20, background: 'none' }} />
            <blockquote>
              <p style={{ textAlign: 'justify' }}>
                <strong>Тэмцээн</strong>
              </p>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
              МЭБХ-ны тэмцээнд зэвсэгийг харгалзах ангилалд ангилан бүх
              оролцогчдод ижил тэгш нөхцөлийг бүрдүүлнэ.
            </p>
          </RulesContainer>
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default MatchRules
