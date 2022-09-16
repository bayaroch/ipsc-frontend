import SideBarMenu from '@components/common/SideBarMenu'
import { allproducts } from '@constants/featured.course'
import { Box, Grid, Typography } from '@mui/material/'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from '@mui/material/AccordionDetails'
import HTMLParser from '@components/common/HtmlParser'

const JuniorContainer: React.FC = () => {
  return (
    <>
      <Grid container>
        <Grid md={9} sm={12} xs={12} item>
          <Box
            sx={{
              width: '100%',
              paddingRight: { sm: 0, lg: '50px', md: '50px' },
              paddingBottom: '100px',
              overflow: 'hidden',
            }}
          >
            <HTMLParser
              html={`<p dir="ltr">
   <strong style="color:#ff9900;"> ЖУНИОР ХӨТӨЛБӨР</strong> 
</p>
<br/>
<p dir="ltr">
    Жуниор хөтөлбөр буюу хүүхдэд зориулсан буудлагын курс хичээл нь хүүхэд
    багачуудыг практик буудлагын спортод сонирхолтой болгох, буудлагын аюулгүй
    ажиллагаа, зэвсэгтэй харьцах мэдлэгийг олгох, цаашлаад байнга хичээллэж
    хөгжүүлэх сургалтын програм юм.
</p>
<br/>
<br/>
<p dir="ltr">
<strong style="color:#ff9900;"> Эзэмших чадварууд:</strong> 
</p>
<ul>
    <li dir="ltr">
        <p dir="ltr">
            Таны хүүхэд галт зэвсэгтэй харьцах анхан шатны ажиллагаанд эйрсофт
            спорт-сургалтын хэрэгслийг ашиглан аюулгүй суралцах болно.
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Зэвсэгтэй байнга ажилласнаар анхаарал болгоомж нэмэгдэж, анхаарал
            дээд цэгтээ тултал төвлөрч, богино хугацаанд шийдвэр төлөвлөгөө
            гаргаж, түүнийхээ дагуу алдаагүй гүйцэтгэхэд суралцана.
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Орчноос өөрийгөө тусгаарлан төвлөрөх, сэтгэл зүй болон хариу
            үйлдлээ хянах чадвартай болж, хариуцлага нэмэгдэнэ.
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Идэвхтэй хөдөлгөөн хийж, гар утасгүй орчинд амьд харилцаанд орно.
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Бусдад туслах, бусдаар туслуулах, бусдын өмнөөс хариуцлага хүлээх,
            алдаагаа хүлээн зөвшөөрөх чадвартай болно.
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Практик буудлагын спортын тамирчны ёс зүйд суралцаж бусдын орон
            зай, цаг хугацааг хүндэтгэх, өөрт олгогдсон боломжийг 100% ашиглаж
            чаддаг болно.
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Хууль эрх зүй, дүрэм журмын талаар ойлголттой болж, өөрийгөө
            спортын дүрэмд тулгуурлан өмгөөлөх, тайлбар өгөх, гомдол гаргах
            болон асуудлыг хэлэлцэх чадвартай болж хаана ч хэний ч өмнө
            өөрийгөө илэрхийлэх ур чадварт суралцана.
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Практик буудлагын спортын дүрэм, журмуудыг судлаж, спортын онцлог,
            үндсэн шинж чанарыг ойлгосноор зөвхөн хийн гар буу гэлтгүй бусад
            төрлүүдээр ч хичээллэх суурь техниктэй болно.
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Практик буудлагын спортын хийн гар бууны тэмцээн уралдаанд оролцох
            эрх нээгдэж, үндэсний шинж чанартай болон клубын, улсын, ОУ-ын
            тэмцээн цаашлаад ДАШТ-нд эх орноо төлөөлөн оролцох тамирчин болох
            боломжтой.
        </p>
    </li>
</ul>
<br/>
<p dir="ltr">
<strong style="color:#ff9900;"> Тавигдах шаардлага:</strong> 
</p>
<ul>
    <li dir="ltr">
        <p dir="ltr">
            12 - 16 настай байх.
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Эцэг, эх эсвэл хуулиар олгогдсон эрх бүхий асран хамгаалагч нь
            суралцагч хүүхдийн төлөөлөгчөөр бүртгүүлэн материал бүрдүүлж, гэрээ
            байгуулах.
        </p>
    </li>
</ul>
<br/>
<p dir="ltr">
<strong style="color:#ff9900;"> Бүрдүүлэх материал:</strong> 
</p>
<ul>
    <li dir="ltr">
        <p dir="ltr">
            Урьдчилсан бүртгэл (Веб сайтаар бүртгүүлснээр гар утсанд мэдээлэл
            очно)
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            4% цээж зураг (3*4 хэмжээтэй)
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Төрсний гэрчилгээний хуулбар
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Төлөөлөгчийн 1% цээж зураг (3*4 хэмжээтэй)
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Төлөөлөгчийн иргэний үнэмлэхийн цахим лавлагаа
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Төлөөлөгчийн оршин суугаа хаягийн цахим лавлагаа
        </p>
    </li>
</ul>
<p dir="ltr">
    Бүртгүүлэх материалыг хичээл эхлэхээс хамгийн багадаа 7 хоногийн өмнө
    бүрдүүлэн суралцагчийн төлөөлөгч өөрийн биеээр клубын бэлтгэл, сургалтын
    зааланд авч ирж анкет бөглөн гэрээ байгуулж, төлбөр төлж элсэлтийн бүртгэл
    баталгаажуулна. Элсэлтийн бүртгэл баталгаажснаар анхан шатанд сурагцагчдад
    зориулсан видео хичээл (Онлайн хичээл)-ийг үзэх боломжтой болно. Онлайн
    хичээлийг суралцагч нь сургалтын эхний өдөр ирэхдээ 100% үзэж танилцсан
    байх шаардлагатай.
</p>
<br/>
<p dir="ltr">
<strong style="color:#ff9900;">  Шаардлагатай зүйлс:</strong> 
</p>
<ul>
    <li dir="ltr">
        <p dir="ltr">
            Сольж өмсөх цэвэр ултай заалны пүүз
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Солих маск, гар ариутгагч
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Цэвэр усны сав эсвэл ус уух аяга
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Буудлагын бүсээ зүүх түдүүлтэй өмд
        </p>
    </li>
    <li dir="ltr">
        <p dir="ltr">
            Хамгаалалтын нүдний шил (Харааны шил зүүдэг бол шаардлагагүй)
        </p>
    </li>
</ul>
<br/>
<p dir="ltr">
    JR1 Class 7 хоногт 2 өдөр, өдөрт 4 цагаар сургалт, бэлтгэл, буудлагыг
    хуваарийн дагуу хийх болно. Шаардлагатай бүх хэрэгслийн ашиглалтын зардал
    сургалтын төлбөрт багтсан, хэрэв хувийн хэрэгсэлтэй тохиолдолд сургалтын
    төлбөр 80,000₮ хөнгөлөгдөнө.
</p>
<p dir="ltr">
    JR2 Class 7 хоногт 2 өдөр, өдөрт 3 цагаар сургалт, бэлтгэл хийх болно.
    Долоо хоног бүр клубын тэмцээнд нэмэлт хураамжгүй оролцоно. Өөрийн хувийн
    хэрэгсэлтэй байх шаардлагатай.
</p>
<p dir="ltr">
    JR3 Class Клубын зүгээс зохион байгуулж байгаа бүх түвшний тэмцээнд оролцох
    эрхтэй. Өөрийн хувийн хэрэгсэлтэй байх шаардлагатай. JR3 Class сурагчид
    УАШТ болон ОУ-ын тэмцээнд оролцох, ажлын өдрөөр клубын сургалтын талбайд
    хувийн бэлтгэл хийх эрхүүд нээгдэнэ.
</p>
<br/>
<p dir="ltr">
<strong style="color:#ff9900;">  Анги дэвших:</strong> 
</p>
<p dir="ltr">
    1-р түвшний сурагчид анги дэвшихэд нийт 56-с дээш цаг хичээллэсэн байх
    шаардлагатай бөгөөд клубын үндсэн зааланд аюулгүй ажиллагааны шалгалтыг өгч
    тэнцсэн тохиолдолд анги дэвших эрх нээгдэх бөгөөд шинэ сараас анги дэвшиж,
    бүртгэлийн дугаартай болсноор тэмцээнд оролцох эрх нээгдэх юм.
</p>
<div>
    <br/>
</div><div align="left" dir="ltr" style="margin-left:0pt;">
<table style="border:none;border-collapse:collapse;">
    <tbody>
        <tr style="height:0pt;">
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Ангиуд</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">JR1 Class</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">JR2 Class</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;margin-right: -27.549212598425157pt;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">JR3 Class</span></p>
            </td>
        </tr>
        <tr style="height:65.5pt;">
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Ангилал</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Standard, Production,</span></p>
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Production Optics</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Бүх ангилал нээлттэй</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Бүх ангилал нээлттэй</span></p>
            </td>
        </tr>
        <tr style="height:38.5pt;">
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Зэвсэг хэрэгсэл, буудлагын бүс, хамгаалалтын шил</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Сургалтын төлбөрт ашиглалтын зардал багтсан</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Хувийн хэрэгсэлтэй байх шаардлагатай</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Хувийн хэрэгсэлтэй байх шаардлагатай</span></p>
            </td>
        </tr>
        <tr style="height:38.5pt;">
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Сум, газ, цэвэрлэгээний зардал</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Сургалтын төлбөрт багтсан</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Сургалтын төлбөрт багтахгүй</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Сургалтын төлбөрт багтахгүй</span></p>
            </td>
        </tr>
        <tr style="height:38.5pt;">
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Долоо хоногт хичээллэх цаг</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">4 цагаар 2 өдөр /</span></p>
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">3 цагаар 3 өдөр</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">3 цагаар 2 өдөр</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Байхгүй</span></p>
            </td>
        </tr>
        <tr style="height:25pt;">
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Сард хичээллэх цаг</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">32 цаг</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">24 цаг</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Байхгүй</span></p>
            </td>
        </tr>
        <tr style="height:25pt;">
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Тэмцээнд оролцох</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Оролцохгүй</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Долоо хоногт 1 удаа оролцоно</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Дотоодын болон ОУ-ын тэмцээнд оролцох</span></p>
            </td>
        </tr>
        <tr style="height:25.75pt;">
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Төлбөр (1 сараар)</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">250,000₮</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">150,000₮</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Насанд хүрэгчдийн 50%</span></p>
            </td>
        </tr>
        <tr style="height:25.75pt;">
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Хичээллэх байршил:</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Клубын бэлтгэл, сургалтын заал</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Клубын бэлтгэл, сургалтын болон үндсэн заал</span></p>
            </td>
            <td style="border-left:solid #808080 0.5pt;border-right:solid #808080 0.5pt;border-bottom:solid #808080 0.5pt;border-top:solid #808080 0.5pt;vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;">
                <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Клубын бэлтгэл, сургалтын болон үндсэн заал</span></p>
            </td>
        </tr>
    </tbody>
</table>
</div>
<p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#ff9900;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Нэмэлт боломжууд:</span></p>
<ul >
<li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;">
   <span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2 ба түүнээс дээш түвшний сурагчид төлөөлөгчийн зөвшөөрөлтэйгөөр клубын ажилд туслан цагаар цалинжиж цалингаа сургалтын төлбөртөө тооцуулах боломжтой.</span></p>
</li>
<li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;">
    <span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">3-р түвшний сурагчид төлөөлөгчийн зөвшөөрөлтэйгөөр клубын шүүгчийн сургалтад хамрагдан тэмцээний үеээр туслах шүүгчийн үүрэг гүйцэтгэж шүүгчийн цалинг сургалтын төлбөртөө тооцуулах боломжтой.&nbsp;</span></p>
</li>
</ul>`}
            />
          </Box>
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
        </Grid>
        <Grid md={3} sm={12} xs={12} item>
          <SideBarMenu title="Сургалтууд" data={allproducts} />
        </Grid>
      </Grid>
    </>
  )
}

export default JuniorContainer

{
  /* <Box
            sx={{
              width: '100%',
              paddingRight: { sm: 0, lg: '50px', md: '50px' },
              paddingBottom: '100px',
              overflow: 'hidden',
              display: 'none',
            }}
          >
            <p>
              <span>Жуниор хөтөлбөр</span> буюу хүүхдэд зориулсан буудлагын курс
              хичээл нь 21-с доош насны хүүхэд багачуудыг практик буудлагын
              спортод сонирхолтой болгох, буудлагын аюулгүй ажиллагаа, зэвсэгтэй
              харьцах мэдлэгийг олгох, цаашлаад байнга хичээллэж хөгжүүлэх
              сургалтын програм юм.
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
                Олон нийттэй чөлөөтэй, нээлттэй харьцдаг болж, спортын өндөр ёс
                суртахуунтай болно
              </li>
              <li>
                Жуниор хөтөлбөрийн 1-р ангийн сурагч нь клубын эйрсофт
                хэрэгслийг хичээлдээ ашиглана. Мөн нүдний шил, бүс, гар бууны
                гэр, илүү дайз болон илүү дайзны гэр зэрэг тамирчинд байх ёстой
                бүх зүйлсийг клубын зүгээс хэрэглүүлэх болно
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
                Төрсөний гэрчилгээний хуулбарыг, гэрээнд гарын үсэг зурах хүний
                иргэний үнэмлэхийн хамт А4 цаасан дээр хуулбарлах
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
              оролцоно. Өөрийн хувийн хэрэгсэлтэй байх шаардлагатай. JR1 Class-д
              3 сар ба түүнээс дээш хугацаагаа хичээллээд анги дэвших аюулгүй
              ажиллагааны шалгалт өгч тэнцсэн тохиолдолд JR2 Class-д хичээллэх
              боломжтой болно.
            </p>
            <p>
              JR3 Class – Клубын зүгээс зохион байгуулж байгаа бүх түвшний
              тэмцээнд оролцох эрхтэй. Өөрийн хувийн хэрэгсэлтэй байх
              шаардлагатай. JR2 Class-д хичээллэх хугацаандаа гаргасан амжилтыг
              үндэслэн давтан сургалтанд хамруулж JR3 Class-д хичээллэх
              боломжтой. JR3 Class сурагчид УАШТ болон ОУ-ын тэмцээнд оролцох,
              ажлын өдрөөр клубын сургалтын талбайд бэлтгэл хийх эрхүүд
              нээгдэнэ.
            </p>
            <div style={{ wordBreak: 'break-all' }}>
              <table
                className="table  is-striped is-bordered"
                style={{ maxWidth: '100%' }}
              >
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
            </div>
            {/* <p>JR1A Class – Даваа, Лхагва, Баасан 08:00 – 11:00</p>
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
            <p>JR3 Class – Бүх түвшний тэмцээн + Хувийн бэлтгэл</p> */
}

//   <p>
//     <span>Бүрдүүлэх материал</span>
//   </p>
//   <figure>
//     <table className="table is-fullwidth is-striped is-bordered">
//       <tbody>
//         <tr>
//           <td>Шаардлагатай материал</td>
//           <td>Тайлбар</td>
//         </tr>
//         <tr>
//           <td>Бүртгэлийн анкет</td>
//           <td>
//             <div>
//               <div>
//                 Сургалтанд хамрагдах үед нь эцэг, эх, асран хамгаалагч
//                 нь бөглөнө
//               </div>
//             </div>
//           </td>
//         </tr>
//         <tr>
//           <td>4% Цээж зураг</td>
//           <td>3*4 хэмжээтэй байх</td>
//         </tr>
//         <tr>
//           <td>Бичиг баримт</td>
//           <td>
//             <div>
//               <div>
//                 Хүүхдийн төрсөний гэрчилгээг, гарын үсэг зурж төлөөлөх
//                 эцэг, эх, асран хамгаалагчийн иргэний үнэмлэхтэй хамт
//                 А4 цаасан дээр хуулбарласан байна
//               </div>
//             </div>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </figure>
// </Box>
